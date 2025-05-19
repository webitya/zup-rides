"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { School, TrendingUp, EmojiEvents } from "@mui/icons-material"

export default function ClassesSection() {
  const classes = [
    {
      icon: <School className="h-12 w-12 text-blue-600" />,
      title: "Apply Online",
      description: "Lorem Ipsum is simply dummy text of the and industry.",
      link: "/register",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Prospects",
      description: "Lorem Ipsum is simply dummy text of the and industry.",
      link: "/about",
    },
    {
      icon: <EmojiEvents className="h-12 w-12 text-blue-600" />,
      title: "Certification",
      description: "Lorem Ipsum is simply dummy text of the and industry.",
      link: "/courses",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">OUR CLASSES</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Link href={item.link} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
