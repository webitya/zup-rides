import { NextResponse } from "next/server"
// In a real implementation, this would use Nodemailer to send emails

export async function POST(request) {
  try {
    const { name, email, message, course } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // In a real implementation, this would send an email using Nodemailer
    console.log("Contact form submission:", { name, email, message, course })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
