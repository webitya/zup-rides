'use client';

import { useEffect } from 'react';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler'; // Scooty icon
import SpeedIcon from '@mui/icons-material/Speed'; // Motorbike icon

export default function RentalPlansSection() {
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
    <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 py-12 px-6 md:px-8">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Affordable Bike & Scooty Rentals
        </h2>
        <p className="text-base font-semibold text-white mb-3">
          Flexible Rental Plans. Pick the option that fits your needs:
        </p>
        <p className="text-sm text-gray-200">
          Explore Ranchi with comfort and style! Book your ride now.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={plan.title}
            className="bg-white dark:bg-neutral-800 border border-emerald-300 dark:border-emerald-700 p-4 rounded-2xl shadow-md"
          >
            <div className="flex justify-center items-center mb-3">
              <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white p-2 rounded-full shadow-md">
                {plan.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              {plan.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{plan.description}</p>
            <button className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-semibold px-4 py-2 rounded-full">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
