'use client';

import { useEffect } from 'react';
import { Button, IconButton, Typography, Grid } from '@mui/material';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import TimerIcon from '@mui/icons-material/Timer';

export default function BenefitsSection() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => AOS.init({ once: true, duration: 800 }));
    }
  }, []);

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
    <section className="bg-white dark:bg-neutral-900 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-4xl bg-gradient-to-r from-indigo-500 to-sky-500 dark:from-indigo-400 dark:to-teal-400 text-white p-4 rounded-full shadow-md flex justify-center items-center">
              {benefit.icon}
            </div>
            <Typography
              variant="body2"
              className="text-sm md:text-base text-gray-800 dark:text-gray-300 font-medium leading-relaxed"
            >
              {benefit.text}
            </Typography>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center" data-aos="zoom-in">
        <Button
          variant="contained"
          color="primary"
          className="!bg-gradient-to-r !from-indigo-500 !to-sky-500 text-white font-semibold px-4 py-2 rounded-full shadow-md transition-all"
        >
          Learn More About Us
        </Button>
      </div>
    </section>
  );
}
