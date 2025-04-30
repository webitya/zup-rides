'use client';

import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-400 via-emerald-500 to-emerald-700 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 text-white">ZupRides</h2>
          <p className="text-sm">
            Your trusted partner for bike and car rentals. Explore new adventures with us and make unforgettable memories!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-green-200 transition">Home</Link></li>
            <li><Link href="/vehicles" className="hover:text-green-200 transition">Vehicles</Link></li>
            <li><Link href="/about-us" className="hover:text-green-200 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-green-200 transition">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-green-200 transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Street, Your City</li>
            <li>📞 +91 9876543210</li>
            <li>✉️ support@zuprides.com</li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-green-200 transition">
              <Instagram size={28} />
            </a>
            <a href="#" className="hover:text-green-200 transition">
              <Facebook size={28} />
            </a>
            <a href="#" className="hover:text-green-200 transition">
              <Twitter size={28} />
            </a>
          </div>

          {/* Newsletter */}
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md bg-white placeholder-green-600 text-green-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition"
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
        © {new Date().getFullYear()} ZupRides. All Rights Reserved.
      </div>
    </footer>
  );
}
