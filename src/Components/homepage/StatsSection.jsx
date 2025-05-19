"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { School, People, History } from "@mui/icons-material"

export default function StatsSection() {
  const stats = [
    {
      icon: <School className="h-12 w-12 text-blue-600" />,
      count: 549,
      label: "Online Courses",
    },
    {
      icon: <History className="h-12 w-12 text-blue-600" />,
      count: 204,
      label: "Year of History",
    },
    {
      icon: <People className="h-12 w-12 text-blue-600" />,
      count: 4950,
      label: "Active Students",
    },
  ]

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              It's limited seating! Hurry up Register now and get your free online course.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href="/register"
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                REGISTER NOW
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.count}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
