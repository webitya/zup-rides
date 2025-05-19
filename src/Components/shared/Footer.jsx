import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">AdityaWeb.</h2>
            <p className="mb-6">
              We are Education, create your passion and inspiration. And hope success will come for your dream. Please
              send email and get latest news.
            </p>
            <p className="text-sm">©2023 ADITYAWEB POWERED BY ADITYA</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-blue-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-blue-300 transition-colors">
                  Popular Courses
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-blue-300 transition-colors">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses/wordpress-development" className="hover:text-blue-300 transition-colors">
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link href="/courses/javascript" className="hover:text-blue-300 transition-colors">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="/courses/basic-photoshop" className="hover:text-blue-300 transition-colors">
                  Basic Photoshop
                </Link>
              </li>
              <li>
                <Link href="/courses/mastering-php" className="hover:text-blue-300 transition-colors">
                  Mastering PHP
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <form className="mb-6">
              <input
                type="email"
                placeholder="Your Email..."
                className="w-full px-4 py-2 rounded bg-blue-800 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded font-semibold"
              >
                SUBSCRIBE
              </button>
            </form>
            <div className="flex space-x-4">
              <Link href="/orders" className="text-sm hover:text-blue-300 transition-colors">
                ORDERS
              </Link>
              <Link href="/terms" className="text-sm hover:text-blue-300 transition-colors">
                TERMS
              </Link>
              <Link href="/report" className="text-sm hover:text-blue-300 transition-colors">
                REPORT PROBLEM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
