import Link from "next/link"
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"

export default function HomepageHero() {
  const heroStyle = {
    background: "linear-gradient(135deg, #FF5722 0%, #FF7043 100%)",
    color: "#fff",
    padding: "80px 20px",
    textAlign: "center",
    marginBottom: "50px",
  }

  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
  }

  const titleStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "15px",
    lineHeight: "1.2",
  }

  const subtitleStyle = {
    fontSize: "20px",
    marginBottom: "30px",
    opacity: 0.95,
    lineHeight: "1.5",
  }

  const ctaContainerStyle = {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "40px",
  }

  const primaryButtonStyle = {
    backgroundColor: "#fff",
    color: "#FF5722",
    border: "none",
    padding: "12px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "25px",
    transition: "all 0.3s",
  }

  const secondaryButtonStyle = {
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    padding: "10px 28px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "25px",
    transition: "all 0.3s",
  }

  const featuresStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "30px",
    marginTop: "50px",
    padding: "30px",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "10px",
  }

  const featureItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  }

  const iconStyle = {
    fontSize: "40px",
    color: "#fff",
  }

  const featureTextStyle = {
    fontSize: "14px",
    fontWeight: "bold",
  }

  return (
    <div style={heroStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Discover Ranchi Like Never Before!</h1>
        <p style={subtitleStyle}>
          Rent premium bikes and scooters from just ₹299/- and explore the city at your own pace
        </p>

        <div style={ctaContainerStyle}>
          <Link href="/vehicles" style={primaryButtonStyle}>
            Book Your Ride Now
          </Link>
          <Link href="/contact" style={secondaryButtonStyle}>
            Contact Us
          </Link>
        </div>

        <div style={featuresStyle}>
          <div style={featureItemStyle}>
            <LocalOfferIcon style={iconStyle} />
            <span style={featureTextStyle}>From ₹299</span>
          </div>
          <div style={featureItemStyle}>
            <DirectionsBikeIcon style={iconStyle} />
            <span style={featureTextStyle}>Quality Bikes</span>
          </div>
          <div style={featureItemStyle}>
            <AirlineSeatFlatIcon style={iconStyle} />
            <span style={featureTextStyle}>Free Helmets</span>
          </div>
        </div>
      </div>
    </div>
  )
}
