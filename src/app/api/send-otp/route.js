import { NextResponse } from "next/server"
// In a real implementation, this would use Nodemailer to send an email with OTP

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()

    // In a real implementation, this would:
    // 1. Store the OTP in a database with the email and expiration time
    // 2. Send the OTP via email using Nodemailer

    console.log(`OTP for ${email}: ${otp}`)

    return NextResponse.json({ message: "OTP sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending OTP:", error)
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 })
  }
}
