'use client';

import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 tracking-wide text-white">ZupRides</h2>
          <p className="text-sm text-white/90">
            Your trusted partner for bike and car rentals. Explore new adventures with us and make unforgettable memories!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><Link href="/" className="hover:underline hover:text-white">Home</Link></li>
            <li><Link href="/vehicles" className="hover:underline hover:text-white">Vehicles</Link></li>
            <li><Link href="/about_us" className="hover:underline hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline hover:text-white">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">Contact</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>📍 Amar chowk , harihar toli chutia ranchi , jharkhand</li>
            <li>📞 +91 97981 46740</li>
            <li>✉️ support@zuprides.in</li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
              <Instagram className="text-white" size={24} />
            </a>
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
              <Facebook className="text-white" size={24} />
            </a>
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
              <Twitter className="text-white" size={24} />
            </a>
          </div>

          {/* Newsletter */}
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded-xl bg-white/10 placeholder-white text-white backdrop-blur-md focus:outline-none border border-white/30"
            />
            <button
              type="submit"
              className="bg-white text-pink-600 font-semibold py-2 rounded-full hover:scale-105 transition transform"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 my-10"></div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-white/70">
        © {new Date().getFullYear()} ZupRides. All Rights Reserved.
      </div>
    </footer>
  );
}
