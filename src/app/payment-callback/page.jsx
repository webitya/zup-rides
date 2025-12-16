"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ErrorIcon from "@mui/icons-material/Error"
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty"

import { jsPDF } from "jspdf"
import DownloadIcon from "@mui/icons-material/Download"
import { formatReceiptDate, formatReceiptDateTime, formatTransactionDate } from "../../lib/date-utils"
// Note: We are not importing the image because jsPDF needs it as base64 or loaded image object.

export default function PaymentCallback() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get("bookingId")
  const merchantOrderId = searchParams.get("merchantOrderId")
  const txnId = searchParams.get("txnId") // Fallback
  const orderId = merchantOrderId || txnId

  const [status, setStatus] = useState("loading")
  const [paymentDetails, setPaymentDetails] = useState(null)

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        if (!orderId) {
          setStatus("failed")
          return
        }

        // Call backend to verify payment status
        const response = await fetch("/api/phonepe-status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ merchantOrderId: orderId }),
        })

        const data = await response.json()

        if (data.success && (data.code === "PAYMENT_SUCCESS" || data.state === "COMPLETED")) {
          setStatus("success")
          setPaymentDetails(data.data || data) // handle both data structures
        } else if (data.code === "PAYMENT_PENDING" || data.state === "PENDING") {
          setStatus("pending")
        } else {
          console.warn("Payment failed or invalid state:", data)
          setStatus("failed")
        }
      } catch (error) {
        console.error("[Payment Callback] Verification error:", error)
        setStatus("failed")
      }
    }

    verifyPayment()
  }, [orderId])

  const downloadReceipt = async () => {
    if (!paymentDetails) return

    // --- Helper to parse UDFs ---
    // UDF1: Name
    // UDF2: Email
    // UDF3: Phone
    // UDF4: `VN:${vehicleName}|NO:${vehicleNumber}`
    // UDF5: `SD:${startDate}|ED:${endDate}|MSG:${message}`

    // Helper to safely get UDF value checking multiple possible locations
    const getUdf = (key) => {
      return paymentDetails.paymentDetails?.instrumentResponse?.redirectInfo?.metaInfo?.[key] ||
        paymentDetails.metaInfo?.[key] ||
        ""
    }

    const name = getUdf("udf1")
    const email = getUdf("udf2")
    const phone = getUdf("udf3")
    const udf4 = getUdf("udf4")
    const udf5 = getUdf("udf5")

    const parseUdf = (str) => {
      const res = {}
      if (!str) return res
      str.split("|").forEach(part => {
        const [k, ...v] = part.split(":")
        if (k && v) res[k] = v.join(":")
      })
      return res
    }

    const vData = parseUdf(udf4)
    const mData = parseUdf(udf5)

    const vehicleName = vData.VN && vData.VN !== "NA" ? vData.VN : ""
    const vehicleNumber = vData.NO && vData.NO !== "NA" ? vData.NO : ""
    const startDate = mData.SD && mData.SD !== "NA" ? mData.SD : ""
    const endDate = mData.ED && mData.ED !== "NA" ? mData.ED : ""

    // Fix Transaction ID: Check top level, paymentDetails, or use orderId as last resort
    const finalTxnId = paymentDetails.transactionId ||
      paymentDetails.paymentDetails?.transactionId ||
      paymentDetails.providerReferenceId ||
      txnId ||
      bookingId ||
      "N/A"

    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 20

    // Header Color Strip (Dark/Black Theme)
    doc.setFillColor(30, 41, 59) // Slate-900 (Dark)
    doc.rect(0, 0, pageWidth, 40, 'F')

    // --- LOGO Handling ---
    try {
      // Load image proactively
      const logoUrl = "/logo.webp"
      const response = await fetch(logoUrl)
      if (response.ok) {
        const blob = await response.blob()
        const reader = new FileReader()
        const base64data = await new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(blob)
        })
        // Add image
        doc.addImage(base64data, 'WEBP', margin, 10, 20, 20) // x, y, w, h
      }
    } catch (e) {
      console.error("Failed to load logo for receipt", e)
    }

    // Header Text
    doc.setFontSize(22)
    doc.setTextColor(255, 255, 255)
    doc.text("Zup Rides", margin + 25, 20) // Offset for logo

    doc.setFontSize(12)
    doc.setTextColor(203, 213, 225) // Light gray for subtitle
    doc.text("Premium Two Wheeler Rentals", margin + 25, 28)

    doc.setFontSize(16)
    doc.setTextColor(255, 255, 255)
    doc.text("RECEIPT", pageWidth - margin - 30, 25)

    // Content
    let yPos = 60
    const lineHeight = 10

    const addRow = (label, value) => {
      if (!value) return
      doc.setFontSize(11)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(60, 60, 60)
      doc.text(label, margin, yPos)

      doc.setFont("helvetica", "normal")
      doc.setTextColor(0, 0, 0)

      const valWidth = doc.getTextWidth(value)
      doc.text(value, pageWidth - margin - valWidth, yPos)

      yPos += lineHeight
    }

    // Details
    const amount = (paymentDetails.amount / 100).toFixed(2)
    // The 'date' variable below is no longer used for the top date string,
    // but can be kept if needed for a row in the table.
    const date = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()

    addRow("Date:", date)
    addRow("Booking ID:", bookingId || "N/A")
    addRow("Transaction ID:", finalTxnId)

    // Customer Details
    if (name) addRow("Name:", name)
    if (email) addRow("Email:", email)
    if (phone) addRow("Phone:", phone)

    // Separator
    yPos += 5
    doc.setDrawColor(230, 230, 230)
    doc.line(margin, yPos, pageWidth - margin, yPos)
    yPos += 15

    if (vehicleName) addRow("Vehicle:", vehicleName)
    if (vehicleNumber) addRow("Vehicle Number:", vehicleNumber)
    if (startDate) addRow("Start Date:", formatReceiptDateTime(startDate))
    if (endDate) addRow("End Date:", formatReceiptDateTime(endDate))

    addRow("Payment Status:", "Successful")

    // Total Amount Box
    yPos += 20
    // Total Amount Box (Neutral Gray/White)
    yPos += 20
    doc.setFillColor(248, 250, 252) // Very light gray bg
    doc.setDrawColor(226, 232, 240) // border
    doc.roundedRect(margin, yPos, pageWidth - (margin * 2), 25, 3, 3, 'FD')

    yPos += 17
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(15, 23, 42) // Dark Slate
    doc.text("Total Paid", margin + 10, yPos)

    const amountText = `Rs. ${amount}`
    const amountWidth = doc.getTextWidth(amountText)
    doc.text(amountText, pageWidth - margin - 10 - amountWidth, yPos)

    // Footer
    const footerY = pageHeight - 30
    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(150, 150, 150)
    doc.text("Thank you for choosing Zup Rides!", pageWidth / 2, footerY, { align: "center" })
    doc.text("www.zuprides.in", pageWidth / 2, footerY + 6, { align: "center" })

    doc.save(`Receipt_${bookingId || txnId}.pdf`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {status === "loading" && (
          <div className="p-8 text-center">
            <div className="mb-6 flex justify-center">
              <HourglassEmptyIcon className="text-blue-500 animate-spin" sx={{ fontSize: 80 }} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Processing Payment...</h1>
            <p className="text-gray-600">Please wait while we confirm your payment.</p>
            <div className="mt-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        )}

        {status === "success" && (
          <div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-center">
              <CheckCircleIcon className="text-white mb-2" sx={{ fontSize: 80 }} />
              <h1 className="text-3xl font-bold text-white">Payment Successful!</h1>
            </div>
            <div className="p-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-800 mb-2">
                  <strong>Booking ID:</strong> {bookingId}
                </p>
                {paymentDetails && (
                  <>
                    <p className="text-sm text-green-800 mb-2">
                      <strong>Transaction ID:</strong> {paymentDetails.transactionId || paymentDetails.paymentDetails?.transactionId || txnId || bookingId}
                    </p>
                    <p className="text-sm text-green-800">
                      <strong>Amount Paid:</strong> Rs. {(paymentDetails.amount / 100).toFixed(2)}
                    </p>
                  </>
                )}
              </div>
              <p className="text-gray-700 mb-6 text-center">
                Your booking has been confirmed! Check your email for booking details and vehicle pickup information.
              </p>

              <div className="flex gap-3">
                <Link
                  href="/"
                  className="flex-1 bg-gray-100 text-gray-700 text-center py-3 rounded-lg font-bold hover:bg-gray-200 transition-all shadow-sm border border-gray-200"
                >
                  Back to Home
                </Link>
                <button
                  onClick={downloadReceipt}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 rounded-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <DownloadIcon fontSize="small" /> Receipt
                </button>
              </div>
            </div>
          </div>
        )}

        {status === "pending" && (
          <div>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-center">
              <HourglassEmptyIcon className="text-white mb-2" sx={{ fontSize: 80 }} />
              <h1 className="text-3xl font-bold text-white">Payment Pending</h1>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-center">
                Your payment is being processed. This may take a few minutes. Please check back later or contact support.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/"
                  className="flex-1 bg-gray-200 text-gray-800 text-center py-3 rounded-lg font-bold hover:bg-gray-300 transition-all"
                >
                  Go Home
                </Link>
                <button
                  onClick={() => window.location.reload()}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  Refresh Status
                </button>
              </div>
            </div>
          </div>
        )}

        {status === "failed" && (
          <div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-center">
              <ErrorIcon className="text-white mb-2" sx={{ fontSize: 80 }} />
              <h1 className="text-3xl font-bold text-white">Payment Failed</h1>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-center">
                Your payment could not be processed. Please try again or contact support if the issue persists.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/"
                  className="flex-1 bg-gray-200 text-gray-800 text-center py-3 rounded-lg font-bold hover:bg-gray-300 transition-all"
                >
                  Go Home
                </Link>
                <Link
                  href="/vehicles"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-3 rounded-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  Try Again
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
