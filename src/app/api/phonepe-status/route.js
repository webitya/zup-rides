import { checkPhonePeStatus } from "@/lib/phonepe/payment"
import { sendEmail } from "@/lib/email"
import { generateReceiptHtml, generateAdminAlertHtml } from "@/lib/receipt-generator"

export async function POST(request) {
  try {
    const { merchantOrderId } = await request.json()

    if (!merchantOrderId) {
      return Response.json({ success: false, error: "Missing order ID" }, { status: 400 })
    }

    // console.log("[PhonePe] Checking status for:", merchantOrderId)

    // Check payment status using SDK
    const statusResponse = await checkPhonePeStatus(merchantOrderId)

    if (!statusResponse.success) {
      return Response.json({
        success: false,
        error: statusResponse.message || "Status check failed",
      }, { status: 400 })
    }

    // console.log("[PhonePe] Status:", {
    //   orderId: merchantOrderId,
    //   state: statusResponse.state,
    //   code: statusResponse.code
    // })

    // Check for success
    if (statusResponse.code === "PAYMENT_SUCCESS" || statusResponse.state === "COMPLETED") {
      // Parse Metadata (UDFs) to extract details
      // UDF4: `VN:${vehicleName}|NO:${vehicleNumber}`
      // UDF5: `SD:${startDate}|ED:${endDate}|MSG:${message}`
      const metaInfo = statusResponse.paymentDetails?.instrumentResponse?.redirectInfo?.metaInfo || statusResponse.metaInfo || {}

      const udf1 = metaInfo.udf1 // Name
      const udf2 = metaInfo.udf2 // Email
      const udf3 = metaInfo.udf3 // Phone
      const udf4 = metaInfo.udf4 || ""
      const udf5 = metaInfo.udf5 || ""

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

      const details = {
        bookingId: merchantOrderId.split("_")[1] || merchantOrderId, // Extract simplified booking ID if possible
        transactionId: statusResponse.paymentDetails?.transactionId || statusResponse.transactionId || "N/A",
        date: new Date().toLocaleString(),
        amount: statusResponse.amount,
        name: udf1 || "Customer",
        email: udf2,
        phone: udf3,
        vehicleName: vData.VN !== "NA" ? vData.VN : "Two Wheeler",
        vehicleNumber: vData.NO !== "NA" ? vData.NO : null,
        startDate: mData.SD !== "NA" ? new Date(mData.SD).toLocaleString() : "N/A",
        endDate: mData.ED !== "NA" ? new Date(mData.ED).toLocaleString() : "N/A",
      }

      // --- Send Emails (Fire & Forget to not block response) ---
      // We wrap in a promise but don't await blocking the UI response unless critical. 
      // Ideally next.js API routes are serveless so we should await, but fast.

      try {
        // 1. Send Customer Receipt
        if (details.email) {
          await sendEmail({
            to: details.email,
            subject: `Booking Confirmed! - Zup Rides #${details.bookingId}`,
            html: generateReceiptHtml(details),
            text: `Thank you for your booking! Booking ID: ${details.bookingId}. Amount: ${details.amount / 100}`
          })
        }

        // 2. Send Admin Alert
        const adminEmail = process.env.ADMIN_EMAIL
        if (adminEmail) {
          await sendEmail({
            to: adminEmail,
            subject: `🚨 New Lead: Rs. ${details.amount / 100} - ${details.name}`,
            html: generateAdminAlertHtml(details),
            text: `New Booking! User: ${details.name}, Phone: ${details.phone}, Amount: ${details.amount / 100}`
          })
        }

        console.log("[Email] Notifications processed.")
      } catch (emailErr) {
        console.error("[Email] Failed to process notifications:", emailErr)
        // We don't fail the request here, just log the error
      }
    }

    return Response.json(statusResponse)
  } catch (error) {
    console.error("[PhonePe] Status check error:", error)
    return Response.json({
      success: false,
      error: error.message || "Status check failed",
    }, { status: 500 })
  }
}
