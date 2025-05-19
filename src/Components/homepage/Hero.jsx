"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative bg-blue-900 text-white min-h-[80vh] flex items-center">
      {/* Background overlay with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          opacity: 0.2,
        }}
      ></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/register"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold mb-6 hover:bg-blue-700 transition-colors"
            >
              REGISTER NOW
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Join Us Today
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            Better Education for World.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl mb-4"
          >
            Help today because tomorrow you may be the one who needs helping!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-xl mb-8"
          >
            Forget what you can get and see what you can give.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link
              href="/about"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              JOIN WITH US
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
