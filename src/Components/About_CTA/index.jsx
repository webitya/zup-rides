"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="bg-gray-50 mb-5 py-5 px-6 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8 max-w-4xl"
      >
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Join us on the road, <br />
          <span className="text-green-500">scooty–bike is waiting</span> for <br />
          an adventure.
        </h1>

        {/* Sub Text */}
        <p className="text-lg text-gray-700 mt-6">
          Experience the freedom and excitement of riding with Ranchi Rides. Contact us today to
          find your ideal bike or scooty and discover Ranchi, Jharkhand like never before.
        </p>
      </motion.div>
    </section>
  );
}
