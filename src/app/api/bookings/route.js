import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const bookingData = await request.json()

    // Generate booking ID
    const bookingId = "BK" + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase()

    // Store booking (in production, save to database)
    console.log("[v0] Booking created:", { bookingId, ...bookingData })

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    })

    // Email template for user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <div style="background-color: #FF5722; color: white; padding: 20px; text-align: center; border-radius: 5px;">
          <h1>Booking Confirmed!</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f5f5f5; margin: 20px 0; border-radius: 5px;">
          <h2>Booking Details</h2>
          <p><strong>Booking ID:</strong> ${bookingId}</p>
          <p><strong>Name:</strong> ${bookingData.name}</p>
          <p><strong>Vehicle:</strong> ${bookingData.vehicle}</p>
          <p><strong>Pickup Date:</strong> ${bookingData.pickupDate}</p>
          <p><strong>Duration:</strong> ${bookingData.durationDays} day(s) ${bookingData.durationHours} hour(s)</p>
          <p><strong>Pickup Address:</strong> ${bookingData.address}</p>
          <p><strong>Phone:</strong> ${bookingData.phone}</p>
        </div>

        <div style="padding: 20px; background-color: #e8f5e9; border-left: 4px solid #4caf50; margin: 20px 0;">
          <h3>Amount</h3>
          <p style="font-size: 24px; color: #FF5722; font-weight: bold;">₹${bookingData.amount}</p>
        </div>

        <div style="padding: 20px;">
          <p>Your booking is awaiting payment. Please complete the payment to confirm your reservation.</p>
          <p style="color: #666; font-size: 12px;">This is an automated email. Please do not reply to this email.</p>
        </div>
      </div>
    `

    // Email template for admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <div style="background-color: #FF5722; color: white; padding: 20px; text-align: center; border-radius: 5px;">
          <h1>New Booking Received</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f5f5f5; margin: 20px 0; border-radius: 5px;">
          <h2>Booking Details</h2>
          <p><strong>Booking ID:</strong> ${bookingId}</p>
          <p><strong>Name:</strong> ${bookingData.name}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
          <p><strong>Phone:</strong> ${bookingData.phone}</p>
          <p><strong>Vehicle:</strong> ${bookingData.vehicle}</p>
          <p><strong>Pickup Address:</strong> ${bookingData.address}</p>
          <p><strong>Pickup Date:</strong> ${bookingData.pickupDate}</p>
          <p><strong>Duration:</strong> ${bookingData.durationDays} day(s) ${bookingData.durationHours} hour(s)</p>
          <p><strong>Amount:</strong> ₹${bookingData.amount}</p>
          <p><strong>Status:</strong> Pending Payment</p>
        </div>

        <div style="padding: 20px;">
          <p>Please follow up on this booking once payment is confirmed.</p>
        </div>
      </div>
    `

    // Send user email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: bookingData.email,
      subject: `Booking Confirmed - ${bookingId} | ZupRides`,
      html: userEmailHtml,
    })

    // Send admin email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Booking - ${bookingId} | ZupRides`,
      html: adminEmailHtml,
    })

    return Response.json({
      success: true,
      bookingId,
      message: "Booking created successfully",
    })
  } catch (error) {
    console.error("[v0] Booking error:", error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
