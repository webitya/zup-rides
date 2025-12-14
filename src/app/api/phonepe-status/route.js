import crypto from "crypto"

const PHONEPE_HOST_URL = "https://api.phonepe.com/apis/heroku"
const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID || "SU2512041550424925141295"
const CLIENT_SECRET = process.env.PHONEPE_CLIENT_SECRET || "dbc4255f-e057-4886-ace8-790ecbd3de5f"
const CLIENT_VERSION = process.env.PHONEPE_CLIENT_VERSION || "1"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const txnId = searchParams.get("txnId")

    if (!txnId) {
      return Response.json({
        success: false,
        error: "Transaction ID is required"
      }, { status: 400 })
    }

    // Generate X-VERIFY header for status check
    const string = `/pg/v1/status/${MERCHANT_ID}/${txnId}` + CLIENT_SECRET
    const sha256 = crypto.createHash("sha256").update(string).digest("hex")
    const xVerify = sha256 + "###" + CLIENT_VERSION

    console.log("[PhonePe Status] Checking status for:", txnId)

    // Call PhonePe status API
    const response = await fetch(
      `${PHONEPE_HOST_URL}/pg/v1/status/${MERCHANT_ID}/${txnId}`,
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

    console.log("[PhonePe Status] Response:", {
      success: data.success,
      code: data.code,
      message: data.message,
    })

    return Response.json(data)

  } catch (error) {
    console.error("[PhonePe Status] Error:", error)
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}
