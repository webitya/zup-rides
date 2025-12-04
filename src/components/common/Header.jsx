"use client"
import { useState } from "react"
import Link from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navStyle = {
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
    padding: "15px 20px",
    position: "sticky",
    top: 0,
    zIndex: 100,
  }

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#FF5722",
    textDecoration: "none",
  }

  const navLinksStyle = {
    display: mobileOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: "20px",
    gap: "10px",
    zIndex: 99,
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  }

  const desktopNavStyle = {
    display: "flex",
    gap: "30px",
  }

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontSize: "15px",
    padding: "8px 0",
    transition: "color 0.3s",
  }

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link href="/" style={logoStyle}>
          🏍️ ZupRides
        </Link>

        <div style={desktopNavStyle}>
          <Link href="/" style={linkStyle}>
            Home
          </Link>
          <Link href="/vehicles" style={linkStyle}>
            Vehicles
          </Link>
          <Link href="/about" style={linkStyle}>
            About
          </Link>
          <Link href="/contact" style={linkStyle}>
            Contact
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "block" }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div style={navLinksStyle}>
        <Link href="/" style={linkStyle} onClick={() => setMobileOpen(false)}>
          Home
        </Link>
        <Link href="/vehicles" style={linkStyle} onClick={() => setMobileOpen(false)}>
          Vehicles
        </Link>
        <Link href="/about" style={linkStyle} onClick={() => setMobileOpen(false)}>
          About
        </Link>
        <Link href="/contact" style={linkStyle} onClick={() => setMobileOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  )
}
