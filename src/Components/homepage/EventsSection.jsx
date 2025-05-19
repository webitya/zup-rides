"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { AccessTime, LocationOn } from "@mui/icons-material"

export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: "How to start a blog site using wordpress.",
      date: "15 JANUARY",
      time: "5:00 AM-9:00PM",
      location: "INTER CONTINENTAL GARDEN, DHAKA.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. The industry's standard dummy text ever scramble.",
      slug: "how-to-start-a-blog-site",
    },
    {
      id: 2,
      title: "How to create a new landing page.",
      date: "21 JANUARY",
      time: "5:00 AM - 9:00 PM",
      location: "INTER CONTINENTAL GARDEN, DHAKA.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. The industry's standard dummy text ever scramble.",
      slug: "how-to-create-landing-page",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">UPCOMING EVENTS</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and industry.</p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="bg-blue-600 text-white flex flex-col items-center justify-center p-6">
                  <div className="text-4xl font-bold">{event.date.split(" ")[0]}</div>
                  <div className="text-xl">{event.date.split(" ")[1]}</div>
                  <Link
                    href={`/events/${event.slug}`}
                    className="mt-4 px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 transition-colors text-sm font-bold"
                  >
                    PURCHASE TICKET
                  </Link>
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <AccessTime className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <LocationOn className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
