'use client';

import { CheckCircle } from '@mui/icons-material';

export default function RideFreedomSection() {
  return (
    <section className="bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-300 dark:bg-emerald-900/10 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
        {/* Left Side - Image */}
        <div>
          <img
            src="/sexy-brunette-woman-leather-jacket-sitting-retro-style-motorcycle-beautiful-sunny-day.webp" // update with actual path
            alt="Happy couple riding"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        {/* Right Side - Text */}
        <div className="space-y-6">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
            Ride With Freedom
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight">
            Your Freedom, <span className="text-emerald-500">Your Ride</span>
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
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
              <li key={i} className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200">
                <CheckCircle className="text-emerald-500" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300">
              See All Vehicles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
