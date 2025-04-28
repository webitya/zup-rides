'use client';
import { motion } from "framer-motion";

export default function FleetAndChooseUs() {
  return (
    <section className="bg-white flex flex-col items-center justify-start py-5 px-6 mb-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column - Our Fleet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">
            Our <span className="text-green-500">Fleet</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We boast a diverse fleet of meticulously maintained bikes and scooties to cater to various preferences and requirements:
          </p>
          <ul className="space-y-4 text-gray-700 text-base list-disc list-inside">
            <motion.li whileHover={{ scale: 1.05 }} className="hover:text-green-500">
              <strong>Economy Models:</strong> Fuel-efficient and budget-friendly options for daily commuters.
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className="hover:text-green-500">
              <strong>Premium Bikes:</strong> High-performance motorcycles for thrill-seekers and long-distance travelers.
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className="hover:text-green-500">
              <strong>Electric Scooties:</strong> Eco-friendly choices for the environmentally conscious rider.
            </motion.li>
          </ul>
        </motion.div>

        {/* Right Column - Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">
            Why <span className="text-green-500">Choose Us?</span>
          </h2>
          <ul className="space-y-4 text-gray-700 text-base list-disc list-inside">
            <motion.li whileHover={{ scale: 1.05 }} className="hover:text-green-500">
              <strong>Quality Assurance:</strong> Regular maintenance and inspections to ensure every ride is safe and smooth.
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className="hover:text-green-500">
              <strong>Transparent Pricing:</strong> Competitive rates with no hidden fees, offering exceptional value.
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className="hover:text-green-500">
              <strong>Convenient Booking:</strong> Easy online reservation system for hassle-free scheduling.
            </motion.li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
