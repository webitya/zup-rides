'use client';

import { useEffect } from 'react';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler'; // Scooty icon
import SpeedIcon from '@mui/icons-material/Speed'; // Motorbike icon

export default function RentalPlansSection() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => AOS.init({ once: true, duration: 800 }));
    }
  }, []);

  const plans = [
    {
      title: 'Scooters',
      description:
        'Perfect for navigating the bustling streets of Ranchi. Easy to ride and fuel-efficient.',
      icon: <TwoWheelerIcon className="text-4xl text-gradient" />,
    },
    {
      title: 'Motorbikes',
      description:
        'For longer rides and power-packed performance, our motorbikes combine speed with comfort.',
      icon: <SpeedIcon className="text-4xl text-gradient" />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 py-16 px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Affordable Bike & Scooty Rentals
        </h2>
        <p className="text-lg font-semibold text-white mb-4">
          Flexible Rental Plans. Pick the option that fits your needs:
        </p>
        <p className="text-base text-gray-200">
          Explore Ranchi with comfort and style! Book your ride now.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={plan.title}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-white dark:bg-neutral-800 border border-emerald-300 dark:border-emerald-700 p-6 rounded-2xl shadow-md hover:scale-[1.05] transition-all duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white p-3 rounded-full shadow-md">
                {plan.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
              {plan.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{plan.description}</p>
            <button className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-semibold px-5 py-2 rounded-full hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 transition duration-300">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
