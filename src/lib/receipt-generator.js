import { formatReceiptDate, formatReceiptDateTime, formatTransactionDate, formatReceiptLongDate } from "./date-utils"

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

/**
 * Styles for the email
 */
const styles = {
    body: 'margin: 0; padding: 0; background-color: #f8fafc; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;',
    container: 'max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;',
    header: 'background: linear-gradient(135deg, #1c1917 0%, #2A1B12 100%); padding: 40px 20px; text-align: center; border-bottom: 4px solid #D4AF37;',
    logoText: 'color: #D4AF37; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; margin: 0; text-transform: uppercase;',
    logoSub: 'color: #a8a29e; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-top: 5px;',
    hero: 'padding: 40px 30px 20px; text-align: center; background-color: #ffffff;',
    title: 'color: #1c1917; font-size: 24px; font-weight: 700; margin: 0 0 10px;',
    subtitle: 'color: #57534e; font-size: 16px; line-height: 1.5; margin: 0;',
    card: 'background: #fafaf9; border-radius: 12px; padding: 25px; margin: 20px 30px; border: 1px solid #e7e5e4;',
    sectionTitle: 'color: #78350f; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 1px solid #e7e5e4; padding-bottom: 10px;',
    row: 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px dashed #e7e5e4; padding-bottom: 12px;',
    label: 'color: #78716c; font-size: 14px; font-weight: 500;',
    value: 'color: #1c1917; font-size: 15px; font-weight: 600; text-align: right;',
    highlight: 'color: #D4AF37; font-weight: 700;',
    vehicleCard: 'display: flex; align-items: center; background: #2A1B12; padding: 20px; border-radius: 10px; margin-bottom: 25px; color: white;',
    vehicleIcon: 'font-size: 30px; margin-right: 15px; background: rgba(255,255,255,0.1); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid #D4AF37;',
    vehicleInfo: 'flex: 1;',
    vehicleName: 'font-size: 18px; font-weight: 700; color: #D4AF37; margin: 0;',
    vehicleSub: 'font-size: 13px; color: #d6d3d1; margin-top: 4px;',
    totalRow: 'display: flex; justify-content: space-between; align-items: center; margin-top: 20px; padding-top: 20px; border-top: 2px solid #e7e5e4;',
    totalLabel: 'font-size: 16px; font-weight: 700; color: #1c1917;',
    totalValue: 'font-size: 24px; font-weight: 800; color: #D4AF37;',
    button: 'display: inline-block; background-color: #2A1B12; color: #D4AF37; padding: 14px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; margin: 30px 0 10px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #D4AF37;',
    footer: 'background-color: #2A1B12; padding: 30px 20px; text-align: center; color: #a8a29e; font-size: 12px;',
    footerLink: 'color: #D4AF37; text-decoration: none; margin: 0 10px;',
}

/**
 * Generate Customer Receipt HTML
 */
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
    <title>Booking Confirmed</title>
</head>
<body style="${styles.body}">
    <div style="padding: 40px 0;">
        <div style="${styles.container}">
            <!-- Header -->
            <div style="${styles.header}">
                <h1 style="${styles.logoText}">Zup Rides</h1>
                <div style="${styles.logoSub}">Premium Bike Rentals</div>
            </div>

            <!-- Hero Status -->
            <div style="${styles.hero}">
                <div style="width: 60px; height: 60px; background: #ecfccb; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: #4d7c0f; font-size: 30px;">✓</div>
                <h2 style="${styles.title}">Booking Confirmed!</h2>
                <p style="${styles.subtitle}">Hi ${name}, your ride is ready. Get ready for an amazing journey.</p>
            </div>

            <!-- Vehicle Showcase -->
            <div style="padding: 0 30px;">
                <div style="${styles.vehicleCard}">
                    <div style="${styles.vehicleIcon}">🛵</div>
                    <div style="${styles.vehicleInfo}">
                        <h3 style="${styles.vehicleName}">${vehicleName}</h3>
                        <div style="${styles.vehicleSub}">Booking ID: ${bookingId}</div>
                    </div>
                </div>
            </div>

            <!-- Details Card -->
            <div style="${styles.card}">
                <div style="${styles.sectionTitle}">Trip Schedules</div>
                
                <div style="${styles.row}">
                    <span style="${styles.label}">Pickup</span>
                    <span style="${styles.value}">
                        ${formatReceiptDateTime(startDate)}
                    </span>
                </div>
                
                <div style="${styles.row}">
                    <span style="${styles.label}">Dropoff</span>
                    <span style="${styles.value}">
                        ${formatReceiptDateTime(endDate)}
                    </span>
                </div>

                <div style="margin-top: 20px;"></div>
                <div style="${styles.sectionTitle}">Customer Details</div>
                
                <div style="${styles.row}">
                    <span style="${styles.label}">Name</span>
                    <span style="${styles.value}">${name}</span>
                </div>
                <div style="${styles.row}">
                    <span style="${styles.label}">Email</span>
                    <span style="${styles.value}">${email}</span>
                </div>
                <div style="${styles.row}">
                    <span style="${styles.label}">Phone</span>
                    <span style="${styles.value}">${phone}</span>
                </div>

                <div style="margin-top: 20px;"></div>
                <div style="${styles.sectionTitle}">Payment Details</div>

                <div style="${styles.row}">
                    <span style="${styles.label}">Transaction ID</span>
                    <span style="${styles.value}; font-family: monospace; letter-spacing: 1px;">${transactionId}</span>
                </div>
                
                <div style="${styles.row}">
                    <span style="${styles.label}">Payment Date</span>
                    <span style="${styles.value}">${formatReceiptLongDate(date)}</span>
                </div>

                <div style="${styles.totalRow}">
                    <span style="${styles.totalLabel}">Total Paid</span>
                    <span style="${styles.totalValue}">${formatCurrency(totalAmount)}</span>
                </div>
            </div>

            <!-- CTA -->
            <div style="text-align: center; padding-bottom: 40px;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/contact" style="${styles.button}">
                    Support & FAQs
                </a>
            </div>

            <!-- Footer -->
            <div style="${styles.footer}">
                <p style="margin-bottom: 15px;">
                    <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="${styles.footerLink}">Website</a> • 
                    <a href="tel:+919876543210" style="${styles.footerLink}">Call Us</a> • 
                    <a href="mailto:support@zuprides.com" style="${styles.footerLink}">Email Support</a>
                </p>
                <p>
                    Zup Rides - Experience the Freedom.<br>
                    Made with ❤️ in India.
                </p>
                <p style="opacity: 0.5; margin-top: 10px;">© ${new Date().getFullYear()} Zup Rides. All rights reserved.</p>
            </div>
        </div>
    </div>
</body>
</html>
`
}

/**
 * Generate Admin Lead Alert Email HTML
 */
export const generateAdminAlertHtml = (details) => {
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

    // Slight variation for Admin: Red accent for urgency/alert
    const adminStyles = {
        ...styles,
        container: 'max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border-left: 6px solid #D4AF37; box-shadow: 0 4px 10px rgba(0,0,0,0.1);',
        header: 'background-color: #fcfbf8; padding: 20px; border-bottom: 1px solid #e7e5e4; display: flex; justify-content: space-between; align-items: center;',
        badge: 'background-color: #D4AF37; color: #2A1B12; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 12px; text-transform: uppercase;',
        valueLarge: 'font-size: 18px; font-weight: 700; color: #2A1B12;',
        actionBtn: 'display: inline-block; background: #2A1B12; color: #D4AF37; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600; margin-right: 10px;'
    }

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Booking Alert</title>
</head>
<body style="${adminStyles.body}">
    <div style="padding: 40px 0;">
        <div style="${adminStyles.container}">
            
            <div style="${adminStyles.header}">
                <span style="font-weight: 800; color: #2A1B12; font-size: 18px;">🔥 New Booking</span>
                <span style="${adminStyles.badge}">Paid</span>
            </div>

            <div style="padding: 30px;">
                
                <!-- Key Stats -->
                <div style="display: flex; gap: 20px; margin-bottom: 30px;">
                    <div style="flex: 1; background: #fafaf9; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #e7e5e4;">
                        <div style="font-size: 12px; color: #78716c; text-transform: uppercase;">Revenue</div>
                        <div style="${adminStyles.valueLarge}">${formatCurrency(amount / 100)}</div>
                    </div>
                    <div style="flex: 1; background: #fafaf9; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #e7e5e4;">
                        <div style="font-size: 12px; color: #78716c; text-transform: uppercase;">Vehicle</div>
                        <div style="font-weight: 600; color: #2A1B12;">${vehicleName}</div>
                    </div>
                </div>

                <!-- Customer Details -->
                <div style="${styles.sectionTitle}">Customer Information</div>
                <div style="${styles.row}">
                    <span style="${styles.label}">Name</span>
                    <span style="${styles.value}">${name}</span>
                </div>
                <div style="${styles.row}">
                    <span style="${styles.label}">Phone</span>
                    <a href="tel:${phone}" style="${styles.value} text-decoration: none; color: #2563eb;">${phone}</a>
                </div>
                <div style="${styles.row}">
                    <span style="${styles.label}">Email</span>
                    <a href="mailto:${email}" style="${styles.value} text-decoration: none; color: #2563eb;">${email}</a>
                </div>

                <!-- Trip Details -->
                <div style="margin-top: 20px;"></div>
                <div style="${styles.sectionTitle}">Trip Details</div>
                <div style="${styles.row}">
                    <span style="${styles.label}">Pickup</span>
                    <span style="${styles.value}">${formatReceiptDateTime(startDate)}</span>
                </div>
                <div style="${styles.row}">
                    <span style="${styles.label}">Dropoff</span>
                    <span style="${styles.value}">${formatReceiptDateTime(endDate)}</span>
                </div>
                
                <div style="${styles.row}">
                    <span style="${styles.label}">Booking ID</span>
                    <span style="${styles.value} font-family: monospace;">${bookingId}</span>
                </div>

                <!-- Actions -->
                <div style="margin-top: 30px; text-align: center;">
                    <a href="tel:${phone}" style="${adminStyles.actionBtn}">📞 Call Customer</a>
                    <a href="mailto:${email}" style="${adminStyles.actionBtn}">✉️ Email Customer</a>
                </div>

            </div>

            <div style="background-color: #fafaf9; padding: 15px; text-align: center; font-size: 11px; color: #a8a29e; border-top: 1px solid #e7e5e4;">
                System Alert • Zup Rides Admin
            </div>
        </div>
    </div>
</body>
</html>
`
}
