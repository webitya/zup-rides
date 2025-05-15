'use client';

import { useEffect, useState } from 'react';
import vehicleData from '@/Components/home_Bike_Options/vehicle.json';
import { Button, Typography } from '@mui/material';
import { MonetizationOn, Star } from '@mui/icons-material';
import Link from 'next/link';

const whatsappNumber = '919798146740'; // Your WhatsApp number with country code

export default function RideOptionsSection() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setVehicles(vehicleData);
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Choose Your Ride</h2>
        <p className="text-teal-400 text-base md:text-lg">
          Best bikes & scooties in town – affordable, flexible, and ready to ride!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((ride, index) => {
          // Create the WhatsApp message for each vehicle
          const message = `Hi, I am interested in renting the ${ride.name}. Could you please provide more details?`;
          // Encode the message for URL
          const encodedMessage = encodeURIComponent(message);
          // WhatsApp link with pre-filled message
          const waLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

          return (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl p-4 shadow-md border border-neutral-800 hover:border-teal-500 transition-all duration-200"
            >
              <img
                src={ride.image}
                alt={ride.name}
                className="h-36 w-full object-contain mb-4 bg-white p-2 rounded-md"
              />
              <Typography variant="h6" className="text-lg font-semibold mb-2 text-white text-center">
                {ride.name}
              </Typography>

              <div className="space-y-1 text-sm text-gray-300 mb-4">
                <PriceRow icon={<Star fontSize="small" />} label="Hourly" price={ride.hourly} />
                <PriceRow icon={<MonetizationOn fontSize="small" />} label="Daily" price={ride.daily} />
                <PriceRow icon={<MonetizationOn fontSize="small" />} label="Weekly" price={ride.weekly} />
                <PriceRow icon={<Star fontSize="small" />} label="Monthly" price={ride.monthly} />
              </div>

              <Link href={waLink} target="_blank" className="block">
                <Button
                  fullWidth
                  sx={{
                    py: 1.2,
                    fontWeight: 600,
                    borderRadius: 999,
                    backgroundColor: '#14b8a6',
                    color: '#fff',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#0d9488',
                    },
                  }}
                >
                  Book Now
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PriceRow({ icon, label, price }) {
  return (
    <div className="flex justify-between items-center bg-black/30 px-3 py-1.5 rounded-md">
      <span className="flex items-center gap-1 text-white/80">{icon} {label}</span>
      <span className="font-medium text-teal-400">₹{price}</span>
    </div>
  );
}
