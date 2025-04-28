'use client';
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="bg-white flex flex-col items-center justify-start py-7 px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/sexy-brunette-woman-leather-jacket-sitting-retro-style-motorcycle-beautiful-sunny-day.webp" // replace this with your actual file name
            alt="Bikers Riding"
            className="rounded-2xl shadow-xl max-w-full h-auto"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">
            Our <span className="text-green-500">Story</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Born out of a love for adventure and the open road, Ranchi Rides was founded to make personal 
            transportation accessible and fun. Recognizing the need for reliable and affordable rental 
            options in Ranchi, we set out to build a service that prioritizes customer satisfaction and 
            vehicle excellence.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
