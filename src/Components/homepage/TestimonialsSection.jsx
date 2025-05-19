"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Star, ArrowBack, ArrowForward } from "@mui/icons-material"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Michel Brown",
      company: "Google Inc.",
      text: "This should be used to tell a story and let your users know about your product or service.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Jonathan Smith",
      company: "Apple Inc.",
      text: "This should be used to tell a story and let your users know about your product or service.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Jonathan Smith",
      company: "Wordpress Inc.",
      text: "This should be used to tell a story and let your users know about your product or service.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">WHAT PEOPLE SAY</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and industry.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-600 mb-4 text-lg italic">"{testimonials[currentIndex].text}"</p>
                <div className="flex mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].company}</p>
              </motion.div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <ArrowBack className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <ArrowForward className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
