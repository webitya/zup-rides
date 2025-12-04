import TwoWheelerIcon from "@mui/icons-material/TwoWheeler"
import BookingCTA from "../../components/homepage/BookingCTA"

export default function VehicleCard({ vehicle }) {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    border: "1px solid #eee",
  }

  const imageStyle = {
    width: "100%",
    height: "200px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid #eee",
  }

  const iconStyle = {
    fontSize: "60px",
    color: "#FF5722",
  }

  const contentStyle = {
    padding: "20px",
  }

  const nameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#1a1a1a",
  }

  const descriptionStyle = {
    fontSize: "13px",
    color: "#999",
    marginBottom: "15px",
  }

  const pricesStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "15px",
  }

  const priceItemStyle = {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    borderRadius: "5px",
  }

  const priceTypStyle = {
    fontSize: "11px",
    color: "#999",
    textTransform: "uppercase",
  }

  const priceStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#FF5722",
  }

  const dailyPrice = Number.parseInt(vehicle.daily.replace("₹", "").trim())

  return (
    <div style={cardStyle}>
      <div style={imageStyle}>
        <TwoWheelerIcon style={iconStyle} />
      </div>
      <div style={contentStyle}>
        <div style={nameStyle}>{vehicle.name}</div>
        <p style={descriptionStyle}>{vehicle.description}</p>

        <div style={pricesStyle}>
          <div style={priceItemStyle}>
            <div style={priceTypStyle}>Daily</div>
            <div style={priceStyle}>{vehicle.daily}</div>
          </div>
          <div style={priceItemStyle}>
            <div style={priceTypStyle}>Monthly</div>
            <div style={priceStyle}>{vehicle.monthly}</div>
          </div>
        </div>

        <BookingCTA vehicleName={vehicle.name} vehiclePrice={dailyPrice} />
      </div>
    </div>
  )
}
