import { formatReceiptDate } from "./date-utils"

/**
 * Format currency
 */
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(amount / 100)
}

/**
 * Generate a Premium HTML Receipt for the Customer
 */
export function generateReceiptHtml(details) {
    const {
        bookingId,
        transactionId,
        date,
        amount,
        name,
        vehicleName,
        vehicleNumber,
        startDate,
        endDate,
    } = details

    return `
<!DOCTYPE html>
<html>
<head>
<style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-top: 20px; margin-bottom: 20px; }
    .header { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 40px 20px; text-align: center; color: white; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; }
    .header p { margin: 10px 0 0; opacity: 0.9; font-size: 16px; }
    .status-badge { display: inline-block; background-color: rgba(255,255,255,0.2); padding: 6px 16px; border-radius: 20px; margin-top: 15px; font-size: 14px; font-weight: 600; }
    
    .content { padding: 40px 30px; }
    .details-grid { display: grid; grid-template-columns: 1fr; gap: 15px; margin-bottom: 30px; }
    .detail-row { display: flex; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px solid #f0f0f0; }
    .detail-label { color: #64748b; font-size: 14px; font-weight: 500; }
    .detail-value { color: #1e293b; font-size: 14px; font-weight: 600; text-align: right; }
    
    .vehicle-card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 30px; display: flex; align-items: center; gap: 15px; }
    .vehicle-icon { background-color: #f1f5f9; color: #1e293b; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
    .vehicle-info h3 { margin: 0; font-size: 16px; color: #0f172a; }
    .vehicle-info p { margin: 4px 0 0; font-size: 13px; color: #64748b; }
    
    .total-section { background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 20px; text-align: center; margin-bottom: 30px; }
    .total-label { color: #475569; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
    .total-amount { color: #0f172a; font-size: 32px; font-weight: 800; margin: 5px 0 0; }
    
    .footer { background-color: #1e293b; padding: 30px; text-align: center; color: #94a3b8; font-size: 12px; }
    .footer p { margin: 5px 0; }
    .footer strong { color: white; }
    .social-links { margin-top: 15px; }
    .social-links a { color: #cbd5e1; text-decoration: none; margin: 0 10px; }
    
    /* Mobile tweaks */
    @media only screen and (max-width: 480px) {
        .container { border-radius: 0; margin: 0; }
        .content { padding: 30px 20px; }
        .header { padding: 30px 20px; }
    }
</style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Zup Rides</h1>
            <p>Your Payment was Successful!</p>
            <div class="status-badge">✓ Verified & Confirmed</div>
        </div>
        
        <div class="content">
            <p style="color: #334155; font-size: 16px; line-height: 1.5; margin-bottom: 30px; text-align: center;">
                Hi <strong>${name}</strong>,<br>
                Thank you for choosing Zup Rides. Your vehicle is reserved and ready for you!
            </p>

            <div class="vehicle-card">
                <div class="vehicle-icon">🛵</div>
                <div class="vehicle-info">
                    <h3>${vehicleName}</h3>
                    <p>No: ${vehicleNumber || 'To be assigned'}</p>
                </div>
            </div>

            <div class="details-grid">
                <div class="detail-row">
                    <span class="detail-label">Booking ID</span>
                    <span class="detail-value">${bookingId}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Transaction ID</span>
                    <span class="detail-value" style="font-family: monospace;">${transactionId}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Date</span>
                    <span class="detail-value">${formatReceiptDate(date)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Pickup</span>
                    <span class="detail-value">${formatReceiptDate(startDate)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Dropoff</span>
                    <span class="detail-value">${formatReceiptDate(endDate)}</span>
                </div>
            </div>

            <div class="total-section">
                <div class="total-label">Total Amount Paid</div>
                <div class="total-amount">${formatCurrency(amount)}</div>
            </div>
            
            <div style="text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/contact" style="background-color: #0f172a; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">Need Help? Contact Us</a>
            </div>
        </div>

        <div class="footer">
            <p><strong>Zup Rides - Two Wheeler Rental Agency</strong></p>
            <p>Reliable Bikes. Affordable Rates. Unlimited Freedom.</p>
            <p style="margin-top: 20px; border-top: 1px solid #334155; padding-top: 15px;">
                © ${new Date().getFullYear()} Zup Rides. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>
    `
}

/**
 * Generate Admin Lead Alert Email
 */
export function generateAdminAlertHtml(details) {
    const {
        bookingId,
        amount,
        name,
        email,
        phone,
        vehicleName,
        startDate,
        endDate,
    } = details

    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; background-color: #fef2f2; padding: 20px; }
        .card { background: white; max-width: 500px; margin: 0 auto; padding: 20px; border-left: 5px solid #ef4444; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        h2 { color: #dc2626; margin-top: 0; }
        .row { display: flex; margin-bottom: 10px; border-bottom: 1px dashed #eee; padding-bottom: 5px; }
        .label { width: 140px; font-weight: bold; color: #555; }
        .val { flex: 1; color: #000; }
    </style>
</head>
<body>
    <div class="card">
        <h2>🔥 New Booking Alert!</h2>
        <div class="row"><div class="label">Amount:</div><div class="val"><strong>${formatCurrency(amount)}</strong></div></div>
        <div class="row"><div class="label">Vehicle:</div><div class="val">${vehicleName}</div></div>
        <div class="row"><div class="label">Customer:</div><div class="val">${name}</div></div>
        <div class="row"><div class="label">Phone:</div><div class="val"><a href="tel:${phone}">${phone}</a></div></div>
        <div class="row"><div class="label">Email:</div><div class="val">${email}</div></div>
        <div class="row"><div class="label">Start:</div><div class="val">${formatReceiptDate(startDate)}</div></div>
        <div class="row"><div class="label">End:</div><div class="val">${formatReceiptDate(endDate)}</div></div>
        <div class="row"><div class="label">Booking ID:</div><div class="val">${bookingId}</div></div>
    </div>
</body>
</html>
    `
}
