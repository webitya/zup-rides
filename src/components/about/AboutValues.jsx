import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import PeopleIcon from "@mui/icons-material/People"
import SpeedIcon from "@mui/icons-material/Speed"
import EcoIcon from "@mui/icons-material/Eco"

export default function AboutValues() {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#fff",
  }

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  }

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "50px",
    textAlign: "center",
    color: "#1a1a1a",
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
  }

  const valueStyle = {
    textAlign: "center",
  }

  const iconStyle = {
    fontSize: "50px",
    color: "#FF5722",
    marginBottom: "20px",
  }

  const valueNameStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#1a1a1a",
  }

  const valueDescStyle = {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.6",
  }

  const values = [
    { icon: ThumbUpIcon, name: "Quality First", desc: "We maintain the highest standards for all our vehicles." },
    { icon: PeopleIcon, name: "Customer Focus", desc: "Your satisfaction is our top priority." },
    { icon: SpeedIcon, name: "Quick Service", desc: "Fast booking and hassle-free rental process." },
    { icon: EcoIcon, name: "Eco-Friendly", desc: "Supporting sustainable and clean transportation." },
  ]

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Our Core Values</h2>

        <div style={gridStyle}>
          {values.map((value, idx) => {
            const IconComponent = value.icon
            return (
              <div key={idx} style={valueStyle}>
                <IconComponent style={iconStyle} />
                <div style={valueNameStyle}>{value.name}</div>
                <p style={valueDescStyle}>{value.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
