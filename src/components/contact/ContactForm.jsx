"use client"
import { useState } from "react"
import SendIcon from "@mui/icons-material/Send"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  }

  const inputStyle = {
    padding: "12px 15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    fontFamily: "inherit",
  }

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
    minHeight: "120px",
  }

  const buttonStyle = {
    padding: "12px 25px",
    backgroundColor: "#FF5722",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "background-color 0.3s",
  }

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#1a1a1a" }}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
          placeholder="Your full name"
        />
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#1a1a1a" }}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#1a1a1a" }}>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          placeholder="+91 98765 43210"
        />
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#1a1a1a" }}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          required
          placeholder="Tell us how we can help..."
        />
      </div>

      <button type="submit" style={buttonStyle}>
        <SendIcon style={{ fontSize: "18px" }} />
        Send Message
      </button>
    </form>
  )
}
