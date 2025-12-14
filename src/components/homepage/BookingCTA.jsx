"use client"

import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"

export default function BookingCTA({ vehicleName, vehiclePrice }) {
  const handleBooking = () => {
    // Create WhatsApp message
    const message = `Hi! I'm interested in booking a *${vehicleName}* for rent.%0A%0A💰 Price: ₹${vehiclePrice}/day%0A%0ACould you please provide more details about availability and booking process?`

    // WhatsApp number
    const whatsappNumber = "919798146740"

    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleBooking}
      className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3.5 rounded-xl font-bold text-base hover:from-orange-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
    >
      <DirectionsBikeIcon className="text-xl group-hover:rotate-12 transition-transform duration-300" />
      Book Now on WhatsApp
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </button>
  )
}
