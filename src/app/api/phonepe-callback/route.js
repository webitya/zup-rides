import { validatePhonePeCallback } from "@/lib/phonepe/payment"

export async function POST(request) {
  try {
    const bodyString = await request.text()
    const auth = request.headers.get("authorization")

    console.log("[PhonePe] Callback received")

    // Validate callback using SDK
    const validation = await validatePhonePeCallback({
      username: process.env.PHONEPE_CALLBACK_USER || "",
      password: process.env.PHONEPE_CALLBACK_PASS || "",
      authorization: auth,
      responseBodyString: bodyString,
    })

    if (!validation.success) {
      console.error("[PhonePe] Invalid callback signature")
      return Response.json({ success: false, message: "Invalid callback" }, { status: 400 })
    }

    const { payload } = validation.data
    const orderId = payload.originalMerchantOrderId
    const state = payload.state

    console.log("[PhonePe] Callback validated:", {
      orderId,
      state,
      amount: payload.amount,
    })

    // Process payment based on state
    if (state === "COMPLETED") {
      console.log("[PhonePe] Payment successful:", orderId)

      // TODO: Update database with payment success
      // TODO: Send confirmation email

      return Response.json({
        success: true,
        message: "Payment successful",
        data: payload,
      })
    } else if (state === "FAILED") {
      console.log("[PhonePe] Payment failed:", orderId)

      return Response.json({
        success: false,
        message: "Payment failed",
        data: payload,
      })
    } else {
      console.log("[PhonePe] Payment pending:", orderId)

      return Response.json({
        success: false,
        message: "Payment pending",
        data: payload,
      })
    }
  } catch (error) {
    console.error("[PhonePe] Callback error:", error)
    return Response.json({
      success: false,
      error: error.message || "Callback processing failed",
    }, { status: 500 })
  }
}
