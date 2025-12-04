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
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

export default function BookingModal({ isOpen, onClose, vehicleName, vehiclePrice }) {
  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  // Pricing tiers with rates
  const pricingTiers = [
    { id: 'hourly', label: 'Hourly', rate: vehiclePrice || 50, unit: '/hr', multiplier: 1 },
    { id: 'daily', label: 'Daily', rate: vehiclePrice || 299, unit: '/day', multiplier: 24 },
    { id: 'weekly', label: 'Weekly', rate: (vehiclePrice || 299) * 6, unit: '/week', multiplier: 168 },
    { id: 'monthly', label: 'Monthly', rate: (vehiclePrice || 299) * 25, unit: '/month', multiplier: 720 }
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pickupDate: "",
    pickupTime: "10:00",
    duration: 1,
    pricingTier: 'daily'
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

  const handleTierSelect = (tierId) => {
    setFormData((prev) => ({ ...prev, pricingTier: tierId, duration: 1 }))
  }

  const calculateAmount = () => {
    const selectedTier = pricingTiers.find(t => t.id === formData.pricingTier)
    const total = selectedTier.rate * formData.duration
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

  const selectedTier = pricingTiers.find(t => t.id === formData.pricingTier)

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-3 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl relative overflow-hidden max-h-[95vh] sm:max-h-[90vh] flex flex-col"
        style={{
          animation: 'modalSlideUp 0.3s ease-out forwards'
        }}
      >
        {/* Header - Fixed */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 sm:p-5 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/90 hover:text-white hover:bg-white/20 rounded-full p-1.5 transition-all"
            aria-label="Close"
            type="button"
          >
            <CloseIcon fontSize="small" />
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <TwoWheelerIcon fontSize="medium" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold truncate">Book Your Ride</h2>
              <p className="text-sm text-white/90 truncate">{vehicleName}</p>
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
          <form onSubmit={handleBooking} className="p-4 sm:p-6 space-y-4">
            {/* Pricing Tier Selection */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-3">Select Pricing Plan</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                {pricingTiers.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => handleTierSelect(tier.id)}
                    className={`relative p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${formData.pricingTier === tier.id
                        ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 shadow-md'
                        : 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50/50'
                      }`}
                  >
                    {formData.pricingTier === tier.id && (
                      <CheckCircleIcon className="absolute top-2 right-2 text-orange-500" sx={{ fontSize: 18 }} />
                    )}
                    <div className="text-xs font-semibold text-gray-600 uppercase mb-1">{tier.label}</div>
                    <div className="text-lg sm:text-xl font-bold text-orange-600">₹{tier.rate}</div>
                    <div className="text-xs text-gray-500">{tier.unit}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Duration ({selectedTier.label})
              </label>
              <input
                type="number"
                name="duration"
                className="w-full border-2 border-gray-300 px-4 py-3 rounded-xl text-base focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder={`Number of ${selectedTier.label.toLowerCase()}s`}
                value={formData.duration}
                onChange={handleInputChange}
                min="1"
                max={formData.pricingTier === 'hourly' ? '24' : formData.pricingTier === 'daily' ? '30' : '12'}
                required
              />
            </div>

            {/* NAME */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-1">
                <PersonIcon sx={{ fontSize: 16 }} className="text-gray-600" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border-2 border-gray-300 px-4 py-3 rounded-xl text-base focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-1">
                  <EmailIcon sx={{ fontSize: 16 }} className="text-gray-600" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-2 border-gray-300 px-4 py-3 rounded-xl text-base focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-1">
                  <PhoneIcon sx={{ fontSize: 16 }} className="text-gray-600" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border-2 border-gray-300 px-4 py-3 rounded-xl text-base focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
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
              <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-1">
                <LocationOnIcon sx={{ fontSize: 16 }} className="text-gray-600" />
                Pickup Address
              </label>
              <input
                type="text"
                name="address"
                className="w-full border-2 border-gray-300 px-4 py-3 rounded-xl text-base focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Enter pickup location"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* DATE & TIME */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-1">
                  <EventIcon sx={{ fontSize: 16 }} className="text-gray-600" />
                  Date
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  className="w-full border-2 border-gray-300 px-4 py-3 rounded-xl text-base focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  min={minDate}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-1">
                  <AccessTimeIcon sx={{ fontSize: 16 }} className="text-gray-600" />
                  Time
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  className="w-full border-2 border-gray-300 px-4 py-3 rounded-xl text-base focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* AMOUNT */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 p-4 sm:p-5 rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-gray-700">Total Amount</span>
                <div className="text-3xl sm:text-4xl font-bold text-orange-600">
                  ₹{(calculateAmount() / 100).toFixed(0)}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                {formData.duration} {selectedTier.label.toLowerCase()}{formData.duration > 1 ? 's' : ''} × ₹{selectedTier.rate} {selectedTier.unit}
              </p>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-orange-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Processing...
                </span>
              ) : (
                "Proceed to Payment"
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalSlideUp {
          from { 
            transform: translateY(30px);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
