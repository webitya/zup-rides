"use client"

import { useState } from "react"
import CloseIcon from "@mui/icons-material/Close"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EventIcon from "@mui/icons-material/Event"

export default function BookingModal({ isOpen, onClose, vehicleName, vehiclePrice }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pickupDate: "",
    durationDays: 1,
    durationHours: 0,
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const calculateAmount = () => {
    const base = vehiclePrice || 299
    const total = base * formData.durationDays + (base / 24) * formData.durationHours
    return Math.round(total * 100)
  }

  const handleBooking = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const amount = calculateAmount()

      const bookingRes = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          vehicle: vehicleName,
          amount: amount / 100,
        }),
      })

      if (!bookingRes.ok) throw new Error("Failed to create booking")

      const data = await bookingRes.json()
      await initiatePhonePay(amount, data.bookingId)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const initiatePhonePay = async (amount, bookingId) => {
    try {
      const res = await fetch("/api/phonepe-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          bookingId,
          ...formData,
        }),
      })

      const data = await res.json()

      if (data.success && data.redirectUrl) {
        window.location.href = data.redirectUrl
      } else {
        setSuccess(true)
        setLoading(false)
        setTimeout(() => {
          onClose()
          setSuccess(false)
        }, 1800)
      }
    } catch (err) {
      setError("Payment failed: " + err.message)
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-auto">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative animate-[slideUp_0.3s_ease]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <CloseIcon />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-gray-900">Book Your Ride</h2>

        {/* Messages */}
        {success && (
          <div className="bg-green-100 text-green-700 px-3 py-2 rounded mb-3 text-sm text-center">
            Booking confirmed! Check your email.
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleBooking} className="space-y-4">

          {/* NAME */}
          <div>
            <label className="block text-sm font-semibold mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              className="w-full border p-2 rounded text-sm"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* EMAIL + PHONE */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold mb-1 flex items-center gap-1">
                <EmailIcon fontSize="small" /> Email *
              </label>
              <input
                type="email"
                name="email"
                className="w-full border p-2 rounded text-sm"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 flex items-center gap-1">
                <PhoneIcon fontSize="small" /> Phone *
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full border p-2 rounded text-sm"
                value={formData.phone}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block text-sm font-semibold mb-1 flex items-center gap-1">
              <LocationOnIcon fontSize="small" /> Pickup Address *
            </label>
            <input
              type="text"
              name="address"
              className="w-full border p-2 rounded text-sm"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* PICKUP DATE */}
          <div>
            <label className="block text-sm font-semibold mb-1 flex items-center gap-1">
              <EventIcon fontSize="small" /> Pickup Date *
            </label>
            <input
              type="date"
              name="pickupDate"
              className="w-full border p-2 rounded text-sm"
              value={formData.pickupDate}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* DAYS / HOURS */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold mb-1">Days</label>
              <input
                type="number"
                name="durationDays"
                className="w-full border p-2 rounded text-sm"
                value={formData.durationDays}
                onChange={handleInputChange}
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Hours</label>
              <input
                type="number"
                name="durationHours"
                className="w-full border p-2 rounded text-sm"
                value={formData.durationHours}
                onChange={handleInputChange}
                min="0"
                max="23"
              />
            </div>
          </div>

          {/* AMOUNT */}
          <div className="bg-gray-100 p-4 rounded text-center">
            <div className="text-xs text-gray-500 mb-1">Total Amount</div>
            <div className="text-2xl font-bold text-orange-600">
              ₹{(calculateAmount() / 100).toFixed(2)}
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white py-2 rounded font-semibold hover:bg-orange-700 transition disabled:opacity-70"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  )
}
