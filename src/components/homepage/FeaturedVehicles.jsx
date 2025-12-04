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
  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Choose Your Ride</h2>
        <p className="text-center text-gray-600 mb-8 text-base">
          Best bikes & scooters in town – affordable, flexible, and ready to ride!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-lg font-bold mb-4 text-gray-900">{vehicle.name}</div>
              <div className="flex justify-between pb-2 text-sm border-b border-gray-200">
                <span className="text-gray-600">Hourly</span>
                <span className="text-[#FF5722] font-bold">{vehicle.hourly}</span>
              </div>
              <div className="flex justify-between py-2 text-sm border-b border-gray-200">
                <span className="text-gray-600">Daily</span>
                <span className="text-[#FF5722] font-bold">{vehicle.daily}</span>
              </div>
              <div className="flex justify-between py-2 text-sm border-b border-gray-200">
                <span className="text-gray-600">Weekly</span>
                <span className="text-[#FF5722] font-bold">{vehicle.weekly}</span>
              </div>
              <div className="flex justify-between pt-2 text-sm">
                <span className="text-gray-600">Monthly</span>
                <span className="text-[#FF5722] font-bold">{vehicle.monthly}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/vehicles"
            className="inline-block bg-[#FF5722] text-white border-none py-3 px-10 text-base font-bold rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#E64A19]"
          >
            See All Vehicles
          </Link>
        </div>
      </div>
    </section>
  )
}
