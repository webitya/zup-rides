"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // import this for active link detection
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // detect current page

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper to add active class
  const getLinkClasses = (href) => {
    return `text-lg font-medium ${
      pathname === href ? "text-green-700" : "text-green-800"
    } hover:text-green-600 transition-colors duration-300`;
  };

  return (
    <header className="bg-green-200 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-800">
          RideRental
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-green-900 font-semibold">
          <Link href="/" className={getLinkClasses("/")}>Home</Link>
          <Link href="/about_us" className={getLinkClasses("/about_us")}>About us</Link>
          <Link href="/vehicles" className={getLinkClasses("/vehicles")}>Vehicles</Link>
          <Link href="/about" className={getLinkClasses("/about")}>About</Link>
          <Link href="/contact" className={getLinkClasses("/contact")}>Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Menu size={32} className="text-green-800" />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-100 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Cross Icon */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <X size={32} className="text-green-800" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-start space-y-6 p-6">
          <Link href="/" onClick={toggleMenu} className={getLinkClasses("/")}>Home</Link>
          <Link href="/about_us" onClick={toggleMenu} className={getLinkClasses("/about_us")}>About_us</Link>

        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
