"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star, People } from "@mui/icons-material"

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Basic WordPress Development",
      description: "Lorem Ipsum is simply dummy text of the printing and industry.",
      image: "/placeholder.svg?height=300&width=400",
      instructor: "Devid Cameroon",
      students: 763,
      reviews: 205,
      price: 499,
      slug: "basic-wordpress-development",
    },
    {
      id: 2,
      title: "Mastering PHP Language",
      description: "Lorem Ipsum is simply dummy text of the printing and industry.",
      image: "/placeholder.svg?height=300&width=400",
      instructor: "Donal Trump",
      students: 763,
      reviews: 205,
      price: 149,
      slug: "mastering-php-language",
    },
    {
      id: 3,
      title: "Javascript Development",
      description: "Lorem Ipsum is simply dummy text of the printing and industry.",
      image: "/placeholder.svg?height=300&width=400",
      instructor: "Jone",
      students: 763,
      reviews: 205,
      price: 239,
      slug: "javascript-development",
    },
    {
      id: 4,
      title: "Frontend Development",
      description: "Lorem Ipsum is simply dummy text of the printing and industry.",
      image: "/placeholder.svg?height=300&width=400",
      instructor: "Angelina",
      students: 763,
      reviews: 205,
      price: 849,
      slug: "frontend-development",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">OUR COURSES</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and industry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-br-lg">
                  ${course.price}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex justify-between items-center">
                    <div className="text-white text-sm">
                      <span className="flex items-center">
                        <People className="h-4 w-4 mr-1" />
                        {course.students}
                      </span>
                    </div>
                    <div className="text-white text-sm">
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-400" />
                        {course.reviews}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{course.instructor}</span>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
