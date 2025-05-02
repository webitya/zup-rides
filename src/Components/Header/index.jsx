"use client";

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
    return `relative px-2 py-1 text-lg font-semibold transition-all duration-300 ease-in-out
      ${isActive ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white" : "text-white/80 hover:text-white"}
    `;
  };

  return (
    <header className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-md sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 animate-gradient">
          Zup Rides
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={getLinkClasses("/")}>Home</Link>
          <Link href="/about_us" className={getLinkClasses("/about_us")}>About us</Link>
          <Link href="/vehicles" className={getLinkClasses("/vehicles")}>Vehicles</Link>
          <Link href="/contact" className={getLinkClasses("/contact")}>Contact</Link>

          {/* Call Button */}
          <a
            href="tel:+919798146740"
            className="ml-4 px-4 py-2 rounded-full bg-white text-pink-600 font-bold shadow-lg hover:shadow-pink-400 transition duration-300 hover:scale-105 border-2 border-white"
          >
            📞 Call Now
          </a>
        </nav>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Menu size={32} className="text-white" />
          </button>
        </div>
      </div>

      {/* Drawer for Mobile Menu */}
      <DrawerEl isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}
