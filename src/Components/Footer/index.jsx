"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-200 text-green-900 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">RideRental</h2>
          <p className="text-sm">
            Your trusted partner for bike and car rentals. Explore new adventures with us!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-700 transition">Home</a></li>
            <li><a href="/bikes" className="hover:text-green-700 transition">Bikes</a></li>
            <li><a href="/pricing" className="hover:text-green-700 transition">Pricing</a></li>
            <li><a href="/about" className="hover:text-green-700 transition">About</a></li>
            <li><a href="/contact" className="hover:text-green-700 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Street, Your City</li>
            <li>📞 +91 9876543210</li>
            <li>✉️ support@riderental.com</li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-green-700 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-green-700 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-green-700 transition">
              <Twitter size={24} />
            </a>
          </div>

          {/* Newsletter */}
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-green-100 placeholder-green-600 text-green-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-green-300 my-8"></div>

      {/* Bottom Footer */}
      <div className="text-center text-sm">
        © {new Date().getFullYear()} RideRental. All Rights Reserved.
      </div>
    </footer>
  );
}
