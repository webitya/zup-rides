"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import PaymentIcon from "@mui/icons-material/Payment"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee"
import MessageIcon from "@mui/icons-material/Message"
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"

export default function PayNowPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        vehicleName: "",
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
            // Convert amount to paise
            const amountInPaise = Math.round(parseFloat(formData.amount) * 100)

            // Create booking first
            const bookingRes = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    vehicleType: formData.vehicleName,
                    startDate: new Date().toISOString(),
                    endDate: new Date().toISOString(),
                    totalAmount: formData.amount,
                }),
            })

            const bookingData = await bookingRes.json()

            if (!bookingData.success) {
                alert("Failed to create booking. Please try again.")
                setLoading(false)
                return
            }

            // Initiate PhonePe payment
            const paymentRes = await fetch("/api/phonepe-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: amountInPaise,
                    bookingId: bookingData.bookingId,
                    phone: formData.phone,
                    email: formData.email,
                    name: formData.name,
                }),
            })

            const paymentData = await paymentRes.json()

            if (paymentData.success && paymentData.redirectUrl) {
                // Redirect to PhonePe payment page
                window.location.href = paymentData.redirectUrl
            } else {
                alert("Payment initiation failed. Please try again.")
                setLoading(false)
            }
        } catch (error) {
            console.error("Payment error:", error)
            alert("An error occurred. Please try again.")
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4">
                        <PaymentIcon className="text-white" sx={{ fontSize: 40 }} />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Pay Now</h1>
                    <p className="text-gray-600">Complete your payment securely with PhonePe</p>
                </div>

                {/* Payment Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                <PersonIcon className="inline mr-2 text-orange-500" fontSize="small" />
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                <EmailIcon className="inline mr-2 text-orange-500" fontSize="small" />
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                <PhoneIcon className="inline mr-2 text-orange-500" fontSize="small" />
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                pattern="[0-9]{10}"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                placeholder="10-digit mobile number"
                            />
                        </div>

                        {/* Vehicle Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                <DirectionsBikeIcon className="inline mr-2 text-orange-500" fontSize="small" />
                                Vehicle Name *
                            </label>
                            <input
                                type="text"
                                name="vehicleName"
                                value={formData.vehicleName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                placeholder="e.g., NTORQ 125, R15, Activa"
                            />
                        </div>

                        {/* Amount */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                <CurrencyRupeeIcon className="inline mr-2 text-orange-500" fontSize="small" />
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                placeholder="Enter amount in rupees"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                <MessageIcon className="inline mr-2 text-orange-500" fontSize="small" />
                                Message (Optional)
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                                placeholder="Add any additional notes or requirements..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <PaymentIcon />
                                    Pay Now with PhonePe
                                </>
                            )}
                        </button>
                    </form>

                    {/* Security Note */}
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                        <p className="text-sm text-green-800 text-center">
                            🔒 Secure payment powered by PhonePe. Your payment information is encrypted and secure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
