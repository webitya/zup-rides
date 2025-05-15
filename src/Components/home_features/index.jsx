'use client';

import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import TimerIcon from '@mui/icons-material/Timer';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <BikeScooterIcon fontSize="large" />,
      text: 'Renting scooty or bike with us is more affordable than public transport or private drivers.',
    },
    {
      icon: <LocationOnIcon fontSize="large" />,
      text: 'Explore Ranchi freely on your schedule with our bike and scooty rentals.',
    },
    {
      icon: <PhoneInTalkIcon fontSize="large" />,
      text: 'Choose from our diverse fleet of bikes and scooties tailored to your needs.',
    },
    {
      icon: <TimerIcon fontSize="large" />,
      text: 'Enjoy a quick and hassle-free bike and scooty rental process with us.',
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-10 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div className="text-4xl text-white bg-teal-600 dark:bg-teal-500 p-4 rounded-full shadow-md flex justify-center items-center">
              {benefit.icon}
            </div>
            <p className="text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-full transition-all shadow-md">
          Learn More About Us
        </button>
      </div>
    </section>
  );
}
