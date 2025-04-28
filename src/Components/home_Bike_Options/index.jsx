'use client';

import { useEffect, useState } from 'react';
import vehicleData from '@/Components/home_Bike_Options/vehicle.json'; // Adjust path if you store in /public

export default function RideOptionsSection() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setVehicles(vehicleData);
    import('aos').then((AOS) => AOS.init({ once: true, duration: 800 }));
  }, []);

  return (
    <section className="bg-emerald-100 dark:bg-emerald-900/10 py-0 px-0 pb-5 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {vehicles.map((ride, idx) => (
          <div
            key={ride.name}
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
            className="bg-white dark:bg-neutral-800 border border-emerald-300 dark:border-emerald-700 rounded-3xl p-6 flex flex-col items-center hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            <img src={ride.image} alt={ride.name} className="h-36 object-contain mb-6" />
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{ride.name}</h3>
            <ul className="text-green-600 dark:text-green-300 text-sm font-semibold text-center space-y-1 mb-6">
              <li>Daily:- {ride.daily}/-</li>
              <li>Weekly:- {ride.weekly}/-</li>
              <li>Monthly:- {ride.monthly}/-</li>
            </ul>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold px-6 py-2 rounded-full transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
