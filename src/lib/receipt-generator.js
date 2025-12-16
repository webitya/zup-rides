import { formatReceiptDate, formatReceiptDateTime, formatTransactionDate } from "./date-utils"

/**
 * Format currency
 */
const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
    }).format(amount)
}

export const generateReceiptHtml = ({
    bookingId,
    transactionId,
    amount,
    date = new Date(),
    name,
    email,
    phone,
    vehicleName,
    vehicleNumber,
    startDate,
    endDate,
}) => {
    const totalAmount = amount / 100

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Receipt</title>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; }
        .container { background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden; }
        .header { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 40px 30px; text-align: center; color: white; }
        .logo { width: 60px; height: 60px; background-color: rgba(255,255,255,0.1); border-radius: 12px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; }
        .status-badge { display: inline-block; padding: 6px 12px; background-color: rgba(255,255,255,0.2); border-radius: 20px; font-size: 14px; font-weight: 500; margin-top: 10px; }
        .amount-box { text-align: center; padding: 30px; border-bottom: 1px solid #e2e8f0; }
        .amount-label { color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
        .amount-value { font-size: 36px; font-weight: 800; color: #0f172a; }
        .details-grid { padding: 30px; display: grid; gap: 20px; }
        .detail-row { display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; }
        .detail-row:last-child { border-bottom: none; }
        .detail-label { color: #64748b; font-size: 14px; font-weight: 500; }
        .detail-value { font-weight: 600; color: #334155; text-align: right; }
        .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        .vehicle-card { background-color: #f1f5f9; padding: 15px; border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px; }
        .vehicle-icon { width: 40px; height: 40px; background-color: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">ZR</div>
            <h1 style="margin:0; font-size: 24px;">Payment Successful</h1>
            <div class="status-badge">✓ Confirmed</div>
        </div>
        
        <div class="amount-box">
            <div class="amount-label">Total Paid</div>
            <div class="amount-value">${formatCurrency(totalAmount)}</div>
        </div>

        <div class="details-grid">
            <div class="vehicle-card">
                <div class="vehicle-icon">🛵</div>
                <div>
                    <div style="font-weight: 700; color: #0f172a;">${vehicleName}</div>
                    <div style="font-size: 12px; color: #64748b;">${vehicleNumber || "Vehicle Number will be assigned"}</div>
                </div>
            </div>

            <div class="detail-row">
                <span class="detail-label">Transaction ID</span>
                <span class="detail-value" style="font-family: monospace;">${transactionId}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Booking ID</span>
                <span class="detail-value">${bookingId}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Date</span>
                <span class="detail-value">${formatTransactionDate(date)}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Pickup</span>
                <span class="detail-value">${formatReceiptDateTime(startDate)}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Dropoff</span>
                <span class="detail-value">${formatReceiptDateTime(endDate)}</span>
            </div>
        </div>

        <div class="total-section">
            <div class="total-label">Total Amount Paid</div>
            <div class="total-amount">${formatCurrency(totalAmount)}</div>
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
        <div class="row"><div class="label">Start:</div><div class="val">${formatReceiptDateTime(startDate)}</div></div>
        <div class="row"><div class="label">End:</div><div class="val">${formatReceiptDateTime(endDate)}</div></div>
        <div class="row"><div class="label">Booking ID:</div><div class="val">${bookingId}</div></div>
    </div>
</body>
</html>
`
}
