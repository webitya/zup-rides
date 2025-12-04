import VerifiedIcon from "@mui/icons-material/Verified"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import SecurityIcon from "@mui/icons-material/Security"
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"

export default function Features() {
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

  const subtitleStyle = {
    textAlign: "center",
    color: "#666",
    marginBottom: "40px",
    fontSize: "16px",
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  }

  const featureStyle = {
    display: "flex",
    gap: "15px",
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  }

  const iconStyle = {
    fontSize: "40px",
    color: "#FF5722",
    minWidth: "50px",
  }

  const contentStyle = {
    flex: 1,
  }

  const featureTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#1a1a1a",
  }

  const featureTextStyle = {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
  }

  const features = [
    {
      icon: VerifiedIcon,
      title: "Well-Maintained Vehicles",
      text: "All our bikes and scooters are regularly serviced and in perfect condition.",
    },
    {
      icon: LocalShippingIcon,
      title: "Flexible Pickup & Drop",
      text: "Choose your own time and location for convenient pickup and drop-off.",
    },
    {
      icon: SecurityIcon,
      title: "No Hidden Charges",
      text: "Transparent pricing with full breakdown. What you see is what you pay.",
    },
    {
      icon: SelfImprovementIcon,
      title: "Free Helmets Included",
      text: "Safety first! All rentals include premium helmets at no extra cost.",
    },
  ]

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Why Choose ZupRides?</h2>
        <p style={subtitleStyle}>Your trusted partner for bike and car rentals in Ranchi</p>

        <div style={gridStyle}>
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <div key={idx} style={featureStyle}>
                <IconComponent style={iconStyle} />
                <div style={contentStyle}>
                  <div style={featureTitleStyle}>{feature.title}</div>
                  <p style={featureTextStyle}>{feature.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
