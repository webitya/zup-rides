"use client"

import { useState } from "react"
import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"
import PaymentIcon from "@mui/icons-material/Payment"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee"
import MessageIcon from "@mui/icons-material/Message"
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import PinIcon from "@mui/icons-material/Pin"

export default function PayNowPage() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        vehicleName: "",
        vehicleNumber: "",
        startDate: "",
        endDate: "",
        amount: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Validate dates
            const start = new Date(formData.startDate)
            const end = new Date(formData.endDate)
            const now = new Date()

            if (start < now) {
                alert("Start date cannot be in the past.")
                setLoading(false)
                return
            }

            if (end <= start) {
                alert("End date must be after start date.")
                setLoading(false)
                return
            }

            // Convert amount to paise
            const amountInPaise = Math.round(parseFloat(formData.amount) * 100)

            // Generate a unique booking ID
            const bookingId = `BOOK-${Date.now()}`

            // Directly initiate PhonePe payment
            const paymentRes = await fetch("/api/phonepe-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: amountInPaise,
                    bookingId: bookingId,
                    phone: formData.phone,
                    email: formData.email,
                    name: formData.name,
                    vehicleName: formData.vehicleName,
                    vehicleNumber: formData.vehicleNumber,
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                    message: formData.message,
                }),
            })

            const paymentData = await paymentRes.json()

            if (paymentData.success && paymentData.redirectUrl) {
                // Redirect to PhonePe payment page
                window.location.href = paymentData.redirectUrl
            } else {
                alert(`Payment initiation failed: ${paymentData.error || "Unknown error"}`)
                setLoading(false)
            }
        } catch (error) {
            console.error("Payment error:", error)
            alert("An error occurred. Please try again.")
            setLoading(false)
        }
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12 px-4">
                <div className="max-w-xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-3">
                            <PaymentIcon className="text-white" sx={{ fontSize: 32 }} />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-1">Pay Now</h1>
                        <p className="text-gray-600 text-sm">Complete your payment securely with PhonePe</p>
                    </div>

                    {/* Payment Form */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name & Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                        <PersonIcon className="inline mr-1 text-green-500" sx={{ fontSize: 16 }} />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                        <EmailIcon className="inline mr-1 text-green-500" sx={{ fontSize: 16 }} />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            {/* Phone & Vehicle Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                        <PhoneIcon className="inline mr-1 text-green-500" sx={{ fontSize: 16 }} />
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        pattern="[0-9]{10}"
                                        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="10-digit number"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                        <DirectionsBikeIcon className="inline mr-1 text-green-500" sx={{ fontSize: 16 }} />
                                        Vehicle Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="vehicleName"
                                        value={formData.vehicleName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="e.g., NTORQ 125"
                                    />
                                </div>
                            </div>

                            {/* Vehicle Number (Optional) & Dates */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                        <PinIcon className="inline mr-1 text-green-500" sx={{ fontSize: 16 }} />
                                        Vehicle Number (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="vehicleNumber"
                                        value={formData.vehicleNumber}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="e.g., UP16 AB 1234"
                                    />
                                </div>
                                <div className="hidden md:block"></div> {/* Spacer for alignment if needed, or just let it reflow */}
                            </div>

                            {/* Date Range */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                        <CalendarTodayIcon className="inline mr-1 text-green-500" sx={{ fontSize: 16 }} />
                                        Start Date & Time *
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        required
                                        min={new Date().toISOString().slice(0, 16)}
                                        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                        <CalendarTodayIcon className="inline mr-1 text-green-500" sx={{ fontSize: 16 }} />
                                        End Date & Time *
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        required
                                        min={formData.startDate || new Date().toISOString().slice(0, 16)}
                                        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            {/* Amount */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                    <CurrencyRupeeIcon className="inline mr-1 text-green-500" sx={{ fontSize: 16 }} />
                                    Amount (₹) *
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    required
                                    min="1"
                                    step="0.01"
                                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="Enter amount"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                    <MessageIcon className="inline mr-1 text-green-500" sx={{ fontSize: 16 }} />
                                    Message (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Additional notes..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-bold hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Securing Your Ride...
                                    </>
                                ) : (
                                    <>
                                        <PaymentIcon />
                                        Complete Booking
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Security Note */}
                        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-xs text-green-800 text-center">
                                🔒 Secure payment powered by PhonePe. Your information is encrypted and safe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
