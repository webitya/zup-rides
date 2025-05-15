'use client';

import { CheckCircle } from '@mui/icons-material';
import Link from 'next/link';

export default function RideFreedomSection() {
  return (
    <section className="bg-gradient-to-br from-black via-teal-900 to-black py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
        
        {/* Left Side - Image */}
        <div>
          <img
            src="/sexy-brunette-woman-leather-jacket-sitting-retro-style-motorcycle-beautiful-sunny-day.webp"
            alt="Happy couple riding"
            className="rounded-3xl shadow-2xl transform transition duration-300 hover:scale-105"
          />
        </div>

        {/* Right Side - Text */}
        <div className="space-y-6">
          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">
            Ride With Freedom
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Your Freedom, <span className="text-teal-300">Your Ride</span>
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
                <CheckCircle className="text-teal-400" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div>
            <Link href="/vehicles" target="_blank">
              <button className="bg-teal-500 hover:bg-white text-white hover:text-teal-900 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300">
                See All Vehicles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
