"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import AdminLayout from "@/components/admin/AdminLayout"
import DashboardCards from "@/components/admin/DashboardCards"

export default function AdminDashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if admin is authenticated
    const adminAuth = localStorage.getItem("adminAuth")
    if (!adminAuth) {
      router.push("/admin/login")
    } else {
      setLoading(false)
    }
  }, [router])

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
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <DashboardCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Courses</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Students
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Basic WordPress Development</td>
                    <td className="px-6 py-4 whitespace-nowrap">$499</td>
                    <td className="px-6 py-4 whitespace-nowrap">763</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href="/admin/courses/edit/1" className="text-blue-600 hover:text-blue-800 mr-3">
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Mastering PHP Language</td>
                    <td className="px-6 py-4 whitespace-nowrap">$149</td>
                    <td className="px-6 py-4 whitespace-nowrap">763</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href="/admin/courses/edit/2" className="text-blue-600 hover:text-blue-800 mr-3">
                        Edit
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Link href="/admin/courses" className="text-blue-600 hover:text-blue-800">
                View All Courses
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Blogs</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Standard gallery post</td>
                    <td className="px-6 py-4 whitespace-nowrap">Jan 01, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href="/admin/blogs/edit/1" className="text-blue-600 hover:text-blue-800 mr-3">
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Blog post with couple photos</td>
                    <td className="px-6 py-4 whitespace-nowrap">Jan 01, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href="/admin/blogs/edit/2" className="text-blue-600 hover:text-blue-800 mr-3">
                        Edit
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Link href="/admin/blogs" className="text-blue-600 hover:text-blue-800">
                View All Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
