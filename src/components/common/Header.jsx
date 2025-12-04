"use client"
import { useState } from "react"
import Link from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navStyle = {
    backgroundColor: "#fff",
    borderBottom: "2px solid #FF5722",
    padding: "16px 0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  }

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#FF5722",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "transform 0.3s ease",
  }

  const drawerOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: mobileOpen ? "rgba(0,0,0,0.5)" : "transparent",
    zIndex: mobileOpen ? 98 : -1,
    transition: "background-color 0.3s ease",
    pointerEvents: mobileOpen ? "auto" : "none",
  }

  const navLinksStyle = {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    right: mobileOpen ? 0 : "-100%",
    bottom: 0,
    width: "85%",
    maxWidth: "300px",
    backgroundColor: "#fff",
    padding: "80px 20px 20px 20px",
    gap: "20px",
    zIndex: 99,
    transition: "right 0.3s ease-in-out",
    overflowY: "auto",
    boxShadow: mobileOpen ? "-4px 0 12px rgba(0,0,0,0.15)" : "none",
  }

  // Desktop navigation styles
  const desktopNavStyle = {
    display: "flex",
    gap: "35px",
    alignItems: "center",
  }

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontSize: "15px",
    fontWeight: "500",
    padding: "8px 0",
    transition: "color 0.3s ease, border-bottom 0.3s ease",
    borderBottom: "2px solid transparent",
    cursor: "pointer",
  }

  const mobileContactStyle = {
    borderTop: "1px solid #eee",
    paddingTop: "20px",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  }

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#666",
    fontSize: "14px",
    textDecoration: "none",
  }

  const menuButtonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
    zIndex: 101,
  }

  const closeButtonStyle = {
    position: "absolute",
    top: "16px",
    right: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    zIndex: 102,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const desktopOnlyStyle = {
    display: window.innerWidth < 768 ? "none" : "flex",
  }

  const mobileOnlyStyle = {
    display: window.innerWidth < 768 ? "block" : "none",
  }

  return (
    <>
      <nav style={navStyle}>
        <div style={containerStyle}>
          <Link href="/" style={logoStyle}>
            <span>🏍️</span>
            <span style={{ letterSpacing: "-0.5px" }}>ZupRides</span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ ...desktopNavStyle, ...desktopOnlyStyle }}>
            <Link
              href="/"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#FF5722")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              Home
            </Link>
            <Link
              href="/vehicles"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#FF5722")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              Vehicles
            </Link>
            <Link
              href="/about"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#FF5722")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              About
            </Link>
            <Link
              href="/contact"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#FF5722")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ ...menuButtonStyle, ...mobileOnlyStyle }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <CloseIcon style={{ fontSize: "28px", color: "#FF5722" }} />
            ) : (
              <MenuIcon style={{ fontSize: "28px", color: "#FF5722" }} />
            )}
          </button>
        </div>
      </nav>

      {/* Drawer Overlay */}
      <div style={drawerOverlayStyle} onClick={() => setMobileOpen(false)} />

      {/* Mobile Navigation Drawer (Right-to-Left) */}
      <div style={navLinksStyle}>
        <button onClick={() => setMobileOpen(false)} style={closeButtonStyle} aria-label="Close menu">
          <CloseIcon style={{ fontSize: "28px", color: "#FF5722" }} />
        </button>

        <Link
          href="/"
          style={{ ...linkStyle, fontSize: "16px", fontWeight: "600" }}
          onClick={() => setMobileOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/vehicles"
          style={{ ...linkStyle, fontSize: "16px", fontWeight: "600" }}
          onClick={() => setMobileOpen(false)}
        >
          Vehicles
        </Link>
        <Link
          href="/about"
          style={{ ...linkStyle, fontSize: "16px", fontWeight: "600" }}
          onClick={() => setMobileOpen(false)}
        >
          About
        </Link>
        <Link
          href="/contact"
          style={{ ...linkStyle, fontSize: "16px", fontWeight: "600" }}
          onClick={() => setMobileOpen(false)}
        >
          Contact
        </Link>

        {/* Mobile Contact Info */}
        <div style={mobileContactStyle}>
          <a href="tel:+919798146740" style={contactItemStyle}>
            <PhoneIcon style={{ fontSize: "18px", color: "#FF5722" }} />
            +91 97981 46740
          </a>
          <a href="mailto:support@zuprides.in" style={contactItemStyle}>
            <EmailIcon style={{ fontSize: "18px", color: "#FF5722" }} />
            support@zuprides.in
          </a>
        </div>
      </div>
    </>
  )
}
