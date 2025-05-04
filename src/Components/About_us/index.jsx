'use client';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start py-12 px-6">
      {/* Top Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        Rent Bikes or Scooty Anywhere <span className="text-green-500">You Want</span>
      </motion.h1>

      {/* About Section */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">
            About <span className="text-green-500">Us</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Welcome to Zup Rides Rental Service, your premier destination for bike and scooty rentals in Ranchi. 
            Established in 2024, we are passionate about providing top-quality two-wheelers to both locals and visitors, 
            ensuring a seamless and enjoyable riding experience.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src="/sexy-brunette-woman-leather-jacket-sitting-retro-style-motorcycle-beautiful-sunny-day.webp" 
            alt="Girls Riding Scooty in Rain"
            className="rounded-2xl shadow-xl max-w-full h-auto"
          />
        </motion.div>

      </div>
    </main>
  )
}
