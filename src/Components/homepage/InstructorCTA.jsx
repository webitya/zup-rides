"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function InstructorCTA() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Join thousand of instructors!
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl mb-8"
        >
          Become an Instructor?
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/register"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            GET STARTED NOW
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
