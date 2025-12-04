"use client"

export default function VehicleFilters({ filter, setFilter }) {
  const containerStyle = {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "30px",
  }

  const getButtonStyle = (isActive) => ({
    padding: "10px 25px",
    border: isActive ? "2px solid #FF5722" : "2px solid #ddd",
    backgroundColor: isActive ? "#FF5722" : "#fff",
    color: isActive ? "#fff" : "#333",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "all 0.3s",
  })

  return (
    <div style={containerStyle}>
      <button style={getButtonStyle(filter === "all")} onClick={() => setFilter("all")}>
        All Vehicles
      </button>
      <button style={getButtonStyle(filter === "scooter")} onClick={() => setFilter("scooter")}>
        Scooters
      </button>
      <button style={getButtonStyle(filter === "bike")} onClick={() => setFilter("bike")}>
        Bikes
      </button>
    </div>
  )
}
