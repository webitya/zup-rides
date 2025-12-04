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
    amount: vehiclePrice || 299,
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const calculateAmount = () => {
    const basePrice = vehiclePrice || 299
    const dailyRate = basePrice
    const hourlyRate = basePrice / 24

    const totalDays = Number.parseInt(formData.durationDays) * dailyRate
    const totalHours = Number.parseInt(formData.durationHours) * hourlyRate

    return Math.round((totalDays + totalHours) * 100)
  }

  const handleBooking = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const amount = calculateAmount()

      // Send booking to backend
      const bookingResponse = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          vehicle: vehicleName,
          amount: amount / 100,
        }),
      })

      if (!bookingResponse.ok) {
        throw new Error("Failed to create booking")
      }

      const bookingData = await bookingResponse.json()

      // Initialize PhonePay payment
      await initiatePhonePay(amount, bookingData.bookingId)
    } catch (err) {
      console.error("[v0] Booking error:", err)
      setError(err.message || "Booking failed. Please try again.")
      setLoading(false)
    }
  }

  const initiatePhonePay = async (amount, bookingId) => {
    try {
      const paymentResponse = await fetch("/api/phonepe-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount,
          bookingId: bookingId,
          phone: formData.phone,
          email: formData.email,
          name: formData.name,
        }),
      })

      const paymentData = await paymentResponse.json()

      if (paymentData.success) {
        // Redirect to PhonePay payment page
        if (paymentData.redirectUrl) {
          window.location.href = paymentData.redirectUrl
        } else {
          setSuccess(true)
          setLoading(false)
          setTimeout(() => {
            onClose()
            setSuccess(false)
            setFormData({
              name: "",
              email: "",
              phone: "",
              address: "",
              pickupDate: "",
              durationDays: 1,
              durationHours: 0,
              amount: vehiclePrice || 299,
            })
          }, 2000)
        }
      } else {
        throw new Error(paymentData.error || "Payment initiation failed")
      }
    } catch (err) {
      console.error("[v0] PhonePay error:", err)
      setError("Payment initiation failed: " + err.message)
      setLoading(false)
    }
  }

  const modalStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    overflow: "auto",
    padding: "10px",
  }

  const modalContentStyle = {
    backgroundColor: "#fff",
    margin: "10px auto",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "90vw",
    width: "100%",
    position: "relative",
    animation: "slideUp 0.3s",
    maxHeight: "90vh",
    overflowY: "auto",
  }

  const closeButtonStyle = {
    position: "absolute",
    top: "12px",
    right: "12px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#666",
    padding: "4px",
  }

  const formGroupStyle = {
    marginBottom: "15px",
  }

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
    color: "#1a1a1a",
    fontSize: "13px",
  }

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
  }

  const rowStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  }

  const amountDisplayStyle = {
    backgroundColor: "#f5f5f5",
    padding: "12px",
    borderRadius: "5px",
    marginBottom: "15px",
    textAlign: "center",
  }

  const amountStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#FF5722",
  }

  const submitButtonStyle = {
    width: "100%",
    padding: "11px",
    backgroundColor: "#FF5722",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.7 : 1,
    transition: "background-color 0.3s",
  }

  const successMessageStyle = {
    backgroundColor: "#d4edda",
    color: "#155724",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "12px",
    textAlign: "center",
    fontSize: "13px",
  }

  const errorMessageStyle = {
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "12px",
    textAlign: "center",
    fontSize: "13px",
  }

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#1a1a1a",
    paddingRight: "30px",
  }

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @media (max-width: 480px) {
          .booking-modal-content {
            max-width: 95vw !important;
          }
        }
      `}</style>

      <div style={modalStyle} onClick={onClose}>
        <div style={modalContentStyle} onClick={(e) => e.stopPropagation()} className="booking-modal-content">
          <button style={closeButtonStyle} onClick={onClose} aria-label="Close modal">
            <CloseIcon style={{ fontSize: "20px" }} />
          </button>

          <h2 style={titleStyle}>Book Your Ride</h2>

          {success && <div style={successMessageStyle}>Booking confirmed! Check your email for details.</div>}

          {error && <div style={errorMessageStyle}>{error}</div>}

          <form onSubmit={handleBooking}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={inputStyle}
                placeholder="Your name"
                required
              />
            </div>

            <div style={rowStyle}>
              <div style={formGroupStyle}>
                <label style={labelStyle}>
                  <EmailIcon style={{ fontSize: "14px", marginRight: "4px", verticalAlign: "middle" }} />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>
                  <PhoneIcon style={{ fontSize: "14px", marginRight: "4px", verticalAlign: "middle" }} />
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="9876543210"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>
                <LocationOnIcon style={{ fontSize: "14px", marginRight: "4px", verticalAlign: "middle" }} />
                Pickup Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                style={inputStyle}
                placeholder="Enter address"
                required
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>
                <EventIcon style={{ fontSize: "14px", marginRight: "4px", verticalAlign: "middle" }} />
                Pickup Date *
              </label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={rowStyle}>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Days</label>
                <input
                  type="number"
                  name="durationDays"
                  value={formData.durationDays}
                  onChange={handleInputChange}
                  style={inputStyle}
                  min="0"
                />
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>Hours</label>
                <input
                  type="number"
                  name="durationHours"
                  value={formData.durationHours}
                  onChange={handleInputChange}
                  style={inputStyle}
                  min="0"
                  max="23"
                />
              </div>
            </div>

            <div style={amountDisplayStyle}>
              <div style={{ fontSize: "12px", marginBottom: "6px", color: "#666" }}>Total Amount</div>
              <div style={amountStyle}>₹{(calculateAmount() / 100).toFixed(2)}</div>
            </div>

            <button type="submit" style={submitButtonStyle} disabled={loading}>
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
