"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function BlogForm({ blog = null }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: blog?.title || "",
    slug: blog?.slug || "",
    metaTitle: blog?.metaTitle || "",
    metaDescription: blog?.metaDescription || "",
    content: blog?.content || "",
    image: blog?.image || "",
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
      // 2. Save the blog data to MongoDB

      // For demo purposes, we'll just simulate a successful save
      setTimeout(() => {
        alert(blog ? "Blog updated successfully!" : "Blog created successfully!")
        router.push("/admin/blogs")
      }, 1000)
    } catch (error) {
      setError("Failed to save blog. Please try again.")
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
            Blog Title
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="metaTitle" className="block text-gray-700 mb-2">
            Meta Title
          </label>
          <input
            id="metaTitle"
            name="metaTitle"
            type="text"
            value={formData.metaTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="metaDescription" className="block text-gray-700 mb-2">
            Meta Description
          </label>
          <input
            id="metaDescription"
            name="metaDescription"
            type="text"
            value={formData.metaDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="content" className="block text-gray-700 mb-2">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows="10"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <div className="mb-6">
        <label htmlFor="image" className="block text-gray-700 mb-2">
          Blog Image
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
            <img src={formData.image || "/placeholder.svg"} alt="Blog preview" className="w-40 h-auto rounded" />
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.push("/admin/blogs")}
          className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Saving..." : blog ? "Update Blog" : "Create Blog"}
        </button>
      </div>
    </form>
  )
}
