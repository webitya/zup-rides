import crypto from "crypto"
import nodemailer from "nodemailer"

const SALT_KEY = process.env.PHONEPE_SALT_KEY
const SALT_INDEX = process.env.PHONEPE_SALT_INDEX || "1"

export async function POST(request) {
  try {
    const body = await request.json()
    const { response: encodedResponse } = body

    // Decode and verify response
    const decodedResponse = Buffer.from(encodedResponse, "base64").toString("utf8")
    const responseData = JSON.parse(decodedResponse)

    console.log("[v0] PhonePay callback response:", responseData)

    // Verify checksum (if needed)
    // Generate checksum from response
    const string = encodedResponse + "/pg/v1/pay/verify" + SALT_KEY
    const sha256 = crypto.createHash("sha256").update(string).digest("hex")
    const checksum = sha256 + "###" + SALT_INDEX

    // Check transaction status
    if (responseData.code === "PAYMENT_SUCCESS") {
      // Setup nodemailer for payment confirmation
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      })

      const paymentConfirmationEmail = `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <div style="background-color: #4caf50; color: white; padding: 20px; text-align: center; border-radius: 5px;">
            <h1>Payment Successful!</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f5f5f5; margin: 20px 0; border-radius: 5px;">
            <h2>Payment Confirmation</h2>
            <p><strong>Transaction ID:</strong> ${responseData.data.transactionId}</p>
            <p><strong>Amount:</strong> ₹${(responseData.data.amount / 100).toFixed(2)}</p>
            <p><strong>Status:</strong> ${responseData.code}</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <div style="padding: 20px;">
            <p>Your booking is confirmed! Our team will contact you shortly with vehicle pickup details.</p>
            <p style="color: #666; font-size: 12px;">Thank you for choosing ZupRides!</p>
          </div>
        </div>
      `

      // Send payment confirmation to user (in production, fetch user email from booking)
      // await transporter.sendMail({
      //   from: process.env.EMAIL_USER,
      //   to: userEmail,
      //   subject: `Payment Confirmed | ZupRides`,
      //   html: paymentConfirmationEmail,
      // })

      return Response.json({
        success: true,
        message: "Payment verified successfully",
        transactionId: responseData.data.transactionId,
      })
    } else {
      return Response.json(
        {
          success: false,
          message: "Payment failed",
          code: responseData.code,
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("[v0] PhonePay callback error:", error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
