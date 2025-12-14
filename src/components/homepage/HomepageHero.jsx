"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler"
import SpeedIcon from "@mui/icons-material/Speed"

export default function HomepageHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 text-white overflow-hidden min-h-[90vh] flex items-center py-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1400ms' }}></div>
      </div>

      {/* Floating Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <DirectionsBikeIcon
          className="absolute top-20 right-20 text-white/10 animate-float"
          style={{ fontSize: '120px', animationDelay: '0s' }}
        />
        <DirectionsCarIcon
          className="absolute bottom-32 left-16 text-white/10 animate-float"
          style={{ fontSize: '100px', animationDelay: '1s' }}
        />
        <TwoWheelerIcon
          className="absolute top-1/3 left-1/4 text-white/10 animate-float"
          style={{ fontSize: '80px', animationDelay: '2s' }}
        />
        <SpeedIcon
          className="absolute bottom-1/4 right-1/3 text-white/10 animate-float"
          style={{ fontSize: '90px', animationDelay: '1.5s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-5 py-8 md:py-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge - Hidden on mobile */}
          <div
            className={`hidden md:inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/30 shadow-lg transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
          >
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></span>
            <span className="text-sm font-semibold tracking-wide">Trusted by 1000+ Riders in Ranchi</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-3xl md:text-5xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <span className="block mb-1 md:mb-2">Discover Ranchi</span>
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
              Like Never Before!
            </span>
          </h1>

          {/* Subheading - Hidden on mobile */}
          <p
            className={`hidden md:block text-lg md:text-2xl lg:text-3xl mb-10 opacity-95 leading-relaxed max-w-3xl mx-auto font-light px-4 transition-all duration-700 delay-200 ${mounted ? 'opacity-95 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Rent premium bikes and scooters from just{' '}
            <span className="font-bold text-yellow-300 bg-white/10 px-3 py-1 rounded-lg">₹399</span>
            {' '}and explore the city at your own pace
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex gap-3 md:gap-4 justify-center flex-wrap mb-6 md:mb-12 px-4 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <Link
              href="/vehicles"
              className="group bg-white text-orange-600 px-5 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-full transition-all duration-300 hover:bg-yellow-50 hover:scale-110 hover:shadow-2xl shadow-xl flex items-center gap-2 md:gap-3 hover:gap-4"
            >
              <DirectionsBikeIcon className="text-xl md:text-2xl group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Book Your Ride Now</span>
              <span className="sm:hidden">Book Now</span>
              <span className="group-hover:translate-x-1 transition-transform text-lg md:text-xl">→</span>
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 text-white border-2 border-white px-5 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 backdrop-blur-md shadow-lg hover:shadow-2xl"
            >
              Contact Us
            </Link>
          </div>

          {/* Feature Cards */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-2 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <div className="group bg-white/15 backdrop-blur-md p-5 md:p-7 rounded-2xl border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg hover:-translate-y-2">
              <LocalOfferIcon className="text-4xl md:text-6xl text-yellow-300 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <div className="text-2xl md:text-3xl font-bold mb-1">₹399</div>
              <div className="text-sm md:text-base opacity-90 font-medium">Starting Price</div>
            </div>

            <div className="group bg-white/15 backdrop-blur-md p-5 md:p-7 rounded-2xl border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg hover:-translate-y-2">
              <DirectionsBikeIcon className="text-4xl md:text-6xl text-yellow-300 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <div className="text-2xl md:text-3xl font-bold mb-1">12+</div>
              <div className="text-sm md:text-base opacity-90 font-medium">Quality Bikes</div>
            </div>

            <div className="group bg-white/15 backdrop-blur-md p-5 md:p-7 rounded-2xl border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg hover:-translate-y-2">
              <VerifiedUserIcon className="text-4xl md:text-6xl text-yellow-300 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <div className="text-2xl md:text-3xl font-bold mb-1">Free</div>
              <div className="text-sm md:text-base opacity-90 font-medium">Helmets Included</div>
            </div>

            <div className="group bg-white/15 backdrop-blur-md p-5 md:p-7 rounded-2xl border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg hover:-translate-y-2">
              <AccessTimeIcon className="text-4xl md:text-6xl text-yellow-300 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <div className="text-2xl md:text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm md:text-base opacity-90 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
