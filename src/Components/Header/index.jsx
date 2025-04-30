"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DrawerEl from "../DrawerEl";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClasses = (href) => {
    return `text-lg font-medium ${
      pathname === href ? "text-green-700" : "text-green-800"
    } hover:text-green-600 transition-colors duration-300`;
  };

  return (
    <header className="bg-green-200 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-800">Zup Rides</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-green-900 font-semibold">
          <Link href="/" className={getLinkClasses("/")}>Home</Link>
          <Link href="/about_us" className={getLinkClasses("/about_us")}>About us</Link>
          <Link href="/vehicles" className={getLinkClasses("/vehicles")}>Vehicles</Link>
          <Link href="/contact" className={getLinkClasses("/contact")}>Contact</Link>

          {/* Call Button */}
          <a
            href="tel:+918000000000"
            className="ml-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Call Now
          </a>
        </nav>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Menu size={32} className="text-green-800" />
          </button>
        </div>
      </div>

      {/* Drawer for Mobile Menu */}
      <DrawerEl isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}
