"use client"

import { useState } from "react"
import BookingModal from "./BookingModal"

export default function BookingCTA({ vehicleName, vehiclePrice }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const buttonStyle = {
    backgroundColor: "#FF5722",
    color: "#fff",
    border: "none",
    padding: "10px 25px",
    fontSize: "14px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  }

  return (
    <>
      <button style={buttonStyle} onClick={() => setIsModalOpen(true)}>
        Book Now
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
