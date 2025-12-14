import crypto from "crypto"

const PHONEPE_HOST_URL = "https://api.phonepe.com/apis/heroku"
const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID || "SU2512041550424925141295"
const CLIENT_ID = process.env.PHONEPE_CLIENT_ID || "SU2512041550424925141295"
const CLIENT_SECRET = process.env.PHONEPE_CLIENT_SECRET || "dbc4255f-e057-4886-ace8-790ecbd3de5f"
const CLIENT_VERSION = process.env.PHONEPE_CLIENT_VERSION || "1"

export async function POST(request) {
  try {
    const { amount, bookingId, phone, email, name } = await request.json()

    // Validate required fields
    if (!amount || !bookingId || !phone) {
      return Response.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Generate unique merchant transaction ID
    const merchantTransactionId = `TXN-${bookingId}-${Date.now()}`

    // Prepare payload for PhonePe PG API v3
    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: `USER-${phone}`,
      amount: amount, // amount in paise (e.g., 39900 for ₹399)
      redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/payment-callback?bookingId=${bookingId}&txnId=${merchantTransactionId}`,
      redirectMode: "REDIRECT",
      callbackUrl: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/phonepe-callback`,
      mobileNumber: phone,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    }

    // Encode payload to base64
    const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString("base64")

    // Generate X-VERIFY header using SHA256
    const string = payloadBase64 + "/pg/v1/pay" + CLIENT_SECRET
    const sha256 = crypto.createHash("sha256").update(string).digest("hex")
    const xVerify = sha256 + "###" + CLIENT_VERSION

    console.log("[PhonePe] Payment initiation:", {
      merchantTransactionId,
      amount: amount / 100,
      bookingId,
      phone,
    })

    // Make request to PhonePe PG API
    const response = await fetch(`${PHONEPE_HOST_URL}/pg/v1/pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": xVerify,
        "X-MERCHANT-ID": MERCHANT_ID,
      },
      body: JSON.stringify({
        request: payloadBase64,
      }),
    })

    const data = await response.json()

    console.log("[PhonePe] API Response:", {
      success: data.success,
      code: data.code,
      message: data.message,
    })

    if (data.success && data.data?.instrumentResponse?.redirectInfo?.url) {
      return Response.json({
        success: true,
        redirectUrl: data.data.instrumentResponse.redirectInfo.url,
        merchantTransactionId,
      })
    } else {
      console.error("[PhonePe] Payment initiation failed:", data)
      return Response.json({
        success: false,
        error: data.message || "Payment initiation failed",
        code: data.code,
      }, { status: 400 })
    }
  } catch (error) {
    console.error("[PhonePe] Error:", error)
    return Response.json({
      success: false,
      error: error.message || "Internal server error"
    }, { status: 500 })
  }
}
