"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect screen width safely on client
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white border-b-2 border-orange-600 shadow-md sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-orange-600">
            <span>🏍️</span>
            <span className="-tracking-[0.5px]">ZupRides</span>
          </Link>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <div className="hidden md:flex gap-10 items-center">
              <Link href="/" className="text-gray-800 font-medium hover:text-orange-600">
                Home
              </Link>
              <Link href="/vehicles" className="text-gray-800 font-medium hover:text-orange-600">
                Vehicles
              </Link>
              <Link href="/about" className="text-gray-800 font-medium hover:text-orange-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-800 font-medium hover:text-orange-600">
                Contact
              </Link>
            </div>
          )}

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2"
            >
              <MenuIcon className="text-orange-600" fontSize="large" />
            </button>
          )}
        </div>
      </nav>

      {/* OVERLAY */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl p-6 z-50 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 p-2"
        >
          <CloseIcon className="text-orange-600" fontSize="large" />
        </button>

        <div className="mt-12 flex flex-col gap-6 text-lg font-semibold">
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-gray-800 hover:text-orange-600">
            Home
          </Link>
          <Link href="/vehicles" onClick={() => setMobileOpen(false)} className="text-gray-800 hover:text-orange-600">
            Vehicles
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="text-gray-800 hover:text-orange-600">
            About
          </Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-gray-800 hover:text-orange-600">
            Contact
          </Link>
        </div>

        {/* CONTACT INFO */}
        <div className="mt-10 border-t pt-5 flex flex-col gap-4">
          <a href="tel:+919798146740" className="flex items-center gap-3 text-gray-600">
            <PhoneIcon className="text-orange-600" />
            +91 97981 46740
          </a>

          <a href="mailto:support@zuprides.in" className="flex items-center gap-3 text-gray-600">
            <EmailIcon className="text-orange-600" />
            support@zuprides.in
          </a>
        </div>
      </div>
    </>
  )
}
