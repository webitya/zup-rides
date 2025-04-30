'use client';

import { useEffect, useState } from 'react';
import vehicleData from '@/Components/home_Bike_Options/vehicle.json'; // Adjust path if you store in /public
import { Button, Typography } from '@mui/material'; // Material UI components for modern styling
import { MonetizationOn, Star } from '@mui/icons-material'; // Premium icons

export default function RideOptionsSection() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setVehicles(vehicleData);
    import('aos').then((AOS) => AOS.init({ once: true, duration: 800 }));
  }, []);

  return (
    <section className="bg-gradient-to-r from-green-400 via-emerald-600 to-emerald-800 dark:bg-gradient-to-r dark:from-green-800 dark:via-emerald-900 dark:to-green-700 py-16 md:py-24 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <Typography variant="h2" className="text-4xl font-extrabold text-white drop-shadow-lg">
          Explore Our Premium Ride Options
        </Typography>
        <Typography variant="body1" className="text-lg text-gray-100 mt-4 leading-relaxed">
          Discover the finest bikes, designed for style, comfort, and performance.
        </Typography>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {vehicles.map((ride, idx) => (
          <div
            key={ride.name}
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
            className="bg-white dark:bg-neutral-800 border-2 border-emerald-500 dark:border-emerald-700 rounded-3xl p-6 flex flex-col items-center shadow-lg"
          >
            <img
              src={ride.image}
              alt={ride.name}
              className="h-48 object-contain mb-6 rounded-lg shadow-xl transition-all duration-500"
            />
            <Typography variant="h6" className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              {ride.name}
            </Typography>

            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="flex items-center gap-1 text-emerald-500 dark:text-emerald-300">
                <MonetizationOn />
                <Typography variant="body2" className="font-semibold text-gray-700 dark:text-gray-300">
                  Daily: <span className="font-bold">₹{ride.daily}</span>
                </Typography>
              </div>

              <div className="flex items-center gap-1 text-emerald-500 dark:text-emerald-300">
                <Star />
                <Typography variant="body2" className="font-semibold text-gray-700 dark:text-gray-300">
                  Monthly: <span className="font-bold">₹{ride.monthly}</span>
                </Typography>
              </div>
            </div>

            <Button
              variant="contained"
              color="success"
              size="large"
              className="w-full py-2 rounded-full transition duration-300"
            >
              Book Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
