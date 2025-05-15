'use client';

import TwoWheelerIcon from '@mui/icons-material/TwoWheeler'; // Scooty icon
import SpeedIcon from '@mui/icons-material/Speed'; // Motorbike icon

export default function RentalPlansSection() {
  const whatsappNumber = '919798146740'; // Your WhatsApp number

  const plans = [
    {
      title: 'Scooters',
      description:
        'Perfect for navigating the bustling streets of Ranchi. Easy to ride and fuel-efficient.',
      icon: <TwoWheelerIcon className="text-4xl text-white" />,
    },
    {
      title: 'Motorbikes',
      description:
        'For longer rides and power-packed performance, our motorbikes combine speed with comfort.',
      icon: <SpeedIcon className="text-4xl text-white" />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-black via-teal-900 to-black py-12 px-6 md:px-8">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Affordable Bike & Scooty Rentals
        </h2>
        <p className="text-base font-semibold text-teal-300 mb-3">
          Flexible Rental Plans. Pick the option that fits your needs:
        </p>
        <p className="text-sm text-white/90">
          Explore Ranchi with comfort and style! Book your ride now.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        {plans.map((plan) => {
          // Create custom WhatsApp message
          const message = `Hi, I am interested in renting a ${plan.title}. Please share more details.`;
          const encodedMessage = encodeURIComponent(message);
          const waLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

          return (
            <div
              key={plan.title}
              className="bg-teal-900 border border-teal-400 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="bg-gradient-to-r from-teal-400 to-teal-600 text-white p-3 rounded-full shadow-lg">
                  {plan.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {plan.title}
              </h3>
              <p className="text-sm text-teal-200 mb-4">{plan.description}</p>
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-teal-500 hover:bg-white hover:text-teal-900 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
                  Book Now
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
