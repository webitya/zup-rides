"use client"

import MailOutlineIcon from "@mui/icons-material/MailOutline"

export default function Newsletter() {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#FF5722",
    color: "#fff",
  }

  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  }

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "15px",
  }

  const subtitleStyle = {
    fontSize: "16px",
    marginBottom: "30px",
    opacity: 0.95,
  }

  const formStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  }

  const inputStyle = {
    flex: 1,
    padding: "12px 15px",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
  }

  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#FF5722",
    border: "none",
    padding: "12px 30px",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s",
  }

  const privacyStyle = {
    fontSize: "12px",
    opacity: 0.85,
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <MailOutlineIcon style={{ fontSize: "40px" }} />
        </div>
        <h2 style={titleStyle}>Stay Updated</h2>
        <p style={subtitleStyle}>Get exclusive deals and updates about new vehicles in your inbox</p>

        <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email address" style={inputStyle} required />
          <button type="submit" style={buttonStyle}>
            Subscribe
          </button>
        </form>

        <p style={privacyStyle}>We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  )
}
