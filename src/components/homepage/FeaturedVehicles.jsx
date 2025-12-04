import Link from "next/link"
import Image from "next/image"

const vehicles = [
  { name: "NTORQ 125", hourly: "₹79", daily: "₹399", weekly: "₹2799", monthly: "₹11999", image: "/images/vehicles/scooter_red.png", type: "scooter" },
  { name: "R15", hourly: "₹119", daily: "₹999", weekly: "₹6999", monthly: "₹29999", image: "/images/vehicles/sport_bike_blue.png", type: "bike" },
  { name: "Activa", hourly: "₹79", daily: "₹399", weekly: "₹2799", monthly: "₹11999", image: "/images/vehicles/scooter_red.png", type: "scooter" },
  { name: "MT-15", hourly: "₹119", daily: "₹799", weekly: "₹5599", monthly: "₹23999", image: "/images/vehicles/sport_bike_black.png", type: "bike" },
  { name: "APACHE 160", hourly: "₹119", daily: "₹599", weekly: "₹4199", monthly: "₹17999", image: "/images/vehicles/sport_bike_black.png", type: "bike" },
  { name: "KTM 200 Duke", hourly: "₹119", daily: "₹799", weekly: "₹5599", monthly: "₹23999", image: "/images/vehicles/adventure_bike_orange.png", type: "bike" },
]

export default function FeaturedVehicles() {
  return (
    <section className="py-20 px-5 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Choose Your Ride</h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Best bikes & scooters in town – affordable, flexible, and ready to ride!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="bg-white p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              {/* Vehicle Image */}
              <div className="relative h-48 mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                  {vehicle.type}
                </div>
              </div>

              <div className="text-xl font-bold mb-4 text-gray-900">{vehicle.name}</div>

              <div className="space-y-2">
                <div className="flex justify-between pb-2 text-sm border-b border-gray-100">
                  <span className="text-gray-600">Hourly</span>
                  <span className="text-orange-600 font-bold">{vehicle.hourly}</span>
                </div>
                <div className="flex justify-between py-2 text-sm border-b border-gray-100">
                  <span className="text-gray-600">Daily</span>
                  <span className="text-orange-600 font-bold">{vehicle.daily}</span>
                </div>
                <div className="flex justify-between py-2 text-sm border-b border-gray-100">
                  <span className="text-gray-600">Weekly</span>
                  <span className="text-orange-600 font-bold">{vehicle.weekly}</span>
                </div>
                <div className="flex justify-between pt-2 text-sm">
                  <span className="text-gray-600">Monthly</span>
                  <span className="text-orange-600 font-bold">{vehicle.monthly}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/vehicles"
            className="inline-block bg-orange-600 text-white px-10 py-4 text-base font-bold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            See All Vehicles
          </Link>
        </div>
      </div>
    </section>
  )
}
