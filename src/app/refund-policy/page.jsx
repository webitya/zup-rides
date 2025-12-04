import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import WarningIcon from "@mui/icons-material/Warning"

export const metadata = {
  title: "Refund Policy - ZupRides | Bike & Car Rentals in Ranchi",
  description: "Refund policy for ZupRides bike and car rental services in Ranchi, Jharkhand.",
}

export default function RefundPolicy() {
  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    color: "#333",
    lineHeight: "1.8",
  }

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: "30px",
  }

  const sectionStyle = {
    marginBottom: "30px",
  }

  const sectionTitleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: "15px",
  }

  const policyBoxStyle = {
    backgroundColor: "#fff3e0",
    border: "2px solid #FF5722",
    padding: "30px",
    marginBottom: "30px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
  }

  const contactBoxStyle = {
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    padding: "25px",
    marginTop: "30px",
    borderRadius: "8px",
  }

  const contactTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: "15px",
  }

  const contactItemStyle = {
    marginBottom: "10px",
    fontSize: "16px",
    lineHeight: "1.6",
  }

  const warningBoxStyle = {
    display: "flex",
    gap: "15px",
    backgroundColor: "#fce4ec",
    border: "1px solid #f48fb1",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "30px",
  }

  const warningIconStyle = {
    color: "#c2185b",
    fontSize: "28px",
    flexShrink: 0,
  }

  const warningTextStyle = {
    color: "#880e4f",
    fontSize: "15px",
  }

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <h1 style={titleStyle}>Refund Policy</h1>

        <div style={policyBoxStyle}>We do not provide refund for any of our services.</div>

        <div style={warningBoxStyle}>
          <WarningIcon style={warningIconStyle} />
          <div style={warningTextStyle}>
            <strong>Please Note:</strong> All rental bookings and payments are non-refundable. By completing your
            booking through ZupRides, you agree to our refund policy terms.
          </div>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Policy Details</h2>
          <p>
            ZupRides bike and car rental services operate on a non-refundable basis. Once a booking is confirmed and
            payment is processed through PhonePay or any other payment method, the amount cannot be refunded under any
            circumstances.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>What This Means</h2>
          <ul style={{ marginLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>No Cancellation Refunds:</strong> Cancellations made before or after the rental period will not
              result in any refund.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>No Partial Refunds:</strong> Even if you use the service for a shorter duration than booked, no
              partial refunds will be issued.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>No Exceptions:</strong> This policy applies to all customers and all rental scenarios without
              exception.
            </li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Important Information</h2>
          <p>
            Before making a booking, please ensure that you have carefully reviewed the rental terms, pricing, and
            vehicle details. We recommend that you confirm all booking details before making payment. If you have any
            questions about your booking, please contact us before proceeding with the payment.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Contact Us</h2>
          <p>For any inquiries or concerns regarding our refund policy, please reach out to us:</p>
          <div style={contactBoxStyle}>
            <div style={contactTitleStyle}>ZupRides Customer Support</div>
            <div style={contactItemStyle}>
              <strong>Name:</strong> AMAN KUMAR
            </div>
            <div style={contactItemStyle}>
              <strong>Phone:</strong> +91 97981 46740
            </div>
            <div style={contactItemStyle}>
              <strong>Email:</strong> support@zuprides.in
            </div>
          </div>
        </div>

        <div style={sectionStyle}>
          <p style={{ backgroundColor: "#fafafa", padding: "15px", borderLeft: "4px solid #FF5722" }}>
            <strong>Last Updated:</strong> December 2024 | This policy is effective immediately and applies to all
            bookings made on or after this date.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
