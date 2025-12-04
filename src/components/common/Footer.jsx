import Link from "next/link"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-6">About ZupRides</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for bike and car rentals in Ranchi. Explore new adventures with premium vehicles and
              flexible plans tailored just for you.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-white transition-all duration-300">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-white transition-all duration-300">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-white transition-all duration-300">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-6">Quick Links</h3>
            <ul className="space-y-3">
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
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <LocationOnIcon className="text-orange-500 mt-0.5 shrink-0" fontSize="small" />
                <span>Amar Chowk, Harihar Toli, Chutia, Ranchi, Jharkhand</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <PhoneIcon className="text-orange-500 shrink-0" fontSize="small" />
                <span>+91 97981 46740</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <EmailIcon className="text-orange-500 shrink-0" fontSize="small" />
                <span>support@zuprides.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get latest offers and updates.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm border border-gray-700"
              />
              <button
                type="button"
                className="bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium shadow-lg shadow-orange-900/20"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-gray-500 text-sm">
            © 2025 ZupRides. All Rights Reserved. | Bike & Car Rentals in Ranchi
          </div>

          <div className="text-gray-500 text-sm flex items-center gap-1">
            <span>Website designed and maintained by</span>
            <a
              href="https://webitya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 font-medium transition-colors"
            >
              Webitya
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
