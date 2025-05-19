"use client"

import { motion } from "framer-motion"
import { School, Article, People, Event } from "@mui/icons-material"

export default function DashboardCards() {
  const cards = [
    {
      title: "Total Courses",
      count: 12,
      icon: <School className="h-8 w-8 text-blue-600" />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Total Blogs",
      count: 48,
      icon: <Article className="h-8 w-8 text-green-600" />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      title: "Total Students",
      count: 4950,
      icon: <People className="h-8 w-8 text-purple-600" />,
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      title: "Total Events",
      count: 24,
      icon: <Event className="h-8 w-8 text-orange-600" />,
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center">
            <div className={`${card.bgColor} p-4 rounded-full mr-4`}>{card.icon}</div>
            <div>
              <h2 className="text-gray-500 text-sm">{card.title}</h2>
              <p className={`text-2xl font-bold ${card.textColor}`}>{card.count}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
