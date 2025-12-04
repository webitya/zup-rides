"use client"

import { useState } from "react"
import BookingModal from "./BookingModal"
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"

export default function BookingCTA({ vehicleName, vehiclePrice }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3.5 rounded-xl font-bold text-base hover:from-orange-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
      >
        <DirectionsBikeIcon className="text-xl group-hover:rotate-12 transition-transform duration-300" />
        Book Now
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vehicleName={vehicleName}
        vehiclePrice={vehiclePrice}
      />
    </>
  )
}
