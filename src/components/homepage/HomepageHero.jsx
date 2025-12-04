import Link from "next/link"
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

export default function HomepageHero() {
  return (
    <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 text-white overflow-hidden min-h-[600px] md:min-h-[700px] md:max-h-[80vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-5 py-12 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs md:text-sm font-semibold">Trusted by 1000+ Riders in Ranchi</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight">
            Discover Ranchi
            <span className="block bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Like Never Before!
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-10 opacity-95 leading-relaxed max-w-3xl mx-auto font-light px-4">
            Rent premium bikes and scooters from just <span className="font-bold text-yellow-300">₹299</span> and explore the city at your own pace
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 md:gap-4 justify-center flex-wrap mb-8 md:mb-12 px-4">
            <Link
              href="/vehicles"
              className="group bg-white text-orange-600 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-full transition-all duration-300 hover:bg-yellow-50 hover:scale-105 hover:shadow-2xl shadow-xl flex items-center gap-2"
            >
              Book Your Ride Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white border-2 border-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 px-2">
            <div className="bg-white/15 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105">
              <LocalOfferIcon className="text-3xl md:text-5xl text-yellow-300 mb-2 md:mb-3" />
              <div className="text-xl md:text-2xl font-bold mb-1">₹299</div>
              <div className="text-xs md:text-sm opacity-90">Starting Price</div>
            </div>

            <div className="bg-white/15 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105">
              <DirectionsBikeIcon className="text-3xl md:text-5xl text-yellow-300 mb-2 md:mb-3" />
              <div className="text-xl md:text-2xl font-bold mb-1">12+</div>
              <div className="text-xs md:text-sm opacity-90">Quality Bikes</div>
            </div>

            <div className="bg-white/15 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105">
              <VerifiedUserIcon className="text-3xl md:text-5xl text-yellow-300 mb-2 md:mb-3" />
              <div className="text-xl md:text-2xl font-bold mb-1">Free</div>
              <div className="text-xs md:text-sm opacity-90">Helmets Included</div>
            </div>

            <div className="bg-white/15 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105">
              <AccessTimeIcon className="text-3xl md:text-5xl text-yellow-300 mb-2 md:mb-3" />
              <div className="text-xl md:text-2xl font-bold mb-1">24/7</div>
              <div className="text-xs md:text-sm opacity-90">Support Available</div>
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
    </div>
  )
}
