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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Our Fleet</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our premium collection of bikes and scooters. All vehicles are well-maintained and ready for your next adventure.
            </p>
          </div>
          <VehicleFilters filter={filter} setFilter={setFilter} />
          <VehicleGrid filter={filter} />
        </div>
      </div>
      <Footer />
    </>
  )
}
