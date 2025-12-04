export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 text-white overflow-hidden py-20 md:py-28">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-5 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <span className="text-sm font-semibold">🚀 Ranchi's Premier Rental Service</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          About <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">ZupRides</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed opacity-95 max-w-3xl mx-auto">
          Your trusted partner for bike and car rentals in Ranchi. We believe in providing premium vehicles with
          exceptional service at affordable prices. Discover the freedom to explore Ranchi at your own pace.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-2xl mx-auto">
          <div className="bg-white/15 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20">
            <div className="text-3xl md:text-4xl font-bold mb-1">1000+</div>
            <div className="text-xs md:text-sm opacity-90">Happy Customers</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20">
            <div className="text-3xl md:text-4xl font-bold mb-1">12+</div>
            <div className="text-xs md:text-sm opacity-90">Vehicles</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20">
            <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
            <div className="text-xs md:text-sm opacity-90">Support</div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
