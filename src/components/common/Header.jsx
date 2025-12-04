"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path) => pathname === path

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg  border-b border-orange-100/50"
            : "bg-white/95 backdrop-blur-sm  border-b border-gray-100/50"
          }`}
      >
        <div className="mx-auto px-5 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-none">
                Zup
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                  Rides
                </span>
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
                Premium Rentals
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <div className="hidden md:flex gap-1 items-center bg-gray-50/50 rounded-full px-2 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative px-5 py-2 rounded-full font-medium transition-all duration-300 ${isActive(link.path)
                      ? "text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-md shadow-orange-200"
                      : "text-gray-700 hover:text-orange-600 hover:bg-white/80"
                    }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full"></span>
                  )}
                </Link>
              ))}
              <div className="ml-2 pl-2 border-l border-gray-200">
                <Link
                  href="/vehicles"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-200/50 transition-all duration-300 flex items-center gap-2 group"
                >
                  <DirectionsBikeIcon className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                  Book Now
                </Link>
              </div>
            </div>
          )}

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-300 active:scale-95"
              aria-label="Open menu"
            >
              <MenuIcon fontSize="large" />
            </button>
          )}
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-sm z-50 md:hidden transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-all duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="p-6 flex justify-between items-center border-b border-gray-100 bg-gradient-to-r from-orange-50 to-white">
            <div className="flex items-center gap-2">
            
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Menu
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-300 active:scale-90"
              aria-label="Close menu"
            >
              <CloseIcon fontSize="medium" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-lg font-medium py-3.5 px-5 rounded-xl transition-all duration-300 flex items-center justify-between group ${isActive(link.path)
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md shadow-orange-200"
                    : "text-gray-800 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: mobileOpen ? "slideInRight 0.3s ease-out forwards" : "none",
                }}
              >
                <span className="flex items-center gap-3">
                  {isActive(link.path) && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                  {link.name}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${isActive(link.path)
                      ? "text-white translate-x-0"
                      : "text-gray-300 group-hover:text-orange-400 group-hover:translate-x-1"
                    }`}
                >
                  →
                </span>
              </Link>
            ))}

            {/* Book Now CTA in Mobile */}
            <Link
              href="/vehicles"
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3.5 px-5 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-200/50 group"
            >
              <DirectionsBikeIcon className="text-xl group-hover:rotate-12 transition-transform duration-300" />
              Book Your Ride
            </Link>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 bg-gradient-to-br from-gray-50 to-orange-50/30 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919798146740"
                className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-all duration-300 p-3 bg-white rounded-xl shadow-sm hover:shadow-md group"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon fontSize="small" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Call Us</div>
                  <div className="font-semibold">+91 97981 46740</div>
                </div>
              </a>

              <a
                href="mailto:support@zuprides.in"
                className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-all duration-300 p-3 bg-white rounded-xl shadow-sm hover:shadow-md group"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
                  <EmailIcon fontSize="small" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Email Us</div>
                  <div className="font-semibold text-sm">support@zuprides.in</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
