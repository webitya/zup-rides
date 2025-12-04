"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
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

  // Pricing tiers
  const pricingTiers = [
    { id: 'hourly', label: 'Hourly', rate: Math.round((vehiclePrice || 299) / 24), unit: '/hr' },
    { id: 'daily', label: 'Daily', rate: vehiclePrice || 299, unit: '/day' },
    { id: 'weekly', label: 'Weekly', rate: (vehiclePrice || 299) * 6, unit: '/week' },
    { id: 'monthly', label: 'Monthly', rate: (vehiclePrice || 299) * 25, unit: '/month' }
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setMinDate(getTodayDate())
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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

  if (!isOpen || !mounted) return null

  const selectedTier = pricingTiers.find(t => t.id === formData.pricingTier)

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const modalContent = (
    <>
      <style jsx>{`
        .modal-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background-color: rgba(0, 0, 0, 0.5) !important;
          backdrop-filter: blur(4px);
          z-index: 99999 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 8px !important;
          margin: 0 !important;
        }
        
        .modal-content {
          background: white !important;
          border-radius: 10px !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
          width: 100% !important;
          max-width: 550px !important;
          max-height: 94vh !important;
          display: flex !important;
          flex-direction: column !important;
          position: relative !important;
          z-index: 100000 !important;
          margin: 0 auto !important;
        }
        
        .modal-header {
          background: linear-gradient(to right, #ea580c, #f97316) !important;
          color: white !important;
          padding: 10px 14px !important;
          border-radius: 10px 10px 0 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          flex-shrink: 0 !important;
        }
        
        .modal-body {
          overflow-y: auto !important;
          flex: 1 !important;
          padding: 14px !important;
        }
        
        .pricing-grid {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 5px !important;
        }
        
        @media (max-width: 640px) {
          .modal-overlay {
            padding: 6px !important;
          }
          .modal-content {
            max-height: 96vh !important;
          }
          .modal-header {
            padding: 8px 10px !important;
          }
          .modal-body {
            padding: 10px !important;
          }
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 5px !important;
          }
        }
        
        .pricing-card {
          padding: 6px !important;
          border-radius: 5px !important;
          border: 1.5px solid #e5e7eb !important;
          text-align: center !important;
          cursor: pointer !important;
          transition: border-color 0.2s !important;
          background: white !important;
        }
        
        .pricing-card:hover {
          border-color: #fdba74 !important;
        }
        
        .pricing-card.active {
          border-color: #f97316 !important;
          background-color: #fff7ed !important;
        }
        
        .form-input {
          width: 100% !important;
          border: 1.5px solid #d1d5db !important;
          padding: 7px 10px !important;
          border-radius: 5px !important;
          transition: border-color 0.2s !important;
          box-sizing: border-box !important;
          font-size: 14px !important;
        }
        
        .form-input:focus {
          outline: none !important;
          border-color: #f97316 !important;
        }
        
        @media (max-width: 640px) {
          .form-input {
            padding: 6px 8px !important;
            font-size: 12px !important;
          }
        }
      `}</style>

      <div className="modal-overlay" onClick={handleBackdropClick}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="modal-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <TwoWheelerIcon sx={{ fontSize: 18 }} />
              </div>
              <div>
                <h2 style={{ fontSize: '15px', fontWeight: 'bold', margin: 0, lineHeight: 1.2 }}>Book Your Ride</h2>
                <p style={{ fontSize: '11px', opacity: 0.9, margin: 0, lineHeight: 1.2 }}>{vehicleName}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              type="button"
            >
              <CloseIcon sx={{ fontSize: 16 }} />
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Messages */}
            {success && (
              <div style={{
                marginBottom: '10px',
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                color: '#15803d',
                padding: '8px 10px',
                borderRadius: '5px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <span>✓</span>
                <span>Booking confirmed! Check your email.</span>
              </div>
            )}

            {error && (
              <div style={{
                marginBottom: '10px',
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#dc2626',
                padding: '8px 10px',
                borderRadius: '5px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <span>⚠</span>
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Pricing Tier Selection */}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '5px' }}>
                  Select Pricing Plan
                </label>
                <div className="pricing-grid">
                  {pricingTiers.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => handleTierSelect(tier.id)}
                      className={`pricing-card ${formData.pricingTier === tier.id ? 'active' : ''}`}
                    >
                      <div style={{ fontSize: '8px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', marginBottom: '2px' }}>
                        {tier.label}
                      </div>
                      <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#f97316' }}>₹{tier.rate}</div>
                      <div style={{ fontSize: '8px', color: '#9ca3af' }}>{tier.unit}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                  Duration ({selectedTier.label})
                </label>
                <input
                  type="number"
                  name="duration"
                  className="form-input"
                  placeholder={`Number of ${selectedTier.label.toLowerCase()}s`}
                  value={formData.duration}
                  onChange={handleInputChange}
                  min="1"
                  max={formData.pricingTier === 'hourly' ? '24' : formData.pricingTier === 'daily' ? '30' : '12'}
                  required
                />
              </div>

              {/* Name */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                  <PersonIcon sx={{ fontSize: 14 }} />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email + Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '5px' }}>
                    <EmailIcon sx={{ fontSize: 14 }} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                    <PhoneIcon sx={{ fontSize: 14 }} />
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                  <LocationOnIcon sx={{ fontSize: 14 }} />
                  Pickup Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="form-input"
                  placeholder="Enter pickup location"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Date & Time */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '5px' }}>
                    <EventIcon sx={{ fontSize: 14 }} />
                    Date
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    className="form-input"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    min={minDate}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                    <AccessTimeIcon sx={{ fontSize: 16 }} />
                    Time
                  </label>
                  <input
                    type="time"
                    name="pickupTime"
                    className="form-input"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Total Amount */}
              <div style={{
                background: 'linear-gradient(to bottom right, #fff7ed, #ffedd5)',
                border: '1.5px solid #fed7aa',
                padding: '10px',
                borderRadius: '5px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#374151' }}>Total Amount</span>
                  <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#f97316' }}>
                    ₹{(calculateAmount() / 100).toFixed(0)}
                  </div>
                </div>
                <p style={{ fontSize: '11px', color: '#6b7280', margin: 0 }}>
                  {formData.duration} {selectedTier.label.toLowerCase()}{formData.duration > 1 ? 's' : ''} × ₹{selectedTier.rate} {selectedTier.unit}
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  background: 'linear-gradient(to right, #ea580c, #f97316)',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = 'linear-gradient(to right, #c2410c, #ea580c)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #ea580c, #f97316)'
                }}
              >
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></span>
                    Processing...
                  </span>
                ) : (
                  "Proceed to Payment"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )

  return createPortal(modalContent, document.body)
}
