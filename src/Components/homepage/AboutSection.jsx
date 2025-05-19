"use client"

import { motion } from "framer-motion"
import { Check } from "@mui/icons-material"

export default function AboutSection() {
  const features = ["We are creative.", "Provide best education services.", "We are always improving."]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="About AdityaWeb"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to AdityaWeb</h2>
            <p className="text-gray-600 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500, printer took a galley of type and scramble.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="bg-blue-600 rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
