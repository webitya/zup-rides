"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function PaymentCallback() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get("bookingId")
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    // In production, verify payment status from your backend
    const verifyPayment = async () => {
      try {
        // Simulate payment verification
        setTimeout(() => {
          setStatus("success")
        }, 2000)
      } catch (error) {
        console.error("[v0] Payment verification error:", error)
        setStatus("failed")
      }
    }

    verifyPayment()
  }, [bookingId])

  const containerStyle = {
    maxWidth: "600px",
    margin: "100px auto",
    padding: "40px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  }

  const messageContainerStyle = {
    padding: "30px",
    borderRadius: "10px",
    marginBottom: "20px",
  }

  const successStyle = {
    ...messageContainerStyle,
    backgroundColor: "#d4edda",
    borderLeft: "4px solid #4caf50",
  }

  const failureStyle = {
    ...messageContainerStyle,
    backgroundColor: "#f8d7da",
    borderLeft: "4px solid #dc3545",
  }

  const loadingStyle = {
    ...messageContainerStyle,
    backgroundColor: "#e3f2fd",
    borderLeft: "4px solid #2196f3",
  }

  const buttonStyle = {
    backgroundColor: "#FF5722",
    color: "#fff",
    padding: "12px 30px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "20px",
  }

  return (
    <div style={containerStyle}>
      {status === "loading" && (
        <div style={loadingStyle}>
          <h1>Processing Payment...</h1>
          <p>Please wait while we confirm your payment.</p>
        </div>
      )}

      {status === "success" && (
        <div style={successStyle}>
          <h1>Payment Successful!</h1>
          <p>Your booking (ID: {bookingId}) has been confirmed.</p>
          <p>Check your email for booking details and vehicle pickup information.</p>
          <Link href="/" style={buttonStyle}>
            Back to Home
          </Link>
        </div>
      )}

      {status === "failed" && (
        <div style={failureStyle}>
          <h1>Payment Failed</h1>
          <p>Your payment could not be processed. Please try again.</p>
          <Link href="/" style={buttonStyle}>
            Try Again
          </Link>
        </div>
      )}
    </div>
  )
}
