"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CourseForm({ course = null }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: course?.title || "",
    slug: course?.slug || "",
    description: course?.description || "",
    longDescription: course?.longDescription || "",
    price: course?.price || "",
    instructor: course?.instructor || "",
    duration: course?.duration || "",
    lessons: course?.lessons || "",
    features: course?.features?.join("\n") || "",
    image: course?.image || "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [imageFile, setImageFile] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
      // In a real implementation, this would upload to Cloudinary
      // For demo purposes, we'll just set a placeholder
      setFormData((prev) => ({ ...prev, image: URL.createObjectURL(e.target.files[0]) }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // In a real implementation, this would:
      // 1. Upload the image to Cloudinary
      // 2. Save the course data to MongoDB

      // For demo purposes, we'll just simulate a successful save
      setTimeout(() => {
        alert(course ? "Course updated successfully!" : "Course created successfully!")
        router.push("/admin/courses")
      }, 1000)
    } catch (error) {
      setError("Failed to save course. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="title" className="block text-gray-700 mb-2">
            Course Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-gray-700 mb-2">
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            value={formData.slug}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block text-gray-700 mb-2">
          Short Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="2"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <div className="mb-6">
        <label htmlFor="longDescription" className="block text-gray-700 mb-2">
          Long Description
        </label>
        <textarea
          id="longDescription"
          name="longDescription"
          value={formData.longDescription}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="price" className="block text-gray-700 mb-2">
            Price ($)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="instructor" className="block text-gray-700 mb-2">
            Instructor
          </label>
          <input
            id="instructor"
            name="instructor"
            type="text"
            value={formData.instructor}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="duration" className="block text-gray-700 mb-2">
            Duration
          </label>
          <input
            id="duration"
            name="duration"
            type="text"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g. 8 weeks"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="lessons" className="block text-gray-700 mb-2">
            Number of Lessons
          </label>
          <input
            id="lessons"
            name="lessons"
            type="number"
            value={formData.lessons}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="features" className="block text-gray-700 mb-2">
          Features (one per line)
        </label>
        <textarea
          id="features"
          name="features"
          value={formData.features}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <div className="mb-6">
        <label htmlFor="image" className="block text-gray-700 mb-2">
          Course Image
        </label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formData.image && (
          <div className="mt-2">
            <img src={formData.image || "/placeholder.svg"} alt="Course preview" className="w-40 h-auto rounded" />
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.push("/admin/courses")}
          className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Saving..." : course ? "Update Course" : "Create Course"}
        </button>
      </div>
    </form>
  )
}
