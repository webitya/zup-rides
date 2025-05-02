'use client';

import { CheckCircle } from '@mui/icons-material';

export default function RideFreedomSection() {
  return (
    <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 dark:bg-gradient-to-r dark:from-purple-600 dark:via-pink-700 dark:to-yellow-600 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
        {/* Left Side - Image */}
        <div>
          <img
            src="/sexy-brunette-woman-leather-jacket-sitting-retro-style-motorcycle-beautiful-sunny-day.webp" // update with actual path
            alt="Happy couple riding"
            className="rounded-3xl shadow-xl transform transition duration-300 hover:scale-105"
          />
        </div>

        {/* Right Side - Text */}
        <div className="space-y-6">
          <span className="text-sm font-semibold text-white uppercase tracking-wide">
            Ride With Freedom
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Your Freedom, <span className="text-yellow-400">Your Ride</span>
          </h2>
          <p className="text-lg text-white/80">
            Cruise through Ranchi at your own pace with our stylish and reliable scooters & bikes. 
            Flexible plans, top service, and pure joy — every single ride.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-base text-white/90">
            {[
              'Well-maintained Vehicles for Your Needs',
              'Flexible Pickup & Drop Options',
              'No Hidden Charges. Full Transparency',
              'Free Helmets. Ride Safe!',
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="text-yellow-400" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div>
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600">
              See All Vehicles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
