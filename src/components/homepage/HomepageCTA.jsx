import Link from "next/link"
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler"
import StorefrontIcon from "@mui/icons-material/Storefront"
import BookingCTA from "./BookingCTA"

export default function HomepageCTA() {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#f5f5f5",
  }

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  }

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "40px",
    textAlign: "center",
    color: "#1a1a1a",
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  }

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  }

  const iconStyle = {
    fontSize: "50px",
    color: "#FF5722",
    marginBottom: "20px",
  }

  const cardTitleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#1a1a1a",
  }

  const cardTextStyle = {
    color: "#666",
    fontSize: "15px",
    marginBottom: "20px",
    lineHeight: "1.6",
  }

  const buttonStyle = {
    backgroundColor: "#FF5722",
    color: "#fff",
    border: "none",
    padding: "10px 25px",
    fontSize: "14px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    textDecoration: "none",
    display: "inline-block",
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Flexible Plans for Every Need</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <TwoWheelerIcon style={iconStyle} />
            <h3 style={cardTitleStyle}>Scooters</h3>
            <p style={cardTextStyle}>
              Perfect for navigating the bustling streets of Ranchi. Easy to ride and fuel-efficient.
            </p>
            <p style={{ fontSize: "18px", fontWeight: "bold", color: "#FF5722", marginBottom: "15px" }}>
              From ₹299/day
            </p>
            <BookingCTA vehicleName="Scooter" vehiclePrice={299} />
          </div>

          <div style={cardStyle}>
            <TwoWheelerIcon style={iconStyle} />
            <h3 style={cardTitleStyle}>Motorbikes</h3>
            <p style={cardTextStyle}>
              For longer rides and power-packed performance, our motorbikes combine speed with comfort.
            </p>
            <p style={{ fontSize: "18px", fontWeight: "bold", color: "#FF5722", marginBottom: "15px" }}>
              From ₹599/day
            </p>
            <BookingCTA vehicleName="Motorbike" vehiclePrice={599} />
          </div>

          <div style={cardStyle}>
            <StorefrontIcon style={iconStyle} />
            <h3 style={cardTitleStyle}>Custom Plans</h3>
            <p style={cardTextStyle}>
              Need something special? Create your own rental plan with flexible terms and transparent pricing.
            </p>
            <p style={{ fontSize: "18px", fontWeight: "bold", color: "#FF5722", marginBottom: "15px" }}>Contact Us</p>
            <Link href="/contact" style={buttonStyle}>
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
