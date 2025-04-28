'use client';

import { useEffect } from 'react';

export default function BenefitsSection() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => AOS.init({ once: true, duration: 800 }));
    }
  }, []);

  const benefits = [
    {
      icon: '🛵',
      text: 'Renting scooty or bike with us is more affordable than public transport or private drivers.',
    },
    {
      icon: '📍',
      text: 'Explore Ranchi freely on your schedule with our bike and scooty rentals.',
    },
    {
      icon: '📲',
      text: 'Choose from our diverse fleet of bikes and scooties tailored to your needs.',
    },
    {
      icon: '⏱️',
      text: 'Enjoy a quick and hassle-free bike and scooty rental process with us.',
    },
  ];

  return (
    <section className="bg-white dark:bg-neutral-900 py-0 px-6 pb-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-5xl bg-emerald-100 dark:bg-emerald-800/20 text-emerald-600 dark:text-emerald-300 p-4 rounded-full shadow-sm">
              {benefit.icon}
            </div>
            <p className="text-sm md:text-base text-gray-800 dark:text-gray-300 font-medium leading-relaxed">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center" data-aos="zoom-in">
        <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all">
          Learn More About Us
        </button>
      </div>
    </section>
  );
}
