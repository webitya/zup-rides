"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

// Mock course data - in a real implementation, this would be fetched from MongoDB
const mockCourses = {
  1: {
    id: 1,
    title: "Basic WordPress Development",
    slug: "basic-wordpress-development",
    description: "Lorem Ipsum is simply dummy text of the printing and industry.",
    longDescription:
      "This comprehensive course will take you from a complete beginner to a WordPress developer. You'll learn how to create custom themes, plugins, and how to optimize WordPress sites for performance and security.",
    price: 499,
    instructor: "Devid Cameroon",
    duration: "10 weeks",
    lessons: 42,
    features: [
      "Custom theme development",
      "Plugin creation",
      "E-commerce integration",
      "Performance optimization",
      "Security best practices",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  2: {
    id: 2,
    title: "Mastering PHP Language",
    slug: "mastering-php-language",
    description: "Lorem Ipsum is simply dummy text of the printing and industry.",
    longDescription:
      "Master the PHP programming language with this in-depth course. You'll learn everything from basic syntax to advanced concepts like object-oriented programming, working with databases, and building secure web applications.",
    price: 149,
    instructor: "Donal Trump",
    duration: "8 weeks",
    lessons: 36,
    features: [
      "Object-oriented programming",
      "Database integration",
      "RESTful API development",
      "Security and authentication",
      "Modern PHP frameworks",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
}

export default function EditCoursePage({ params }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [course, setCourse] = useState(null)

  useEffect(() => {
    // Check if admin is authenticated
    const adminAuth = localStorage.getItem("adminAuth")
    if (!adminAuth) {
      router.push("/admin/login")
      return
    }

    // In a real implementation, this would fetch the course from MongoDB
    // For demo purposes, we'll use mock data
    const courseData = mockCourses[params.id]
    if (!courseData) {
      alert("Course not found")
      router.push("/admin/courses")
      return
    }

    setCourse(courseData)
    setLoading(false)
  }, [params.id, router])
}
