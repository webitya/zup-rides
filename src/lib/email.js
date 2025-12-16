import nodemailer from "nodemailer"

// Create a transporter using Gmail SMTP
// Ensure you have these env variables set: EMAIL_USER, EMAIL_APP_PASSWORD
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
})

/**
 * Send an email
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} html - HTML content
 * @param {string} [text] - Fallback text content
 */
export async function sendEmail({ to, subject, html, text }) {
    try {
        const info = await transporter.sendMail({
            from: `"Zup Rides" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text: text || "Please enable HTML to view this email.",
            html,
        })
        console.log(`[Email] Sent to ${to}: ${info.messageId}`)
        return { success: true, messageId: info.messageId }
    } catch (error) {
        console.error(`[Email] Failed to send to ${to}:`, error)
        return { success: false, error: error.message }
    }
}
