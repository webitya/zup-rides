'use client';

import { useEffect } from 'react';

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
    },
    {
      title: 'Motorbikes',
      description:
        'For longer rides and power-packed performance, our motorbikes combine speed with comfort.',
    },
  ];

  return (
    <section className="bg-emerald-100 dark:bg-emerald-900/10 py-24 px-6 pb-10 md:px-16">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4">
          Affordable Bike & Scooty Rentals
        </h2>
        <p className="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mb-4">
          Flexible Rental Plans.<br />
          <span className="text-black dark:text-white">Pick the option that fits your needs:</span>
        </p>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
          Enjoy the ease and freedom of Ranchi Rides Rental Service. Book your ride today and explore Ranchi with comfort and style!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={plan.title}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-white dark:bg-neutral-800 border border-emerald-300 dark:border-emerald-700 p-8 rounded-3xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              {plan.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{plan.description}</p>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-6 py-2 rounded-full transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
      
    </section>
  );
}
