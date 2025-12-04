import Image from "next/image"
import BookingCTA from "../../components/homepage/BookingCTA"

export default function VehicleCard({ vehicle }) {
  const dailyPrice = Number.parseInt(vehicle.daily.replace("₹", "").trim())

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
      {/* Image Container */}
      <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        {/* Type Badge */}
        <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
          {vehicle.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{vehicle.description}</p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-xl text-center border border-orange-200">
            <div className="text-xs text-gray-600 uppercase font-medium mb-1">Daily</div>
            <div className="text-lg font-bold text-orange-600">{vehicle.daily}</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-xl text-center border border-orange-200">
            <div className="text-xs text-gray-600 uppercase font-medium mb-1">Monthly</div>
            <div className="text-lg font-bold text-orange-600">{vehicle.monthly}</div>
          </div>
        </div>

        {/* CTA Button */}
        <BookingCTA vehicleName={vehicle.name} vehiclePrice={dailyPrice} />
      </div>
    </div>
  )
}
