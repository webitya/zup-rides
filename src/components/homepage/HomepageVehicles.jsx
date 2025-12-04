"use client"
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler"
import BookingCTA from "./BookingCTA"

const allVehicles = [
  {
    id: 1,
    name: "NTORQ 125",
    type: "scooter",
    daily: "₹399",
    monthly: "₹11999",
    description: "Perfect city commuter",
  },
  {
    id: 2,
    name: "R15",
    type: "bike",
    daily: "₹999",
    monthly: "₹29999",
    description: "Sporty and stylish",
  },
  {
    id: 3,
    name: "Activa",
    type: "scooter",
    daily: "₹399",
    monthly: "₹11999",
    description: "Reliable and efficient",
  },
  {
    id: 4,
    name: "MT-15",
    type: "bike",
    daily: "₹799",
    monthly: "₹23999",
    description: "Agile and powerful",
  },
  {
    id: 5,
    name: "APACHE 160",
    type: "bike",
    daily: "₹599",
    monthly: "₹17999",
    description: "Street fighter style",
  },
  {
    id: 6,
    name: "NS 200",
    type: "bike",
    daily: "₹799",
    monthly: "₹23999",
    description: "Powerful performance",
  },
]

export default function HomepageVehicles() {
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
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  }

  const vehicleCardStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #eee",
    textAlign: "center",
    transition: "all 0.3s",
  }

  const iconStyle = {
    fontSize: "50px",
    color: "#FF5722",
    marginBottom: "10px",
  }

  const vehicleNameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#1a1a1a",
  }

  const descriptionStyle = {
    fontSize: "13px",
    color: "#999",
    marginBottom: "12px",
  }

  const priceStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: "15px",
  }

  const dailyPrice = (priceStr) => Number.parseInt(priceStr.replace("₹", "").trim())

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Book Your Favorite Vehicle</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px", fontSize: "16px" }}>
          Choose from our wide range of bikes and scooters - all available for hourly, daily, or monthly rentals
        </p>

        <div style={gridStyle}>
          {allVehicles.map((vehicle) => (
            <div key={vehicle.id} style={vehicleCardStyle}>
              <TwoWheelerIcon style={iconStyle} />
              <div style={vehicleNameStyle}>{vehicle.name}</div>
              <p style={descriptionStyle}>{vehicle.description}</p>
              <div style={priceStyle}>{vehicle.daily}</div>
              <BookingCTA vehicleName={vehicle.name} vehiclePrice={dailyPrice(vehicle.daily)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
