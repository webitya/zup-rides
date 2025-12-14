import { checkPhonePeStatus } from "@/lib/phonepe/payment"

export async function POST(request) {
  try {
    const { merchantOrderId } = await request.json()

    if (!merchantOrderId) {
      return Response.json({ success: false, error: "Missing order ID" }, { status: 400 })
    }

    console.log("[PhonePe] Checking status for:", merchantOrderId)

    // Check payment status using SDK
    const statusResponse = await checkPhonePeStatus(merchantOrderId)

    if (!statusResponse.success) {
      return Response.json({
        success: false,
        error: statusResponse.message || "Status check failed",
      }, { status: 400 })
    }

    console.log("[PhonePe] Status:", {
      orderId: merchantOrderId,
      state: statusResponse.state,
      amount: statusResponse.amount,
    })

    return Response.json(statusResponse)
  } catch (error) {
    console.error("[PhonePe] Status check error:", error)
    return Response.json({
      success: false,
      error: error.message || "Status check failed",
    }, { status: 500 })
  }
}
