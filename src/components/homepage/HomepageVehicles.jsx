"use client"
import VehicleGrid from "../vehicles/VehicleGrid"

export default function HomepageVehicles() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Book Your Favorite Vehicle</h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Choose from our wide range of bikes and scooters - all available for hourly, daily, or monthly rentals
        </p>
        <VehicleGrid filter="all" />
      </div>
    </section>
  )
}
