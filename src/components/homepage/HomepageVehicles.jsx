"use client"
import Image from "next/image"
import BookingCTA from "./BookingCTA"

const allVehicles = [
  {
    id: 1,
    name: "NTORQ 125",
    type: "scooter",
    daily: "₹399",
    monthly: "₹11999",
    description: "Perfect city commuter",
    image: "/images/vehicles/scooter_red.png",
  },
  {
    id: 2,
    name: "R15",
    type: "bike",
    daily: "₹999",
    monthly: "₹29999",
    description: "Sporty and stylish",
    image: "/images/vehicles/sport_bike_blue.png",
  },
  {
    id: 3,
    name: "Activa",
    type: "scooter",
    daily: "₹399",
    monthly: "₹11999",
    description: "Reliable and efficient",
    image: "/images/vehicles/scooter_red.png",
  },
  {
    id: 4,
    name: "MT-15",
    type: "bike",
    daily: "₹799",
    monthly: "₹23999",
    description: "Agile and powerful",
    image: "/images/vehicles/sport_bike_black.png",
  },
  {
    id: 5,
    name: "APACHE 160",
    type: "bike",
    daily: "₹599",
    monthly: "₹17999",
    description: "Street fighter style",
    image: "/images/vehicles/sport_bike_black.png",
  },
  {
    id: 6,
    name: "NS 200",
    type: "bike",
    daily: "₹799",
    monthly: "₹23999",
    description: "Powerful performance",
    image: "/images/vehicles/sport_bike_black.png",
  },
]

export default function HomepageVehicles() {
  const dailyPrice = (priceStr) => Number.parseInt(priceStr.replace("₹", "").trim())

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Book Your Favorite Vehicle</h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Choose from our wide range of bikes and scooters - all available for hourly, daily, or monthly rentals
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              {/* Vehicle Image */}
              <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                  {vehicle.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{vehicle.description}</p>
                <div className="text-2xl font-bold text-orange-600 mb-4">{vehicle.daily}</div>
                <BookingCTA vehicleName={vehicle.name} vehiclePrice={dailyPrice(vehicle.daily)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
