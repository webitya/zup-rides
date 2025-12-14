"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ErrorIcon from "@mui/icons-material/Error"
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty"

import { jsPDF } from "jspdf"
import DownloadIcon from "@mui/icons-material/Download"

export default function PaymentCallback() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get("bookingId")
  const txnId = searchParams.get("txnId")
  const [status, setStatus] = useState("loading")
  const [paymentDetails, setPaymentDetails] = useState(null)

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        if (!txnId) {
          setStatus("failed")
          return
        }

        // Call backend to verify payment status
        const response = await fetch(`/api/phonepe-status?txnId=${txnId}`)
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
  }, [txnId])

  const downloadReceipt = () => {
    if (!paymentDetails) return

    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20

    // Header
    doc.setFontSize(22)
    doc.setTextColor(40, 40, 40)
    doc.text("Zup Rides", margin, 20)

    doc.setFontSize(14)
    doc.setTextColor(100, 100, 100)
    doc.text("Payment Receipt", margin, 30)

    // Divider
    doc.setLineWidth(0.5)
    doc.setDrawColor(200, 200, 200)
    doc.line(margin, 35, pageWidth - margin, 35)

    // Content
    let yPos = 50
    const lineHeight = 10

    const addRow = (label, value) => {
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(0, 0, 0)
      doc.text(label, margin, yPos)

      doc.setFont("helvetica", "normal")
      doc.setTextColor(60, 60, 60)
      const textWidth = doc.getTextWidth(value)
      doc.text(value, pageWidth - margin - textWidth, yPos)

      yPos += lineHeight
    }

    // Details from paymentDetails
    const amount = (paymentDetails.amount / 100).toFixed(2)
    const date = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()

    addRow("Date:", date)
    addRow("Booking ID:", bookingId || "N/A")
    addRow("Transaction ID:", paymentDetails.transactionId || txnId || "N/A")
    addRow("Payment Status:", "Successful")

    // Detailed Line
    yPos += 5
    doc.line(margin, yPos, pageWidth - margin, yPos)
    yPos += 15

    // Total Amount
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(0, 50, 0)
    doc.text("Total Amount Paid", margin, yPos)

    const amountText = `Rs. ${amount}`
    const amountWidth = doc.getTextWidth(amountText)
    doc.text(amountText, pageWidth - margin - amountWidth, yPos)

    // Footer
    yPos += 40
    doc.setFontSize(10)
    doc.setTextColor(150, 150, 150)
    doc.text("Thank you for choosing Zup Rides!", pageWidth / 2, yPos, { align: "center" })

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
                      <strong>Transaction ID:</strong> {paymentDetails.transactionId || txnId}
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
