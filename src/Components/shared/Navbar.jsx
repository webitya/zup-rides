"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, Close, Email, Phone } from "@mui/icons-material"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="bg-blue-900 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Email className="h-4 w-4 mr-2" />
              <span className="text-sm">Info@AdityaWeb.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+(333) 052 39876</span>
            </div>
          </div>
          <div>
            <span className="text-sm">Have any question?</span>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 w-full ${scrolled ? "bg-white shadow-md" : "bg-transparent"} transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              AdityaWeb
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors">
                HOME
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-blue-600 transition-colors">
                ABOUT
              </Link>
              <Link href="/courses" className="text-gray-800 hover:text-blue-600 transition-colors">
                COURSES
              </Link>
              <Link href="/events" className="text-gray-800 hover:text-blue-600 transition-colors">
                EVENTS
              </Link>
              <Link href="/blogs" className="text-gray-800 hover:text-blue-600 transition-colors">
                BLOG
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition-colors">
                CONTACT
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/register"
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors"
              >
                Register
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            </div>

            <button className="md:hidden" onClick={toggleMenu}>
              {isOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col py-4 px-4 space-y-4">
              <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                HOME
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                ABOUT
              </Link>
              <Link
                href="/courses"
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                COURSES
              </Link>
              <Link href="/events" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                EVENTS
              </Link>
              <Link href="/blogs" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
                BLOG
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                CONTACT
              </Link>
              <div className="flex space-x-4 pt-2">
                <Link
                  href="/register"
                  className="flex-1 px-4 py-2 text-center text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  className="flex-1 px-4 py-2 text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  )
}
