import { randomUUID } from "crypto"
import { createPhonePeOrder } from "@/lib/phonepe/payment"

// Prevent running this API during build
const isBuildTime = process.env.NEXT_PHASE === "phase-production-build"

export async function POST(request) {
  try {
    // Skip during build
    if (isBuildTime) {
      return Response.json({
        buildWarning: true,
        message: "Skipped PhonePe API call during build phase.",
      })
    }

    const { amount, bookingId, phone, email, name, vehicleName, message } = await request.json()

    // Validate required fields
    if (!amount || !bookingId || !phone) {
      return Response.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Prepare order details
    const merchantOrderId = `BOOK_${bookingId}_${randomUUID()}`
    const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    const redirectUrl = `${BASE_URL}/payment-callback?merchantOrderId=${merchantOrderId}&bookingId=${bookingId}`

    console.log("[PAYMENT_INIT] Creating PhonePe order:", {
      merchantOrderId,
      amount: amount / 100,
      bookingId,
      phone,
    })

    // Create PhonePe payment order using SDK
    const paymentResponse = await createPhonePeOrder({
      orderId: merchantOrderId,
      amount: amount, // amount in paise
      redirectUrl,
      meta: {
        name,
        email,
        phone,
        vehicleName,
        message,
        merchantOrderId,
      },
    })

    if (!paymentResponse.success) {
      console.error("[PhonePe] Payment creation failed:", paymentResponse)
      return Response.json({
        success: false,
        error: paymentResponse.message || "Payment initiation failed",
      }, { status: 400 })
    }

    console.log("[PhonePe] Payment created successfully:", {
      redirectUrl: paymentResponse.redirectUrl,
      phonepeOrderId: paymentResponse.phonepeOrderId,
    })

    return Response.json({
      success: true,
      redirectUrl: paymentResponse.redirectUrl,
      merchantOrderId,
      phonepeOrderId: paymentResponse.phonepeOrderId,
    })
  } catch (error) {
    console.error("[PhonePe] Error:", error)
    return Response.json({
      success: false,
      error: error.message || "Internal server error",
    }, { status: 500 })
  }
}
