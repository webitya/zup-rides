"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CalendarToday } from "@mui/icons-material"

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Standard gallery post",
      date: "January 01, 2023",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/placeholder.svg?height=300&width=400",
      slug: "standard-gallery-post",
    },
    {
      id: 2,
      title: "Blog post with couple photos",
      date: "January 01, 2023",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/placeholder.svg?height=300&width=400",
      slug: "blog-post-with-couple-photos",
    },
    {
      id: 3,
      title: "Standard gallery post",
      date: "January 01, 2023",
      excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/placeholder.svg?height=300&width=400",
      slug: "standard-gallery-post-2",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">RECENT STORIES</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and industry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <CalendarToday className="h-4 w-4 mr-2" />
                  <span className="text-sm">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
