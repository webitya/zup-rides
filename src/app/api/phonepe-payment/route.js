import crypto from "crypto"

const PHONEPE_HOST_URL = "https://api.phonepe.com/apis/heroku"
const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID
const SALT_KEY = process.env.PHONEPE_SALT_KEY
const SALT_INDEX = process.env.PHONEPE_SALT_INDEX || "1"
const CLIENT_ID = process.env.PHONEPE_CLIENT_ID
const CLIENT_SECRET = process.env.PHONEPE_CLIENT_SECRET
const CLIENT_VERSION = process.env.PHONEPE_CLIENT_VERSION

export async function POST(request) {
  try {
    const { amount, bookingId, phone, email, name } = await request.json()

    // Validate required fields
    if (!amount || !bookingId || !phone) {
      return Response.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Generate unique merchant transaction ID
    const merchantTransactionId = `${bookingId}-${Date.now()}`

    // Prepare payload
    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: phone,
      amount: amount, // amount in paise
      redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/payment-callback?bookingId=${bookingId}`,
      redirectMode: "REDIRECT",
      callbackUrl: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/phonepe-callback`,
      mobileNumber: phone,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    }

    // Encode payload to base64
    const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString("base64")

    // Generate checksum
    const string = payloadBase64 + "/pg/v1/pay" + SALT_KEY
    const sha256 = crypto.createHash("sha256").update(string).digest("hex")
    const checksum = sha256 + "###" + SALT_INDEX

    console.log("[v0] PhonePay payload prepared:", {
      merchantTransactionId,
      amount,
      bookingId,
    })

    // Make request to PhonePay
    const response = await fetch(`${PHONEPE_HOST_URL}/pg/v1/pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-CLIENT-ID": CLIENT_ID,
        "X-CLIENT-SECRET": CLIENT_SECRET,
        "X-CLIENT-VERSION": CLIENT_VERSION,
      },
      body: JSON.stringify({
        request: payloadBase64,
      }),
    })

    const data = await response.json()

    console.log("[v0] PhonePay response:", data)

    if (data.success) {
      return Response.json({
        success: true,
        redirectUrl: data.data.instrumentResponse.redirectUrl,
      })
    } else {
      return Response.json({
        success: false,
        error: data.message || "Payment initiation failed",
      })
    }
  } catch (error) {
    console.error("[v0] PhonePay error:", error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
