"use client"
import { useState } from "react"
import Header from "../../components/common/Header"
import VehicleGrid from "../../components/vehicles/VehicleGrid"
import VehicleFilters from "../../components/vehicles/VehicleFilters"
import Footer from "../../components/common/Footer"

export default function Vehicles() {
  const [filter, setFilter] = useState("all")

  return (
    <>
      <Header />
      <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "10px", color: "#1a1a1a" }}>Our Fleet</h1>
        <p style={{ color: "#666", marginBottom: "30px", fontSize: "16px" }}>
          Choose from our premium collection of bikes and scooters
        </p>
        <VehicleFilters filter={filter} setFilter={setFilter} />
        <VehicleGrid filter={filter} />
      </div>
      <Footer />
    </>
  )
}
