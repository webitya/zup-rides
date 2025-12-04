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
  const [scrolled, setScrolled] = useState(false)

  // Detect screen width and scroll position
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleResize()
    handleScroll()

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3 border-b border-orange-100"
            : "bg-white py-5 border-b border-transparent"
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">🏍️</span>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-none group-hover:text-orange-600 transition-colors">
                Zup<span className="text-orange-600 group-hover:text-gray-900 transition-colors">Rides</span>
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative text-gray-700 font-medium hover:text-orange-600 transition-colors py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                href="/vehicles"
                className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-orange-200"
              >
                Book Now
              </Link>
            </div>
          )}

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <MenuIcon fontSize="large" />
            </button>
          )}
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 md:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
            <span className="text-xl font-bold text-orange-600">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all"
            >
              <CloseIcon fontSize="medium" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-gray-800 py-3 px-4 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all flex items-center justify-between group"
              >
                {link.name}
                <span className="text-gray-300 group-hover:text-orange-400">→</span>
              </Link>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="tel:+919798146740" className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors p-3 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <PhoneIcon fontSize="small" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Call Us</div>
                  <div className="font-medium">+91 97981 46740</div>
                </div>
              </a>

              <a href="mailto:support@zuprides.in" className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors p-3 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <EmailIcon fontSize="small" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email Us</div>
                  <div className="font-medium">support@zuprides.in</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
