'use client';

import { CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

export default function RideFreedomSection() {
  useEffect(() => {
    import('aos').then((AOS) => AOS.init({ once: true, duration: 1000 }));
  }, []);

  return (
    <section className="bg-emerald-50 dark:bg-emerald-900/10 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
        {/* Left Side - Image */}
        <div data-aos="fade-right">
          <img
            src="/sexy-brunette-woman-leather-jacket-sitting-retro-style-motorcycle-beautiful-sunny-day.webp" // update with actual path
            alt="Happy couple riding"
            className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Side - Text */}
        <div data-aos="fade-left" className="space-y-6">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
            Ride With Freedom
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
            Your Freedom, <span className="text-emerald-500">Your Ride</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Cruise through Ranchi at your own pace with our stylish and reliable scooters & bikes. 
            Flexible plans, top service, and pure joy — every single ride.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-base">
            {[
              'Well-maintained Vehicles for Your Needs',
              'Flexible Pickup & Drop Options',
              'No Hidden Charges. Full Transparency',
              'Free Helmets. Ride Safe!',
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="text-emerald-500" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
              See All Vehicles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
