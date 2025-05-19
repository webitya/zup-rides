"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import AdminLayout from "@/components/admin/AdminLayout"
import { Add, Edit, Delete } from "@mui/icons-material"

export default function AdminCoursesPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    // Check if admin is authenticated
    const adminAuth = localStorage.getItem("adminAuth")
    if (!adminAuth) {
      router.push("/admin/login")
    } else {
      // In a real implementation, this would fetch courses from MongoDB
      // For demo purposes, we'll use mock data
      setCourses([
        {
          id: 1,
          title: "Basic WordPress Development",
          slug: "basic-wordpress-development",
          price: 499,
          students: 763,
          createdAt: "2023-01-15",
        },
        {
          id: 2,
          title: "Mastering PHP Language",
          slug: "mastering-php-language",
          price: 149,
          students: 763,
          createdAt: "2023-02-20",
        },
        {
          id: 3,
          title: "Javascript Development",
          slug: "javascript-development",
          price: 239,
          students: 763,
          createdAt: "2023-03-10",
        },
        {
          id: 4,
          title: "Frontend Development",
          slug: "frontend-development",
          price: 849,
          students: 763,
          createdAt: "2023-04-05",
        },
      ])
      setLoading(false)
    }
  }, [router])

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this course?")) {
      // In a real implementation, this would delete the course from MongoDB
      // For demo purposes, we'll just filter it out
      setCourses(courses.filter((course) => course.id !== id))
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Courses</h1>
          <Link
            href="/admin/courses/create"
            className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            <Add className="h-5 w-5" />
            <span>Add Course</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Slug
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{course.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{course.slug}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${course.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{course.students}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{course.createdAt}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <Link href={`/admin/courses/edit/${course.id}`} className="text-blue-600 hover:text-blue-800">
                          <Edit className="h-5 w-5" />
                        </Link>
                        <button onClick={() => handleDelete(course.id)} className="text-red-600 hover:text-red-800">
                          <Delete className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
