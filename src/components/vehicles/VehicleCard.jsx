import Image from "next/image"
import BookingCTA from "../../components/homepage/BookingCTA"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import DateRangeIcon from "@mui/icons-material/DateRange"
import EventNoteIcon from "@mui/icons-material/EventNote"

export default function VehicleCard({ vehicle }) {
  const dailyPrice = Number.parseInt(vehicle.daily.replace("₹", "").trim())
  const hourlyPrice = Math.round(dailyPrice / 24)
  const weeklyPrice = dailyPrice * 6
  const monthlyPrice = dailyPrice * 25

  const pricingOptions = [
    { label: "Hourly", price: hourlyPrice, icon: AccessTimeIcon, color: "from-blue-50 to-blue-100 border-blue-200" },
    { label: "Daily", price: dailyPrice, icon: CalendarTodayIcon, color: "from-orange-50 to-orange-100 border-orange-200" },
    { label: "Weekly", price: weeklyPrice, icon: DateRangeIcon, color: "from-purple-50 to-purple-100 border-purple-200" },
    { label: "Monthly", price: monthlyPrice, icon: EventNoteIcon, color: "from-green-50 to-green-100 border-green-200" }
  ]

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
        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg">
          {vehicle.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
        <p className="text-sm text-gray-500 mb-5">{vehicle.description}</p>

        {/* Pricing Grid - All 4 Tiers */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {pricingOptions.map((option) => {
            const Icon = option.icon
            return (
              <div key={option.label} className={`bg-gradient-to-br ${option.color} p-3 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-md`}>
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon sx={{ fontSize: 14 }} className="text-gray-600" />
                  <div className="text-xs text-gray-600 uppercase font-semibold">{option.label}</div>
                </div>
                <div className="text-lg font-bold text-gray-900">₹{option.price}</div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <BookingCTA vehicleName={vehicle.name} vehiclePrice={dailyPrice} />
      </div>
    </div>
  )
}
