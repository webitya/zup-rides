"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // This would be connected to a server action in a real implementation
    console.log("Form submitted:", formData)
    alert("Registration submitted successfully!")
    setFormData({ name: "", email: "", phone: "" })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">GET FREE ACCESS TO OUR COURSES</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition-colors"
                >
                  REGISTER NOW
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Register Now"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 p-8 rounded-lg shadow-lg text-center max-w-xs">
                <div className="text-5xl font-bold text-blue-600 mb-2">4950</div>
                <div className="text-xl font-semibold mb-4">Total Registered</div>
                <div className="text-gray-600">
                  Join our community of learners and advance your career with our expert-led courses.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
