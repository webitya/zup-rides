import Link from "next/link";
import { X } from "lucide-react";

export default function DrawerEl({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-green-100 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose}>
            <X size={28} className="text-green-800" />
          </button>
        </div>

        <div className="flex flex-col space-y-6 p-6">
          <Link href="/" onClick={onClose} className="text-lg font-medium text-green-800">Home</Link>
          <Link href="/about_us" onClick={onClose} className="text-lg font-medium text-green-800">About Us</Link>
          <Link href="/vehicles" onClick={onClose} className="text-lg font-medium text-green-800">Vehicles</Link>
          <Link href="/contact" onClick={onClose} className="text-lg font-medium text-green-800">Contact</Link>

          {/* Call Button */}
          <a
            href="tel:+918000000000"
            className="mt-4 bg-green-700 text-white text-center py-2 px-4 rounded-lg hover:bg-green-800"
          >
            Call Now
          </a>

          {/* WhatsApp Chat Button */}
          <a
            href="https://wa.me/918000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white text-center py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>

          {/* Google Map */}
          <div className="mt-4 w-full h-40 overflow-hidden rounded-lg">
            <iframe
              title="Webitya Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114636.36410438773!2d85.22911838716932!3d23.344101648679697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e0fc95b73b91%3A0x8b3d5a0fcb0f9c9f!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1681727384602!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}
