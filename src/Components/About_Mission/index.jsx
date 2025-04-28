"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="bg-white flex flex-col items-center py-0 px-6 pb-0 mb-12">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">
            Our <span className="text-green-500">Mission</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Ranchi Rides Rental Service, our mission is to empower your journeys with reliable and stylish two-wheelers. 
            Whether you’re exploring the city, embarking on a weekend getaway, or need a dependable ride for daily tasks, 
            we have the perfect vehicle for you.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl shadow-lg group"
        >
          <img 
            src="/sexy-brunette-woman-leather-jacket-sitting-retro-style-motorcycle-beautiful-sunny-day.webp" 
            alt="Mission Image"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500" 
          />
        </motion.div>

      </div>
    </section>
  );
}
