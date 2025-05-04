import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function DrawerEl({ isOpen, onClose }) {
  // Prevent background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Container that toggles display */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-[999] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button onClick={onClose}>
              <X size={28} className="text-pink-600 hover:text-pink-800" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex flex-col space-y-5 p-6 items-center text-center bg-white max-h-[100vh]">
            <Link href="/" onClick={onClose} className="text-base font-medium text-gray-800 hover:text-pink-500 transition">
              Home
            </Link>
            <Link href="/about_us" onClick={onClose} className="text-base font-medium text-gray-800 hover:text-pink-500 transition">
              About Us
            </Link>
            <Link href="/vehicles" onClick={onClose} className="text-base font-medium text-gray-800 hover:text-pink-500 transition">
              Vehicles
            </Link>
            <Link href="/contact" onClick={onClose} className="text-base font-medium text-gray-800 hover:text-pink-500 transition">
              Contact
            </Link>

            {/* Call Now Button */}
            <a
              href="tel:+919798146740"
              className="w-full bg-white text-pink-600 font-bold py-2 rounded-full border border-pink-500 shadow hover:bg-pink-100 transition"
            >
              Call Now
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919798146740"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-green-600 font-bold py-2 rounded-full border border-green-500 shadow hover:bg-green-100 transition"
            >
              Chat on WhatsApp
            </a>

            {/* Google Map */}
            <div className="mt-4 w-full h-40 overflow-hidden rounded-xl shadow border border-gray-200">
  <iframe
    title="ZupRides Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1537790098977!2d85.34509127541982!3d23.353530379008957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1a79ee0b42d%3A0xfb2091245f88b76!2sZupRides!5e0!3m2!1sen!2sin!4v1714812950407!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


          </div>
        </div>

        {/* Background Overlay */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          onClick={onClose}
        ></div>
      </div>
    </>
  );
}
