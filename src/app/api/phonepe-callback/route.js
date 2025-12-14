import crypto from "crypto"

const PHONEPE_HOST_URL = "https://api.phonepe.com/apis/heroku"
const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID || "SU2512041550424925141295"
const CLIENT_SECRET = process.env.PHONEPE_CLIENT_SECRET || "dbc4255f-e057-4886-ace8-790ecbd3de5f"
const CLIENT_VERSION = process.env.PHONEPE_CLIENT_VERSION || "1"

export async function POST(request) {
  try {
    const body = await request.json()
    console.log("[PhonePe Callback] Received:", body)

    // PhonePe sends the response in base64 encoded format
    const { response: encodedResponse, merchantTransactionId } = body

    if (!encodedResponse) {
      return Response.json({
        success: false,
        error: "No response data received"
      }, { status: 400 })
    }

    // Decode the response
    const decodedResponse = Buffer.from(encodedResponse, "base64").toString("utf8")
    const responseData = JSON.parse(decodedResponse)

    console.log("[PhonePe Callback] Decoded response:", responseData)

    // Verify the checksum
    const string = encodedResponse + "/pg/v1/status" + CLIENT_SECRET
    const sha256 = crypto.createHash("sha256").update(string).digest("hex")
    const expectedChecksum = sha256 + "###" + CLIENT_VERSION

    // Verify payment status by calling status check API
    const txnId = responseData.data?.merchantTransactionId || merchantTransactionId

    if (txnId) {
      const statusResponse = await checkPaymentStatus(txnId)

      if (statusResponse.success && statusResponse.code === "PAYMENT_SUCCESS") {
        console.log("[PhonePe Callback] Payment verified successfully:", {
          transactionId: statusResponse.data.transactionId,
          amount: statusResponse.data.amount,
        })

        // Here you can:
        // 1. Update booking status in database
        // 2. Send confirmation email
        // 3. Trigger any post-payment workflows

        return Response.json({
          success: true,
          message: "Payment verified successfully",
          transactionId: statusResponse.data.transactionId,
          amount: statusResponse.data.amount,
        })
      }
    }

    // Payment failed or pending
    return Response.json({
      success: false,
      message: responseData.message || "Payment verification failed",
      code: responseData.code,
    }, { status: 400 })

  } catch (error) {
    console.error("[PhonePe Callback] Error:", error)
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}

// Helper function to check payment status
async function checkPaymentStatus(merchantTransactionId) {
  try {
    const string = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + CLIENT_SECRET
    const sha256 = crypto.createHash("sha256").update(string).digest("hex")
    const xVerify = sha256 + "###" + CLIENT_VERSION

    const response = await fetch(
      `${PHONEPE_HOST_URL}/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerify,
          "X-MERCHANT-ID": MERCHANT_ID,
        },
      }
    )

    const data = await response.json()
    console.log("[PhonePe Status Check]:", data)

    return data
  } catch (error) {
    console.error("[PhonePe Status Check] Error:", error)
    return { success: false, error: error.message }
  }
}
