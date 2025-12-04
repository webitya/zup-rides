import Link from "next/link"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 pt-24 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* About Section */}
          <div className="group">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                <DirectionsBikeIcon className="text-orange-500 text-2xl" />
                <DirectionsCarIcon className="text-orange-500 text-2xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-white">Zup</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Rides</span>
            </h3>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">Premium Rentals</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for bike and car rentals in Ranchi. Explore new adventures with premium vehicles and
              flexible plans tailored just for you.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-orange-500 hover:from-orange-500 hover:to-orange-600 hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 group"
              >
                <FacebookIcon className="text-lg" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-orange-500 hover:from-orange-500 hover:to-orange-600 hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 group"
              >
                <InstagramIcon className="text-lg" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-orange-500 hover:from-orange-500 hover:to-orange-600 hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 group"
              >
                <TwitterIcon className="text-lg" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-orange-500 hover:from-orange-500 hover:to-orange-600 hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 group"
              >
                <LinkedInIcon className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Quick Links</span>
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-8">
              {[
                { name: "Home", path: "/" },
                { name: "Vehicles", path: "/vehicles" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms-conditions" },
                { name: "Refund Policy", path: "/refund-policy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm flex items-center gap-2 group hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Contact Us</span>
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></span>
            </h3>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-3 text-gray-400 text-sm group hover:text-gray-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center shrink-0 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                  <LocationOnIcon className="text-orange-500 group-hover:scale-110 transition-transform" fontSize="small" />
                </div>
                <span className="pt-1">Amar Chowk, Harihar Toli, Chutia, Ranchi, Jharkhand</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm group hover:text-gray-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center shrink-0 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                  <PhoneIcon className="text-orange-500 group-hover:scale-110 transition-transform" fontSize="small" />
                </div>
                <a href="tel:+919798146740" className="hover:text-orange-500 transition-colors">+91 97981 46740</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm group hover:text-gray-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center shrink-0 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                  <EmailIcon className="text-orange-500 group-hover:scale-110 transition-transform" fontSize="small" />
                </div>
                <a href="mailto:support@zuprides.in" className="hover:text-orange-500 transition-colors">support@zuprides.in</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Newsletter</span>
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></span>
            </h3>
            <p className="text-gray-400 text-sm mb-5 mt-8">Subscribe to get latest offers and updates.</p>
            <form className="flex flex-col gap-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm text-white px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm border border-gray-700/50 group-hover:border-orange-500/30 transition-all duration-300 placeholder:text-gray-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <button
                type="button"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3.5 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-sm font-semibold shadow-lg shadow-orange-900/30 hover:shadow-orange-500/40 hover:scale-105 active:scale-95"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-gray-700/50 pt-8 mt-8">
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <span>© 2025</span>
              <span className="text-orange-500 font-semibold">ZupRides</span>
              <span>•</span>
              <span>All Rights Reserved</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Bike & Car Rentals in Ranchi</span>
            </div>

            <div className="text-gray-400 text-sm flex items-center gap-2">
              <span>Designed by</span>
              <a
                href="https://webitya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-1 group"
              >
                Webitya
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
