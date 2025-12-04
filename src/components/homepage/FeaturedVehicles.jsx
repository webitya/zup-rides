import Link from "next/link"

const vehicles = [
  { name: "NTORQ 125", hourly: "₹79", daily: "₹399", weekly: "₹2799", monthly: "₹11999" },
  { name: "R15", hourly: "₹119", daily: "₹999", weekly: "₹6999", monthly: "₹29999" },
  { name: "Activa", hourly: "₹79", daily: "₹399", weekly: "₹2799", monthly: "₹11999" },
  { name: "MT-15", hourly: "₹119", daily: "₹799", weekly: "₹5599", monthly: "₹23999" },
  { name: "APACHE 160", hourly: "₹119", daily: "₹599", weekly: "₹4199", monthly: "₹17999" },
  { name: "KTM 200 Duke", hourly: "₹119", daily: "₹799", weekly: "₹5599", monthly: "₹23999" },
]

export default function FeaturedVehicles() {
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
    marginBottom: "40px",
    textAlign: "center",
    color: "#1a1a1a",
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  }

  const vehicleCardStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #eee",
    transition: "all 0.3s",
  }

  const vehicleNameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#1a1a1a",
  }

  const priceRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "8px",
    fontSize: "13px",
    borderBottom: "1px solid #eee",
  }

  const labelStyle = {
    color: "#666",
  }

  const priceStyle = {
    color: "#FF5722",
    fontWeight: "bold",
  }

  const ctaStyle = {
    display: "block",
    textAlign: "center",
    marginTop: "30px",
  }

  const viewAllButtonStyle = {
    backgroundColor: "#FF5722",
    color: "#fff",
    border: "none",
    padding: "12px 40px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    textDecoration: "none",
    display: "inline-block",
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Choose Your Ride</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "30px", fontSize: "16px" }}>
          Best bikes & scooters in town – affordable, flexible, and ready to ride!
        </p>

        <div style={gridStyle}>
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} style={vehicleCardStyle}>
              <div style={vehicleNameStyle}>{vehicle.name}</div>
              <div style={priceRowStyle}>
                <span style={labelStyle}>Hourly</span>
                <span style={priceStyle}>{vehicle.hourly}</span>
              </div>
              <div style={priceRowStyle}>
                <span style={labelStyle}>Daily</span>
                <span style={priceStyle}>{vehicle.daily}</span>
              </div>
              <div style={priceRowStyle}>
                <span style={labelStyle}>Weekly</span>
                <span style={priceStyle}>{vehicle.weekly}</span>
              </div>
              <div style={{ ...priceRowStyle, borderBottom: "none" }}>
                <span style={labelStyle}>Monthly</span>
                <span style={priceStyle}>{vehicle.monthly}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={ctaStyle}>
          <Link href="/vehicles" style={viewAllButtonStyle}>
            See All Vehicles
          </Link>
        </div>
      </div>
    </section>
  )
}
