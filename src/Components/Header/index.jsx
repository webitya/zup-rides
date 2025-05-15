'use client';

import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DrawerEl from "../DrawerEl";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getLinkClasses = (href) => {
    const isActive = pathname === href;
    return `relative px-2 py-1 text-base md:text-lg font-semibold transition-all duration-300 ease-in-out
      ${
        isActive
          ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-400"
          : "text-white/80 hover:text-white"
      }
    `;
  };

  return (
    <header className="bg-gradient-to-r from-teal-800 via-teal-700 to-teal-600 shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="flex justify-between items-center px-5 py-3 md:px-8 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="Zup Rides Logo"
            className="h-9 w-9 rounded-full object-cover border border-white"
          />
          <div className="text-2xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-white">
            Zup Rides
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link href="/about_us" className={getLinkClasses("/about_us")}>
            About Us
          </Link>
          <Link href="/vehicles" className={getLinkClasses("/vehicles")}>
            Vehicles
          </Link>
          <Link href="/contact" className={getLinkClasses("/contact")}>
            Contact
          </Link>

          {/* Call Button */}
          <a
            href="tel:+919798146740"
            className="ml-4 px-4 py-2 rounded-full bg-white text-teal-700 font-bold shadow-md hover:shadow-lg hover:text-white hover:bg-teal-500 transition duration-300 hover:scale-105 border border-white"
          >
            📞 Call Now
          </a>
        </nav>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Menu size={28} className="text-white" />
          </button>
        </div>
      </div>

      {/* Drawer for Mobile Menu */}
      <DrawerEl isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}
