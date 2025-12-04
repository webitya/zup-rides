"use client"

import { useState, useEffect } from "react"
import CloseIcon from "@mui/icons-material/Close"
import PersonIcon from "@mui/icons-material/Person"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EventIcon from "@mui/icons-material/Event"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler"

export default function BookingModal({ isOpen, onClose, vehicleName, vehiclePrice }) {
  // Get today's date in YYYY-MM-DD format for min date
  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pickupDate: "",
    pickupTime: "10:00",
    durationDays: 1,
    durationHours: 0,
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [minDate, setMinDate] = useState("")

  useEffect(() => {
    setMinDate(getTodayDate())
  }, [])

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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative animate-slideUp overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-5 relative sticky top-0 z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/90 hover:text-white hover:bg-white/20 rounded-full p-1 transition-all"
          >
            <CloseIcon fontSize="small" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <TwoWheelerIcon />
            </div>
            <div>
              <h2 className="text-xl font-bold">Book Your Ride</h2>
              <p className="text-sm text-white/90">{vehicleName}</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        {success && (
          <div className="mx-5 mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
            <span className="text-lg">✓</span>
            <span>Booking confirmed! Check your email.</span>
          </div>
        )}

        {error && (
          <div className="mx-5 mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
            <span className="text-lg">⚠</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleBooking} className="p-5 space-y-4">
          {/* NAME */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1">
              <PersonIcon fontSize="small" className="text-gray-500" />
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* EMAIL + PHONE */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1">
                <EmailIcon fontSize="small" className="text-gray-500" />
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1">
                <PhoneIcon fontSize="small" className="text-gray-500" />
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="10-digit number"
                value={formData.phone}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1">
              <LocationOnIcon fontSize="small" className="text-gray-500" />
              Pickup Address
            </label>
            <input
              type="text"
              name="address"
              className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter pickup location"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* PICKUP DATE & TIME */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1">
                <EventIcon fontSize="small" className="text-gray-500" />
                Pickup Date
              </label>
              <input
                type="date"
                name="pickupDate"
                className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                value={formData.pickupDate}
                onChange={handleInputChange}
                min={minDate}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1">
                <AccessTimeIcon fontSize="small" className="text-gray-500" />
                Time
              </label>
              <input
                type="time"
                name="pickupTime"
                className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                value={formData.pickupTime}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* DURATION */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">Rental Duration</label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Days</label>
                <input
                  type="number"
                  name="durationDays"
                  className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.durationDays}
                  onChange={handleInputChange}
                  min="0"
                  max="30"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">Hours</label>
                <input
                  type="number"
                  name="durationHours"
                  className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.durationHours}
                  onChange={handleInputChange}
                  min="0"
                  max="23"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Minimum 1 day or 1 hour rental required</p>
          </div>

          {/* AMOUNT */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Total Amount</span>
              <div className="text-3xl font-bold text-orange-600">
                ₹{(calculateAmount() / 100).toFixed(0)}
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {formData.durationDays > 0 && `${formData.durationDays} day(s)`}
              {formData.durationDays > 0 && formData.durationHours > 0 && " + "}
              {formData.durationHours > 0 && `${formData.durationHours} hour(s)`}
            </p>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3.5 rounded-xl font-bold hover:from-orange-700 hover:to-orange-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Processing...
              </span>
            ) : (
              "Pay Now"
            )}
          </button>
        </form>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px) scale(0.95); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease;
        }
      `}</style>
    </div>
  )
}
