"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Dashboard,
  School,
  Article,
  Event,
  People,
  PhotoLibrary,
  Settings,
  ExitToApp,
  Menu,
  Close,
} from "@mui/icons-material"

export default function AdminLayout({ children }) {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
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

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-blue-900 text-white ${sidebarOpen ? "w-64" : "w-0 md:w-20"} transition-all duration-300 overflow-hidden`}
      >
        <div className="p-4 flex items-center justify-between">
          <h1 className={`font-bold text-xl ${sidebarOpen ? "block" : "hidden md:hidden"}`}>Admin Panel</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white md:hidden">
            {sidebarOpen ? <Close /> : <Menu />}
          </button>
        </div>

        <nav className="mt-6">
          <div className="px-4 py-2">
            <Link
              href="/admin/dashboard"
              className="flex items-center py-2 px-4 rounded hover:bg-blue-800 transition-colors"
            >
              <Dashboard className="h-5 w-5" />
              <span className={`ml-3 ${sidebarOpen ? "block" : "hidden md:hidden"}`}>Dashboard</span>
            </Link>
          </div>

          <div className="px-4 py-2">
            <Link
              href="/admin/courses"
              className="flex items-center py-2 px-4 rounded hover:bg-blue-800 transition-colors"
            >
              <School className="h-5 w-5" />
              <span className={`ml-3 ${sidebarOpen ? "block" : "hidden md:hidden"}`}>Courses</span>
            </Link>
          </div>

          <div className="px-4 py-2">
            <Link
              href="/admin/blogs"
              className="flex items-center py-2 px-4 rounded hover:bg-blue-800 transition-colors"
            >
              <Article className="h-5 w-5" />
              <span className={`ml-3 ${sidebarOpen ? "block" : "hidden md:hidden"}`}>Blogs</span>
            </Link>
          </div>

          <div className="px-4 py-2">
            <Link
              href="/admin/events"
              className="flex items-center py-2 px-4 rounded hover:bg-blue-800 transition-colors"
            >
              <Event className="h-5 w-5" />
              <span className={`ml-3 ${sidebarOpen ? "block" : "hidden md:hidden"}`}>Events</span>
            </Link>
          </div>

          <div className="px-4 py-2">
            <Link
              href="/admin/teams"
              className="flex items-center py-2 px-4 rounded hover:bg-blue-800 transition-colors"
            >
              <People className="h-5 w-5" />
              <span className={`ml-3 ${sidebarOpen ? "block" : "hidden md:hidden"}`}>Teams</span>
            </Link>
          </div>

          <div className="px-4 py-2">
            <Link
              href="/admin/gallery"
              className="flex items-center py-2 px-4 rounded hover:bg-blue-800 transition-colors"
            >
              <PhotoLibrary className="h-5 w-5" />
              <span className={`ml-3 ${sidebarOpen ? "block" : "hidden md:hidden"}`}>Gallery</span>
            </Link>
          </div>

          <div className="px-4 py-2">
            <Link
              href="/admin/settings"
              className="flex items-center py-2 px-4 rounded hover:bg-blue-800 transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span className={`ml-3 ${sidebarOpen ? "block" : "hidden md:hidden"}`}>Settings</span>
            </Link>
          </div>

          <div className="px-4 py-2 mt-8">
            <button
              onClick={handleLogout}
              className="flex items-center py-2 px-4 rounded hover:bg-blue-800 transition-colors w-full text-left"
            >
              <ExitToApp className="h-5 w-5" />
              <span className={`ml-3 ${sidebarOpen ? "block" : "hidden md:hidden"}`}>Logout</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hidden md:block">
              <Menu />
            </button>

            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Admin</span>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">A</div>
            </div>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </div>
  )
}
