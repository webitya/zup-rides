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
  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative overflow-hidden max-h-[95vh] sm:max-h-[90vh] flex flex-col animate-slideUp">
        {/* Header - Fixed */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 sm:p-5 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/90 hover:text-white hover:bg-white/20 rounded-full p-1 transition-all"
            aria-label="Close"
          >
            <CloseIcon fontSize="small" />
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <TwoWheelerIcon fontSize="small" />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-bold truncate">Book Your Ride</h2>
              <p className="text-xs sm:text-sm text-white/90 truncate">{vehicleName}</p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
          {/* Messages */}
          {success && (
            <div className="mx-4 mt-3 bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg text-xs sm:text-sm flex items-center gap-2">
              <span>✓</span>
              <span>Booking confirmed! Check your email.</span>
            </div>
          )}

          {error && (
            <div className="mx-4 mt-3 bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-xs sm:text-sm flex items-center gap-2">
              <span>⚠</span>
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleBooking} className="p-4 sm:p-5 space-y-3">
            {/* NAME */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                <PersonIcon sx={{ fontSize: 14 }} className="text-gray-500" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                  <EmailIcon sx={{ fontSize: 14 }} className="text-gray-500" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                  <PhoneIcon sx={{ fontSize: 14 }} className="text-gray-500" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
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
              <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                <LocationOnIcon sx={{ fontSize: 14 }} className="text-gray-500" />
                Pickup Address
              </label>
              <input
                type="text"
                name="address"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Enter pickup location"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* DATE & TIME */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                  <EventIcon sx={{ fontSize: 14 }} className="text-gray-500" />
                  Date
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  min={minDate}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                  <AccessTimeIcon sx={{ fontSize: 14 }} className="text-gray-500" />
                  Time
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* DURATION */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Duration</label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="number"
                    name="durationDays"
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Days"
                    value={formData.durationDays}
                    onChange={handleInputChange}
                    min="0"
                    max="30"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    name="durationHours"
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Hours"
                    value={formData.durationHours}
                    onChange={handleInputChange}
                    min="0"
                    max="23"
                  />
                </div>
              </div>
            </div>

            {/* AMOUNT */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 p-3 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-gray-700">Total</span>
                <div className="text-2xl sm:text-3xl font-bold text-orange-600">
                  ₹{(calculateAmount() / 100).toFixed(0)}
                </div>
              </div>
              {(formData.durationDays > 0 || formData.durationHours > 0) && (
                <p className="text-xs text-gray-600 mt-1">
                  {formData.durationDays > 0 && `${formData.durationDays}d`}
                  {formData.durationDays > 0 && formData.durationHours > 0 && " + "}
                  {formData.durationHours > 0 && `${formData.durationHours}h`}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 rounded-xl font-bold hover:from-orange-700 hover:to-orange-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
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
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(20px) scale(0.96); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

