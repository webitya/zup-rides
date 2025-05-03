'use client';

import { useEffect, useState } from 'react';
import vehicleData from '@/Components/home_Bike_Options/vehicle.json';
import { Button, Typography } from '@mui/material';
import { MonetizationOn, Star } from '@mui/icons-material';
import Link from 'next/link';

export default function RideOptionsSection() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setVehicles(vehicleData);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
          Explore Our Premium Ride Options
        </h2>
        <Typography variant="body1" className="text-base md:text-lg text-white/90 mx-auto">
          Discover stylish, comfortable, and high-performance bikes tailored for your next ride.
        </Typography>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {vehicles.map((ride) => (
          <div
            key={ride.name}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center border border-white/30 shadow-lg hover:scale-[1.05] transition-all duration-300"
          >
            <img
              src={ride.image}
              alt={ride.name}
              className="h-48 object-contain mb-6 rounded-xl shadow-md bg-white/20 p-2"
            />
            <Typography variant="h6" className="text-xl font-bold text-white mb-3">
              {ride.name}
            </Typography>

            <div className="flex flex-col items-center gap-4 mb-6 text-white/80 text-sm">
            <div className="flex items-center gap-1 bg-white/20 p-2 rounded-lg w-full justify-center">
                <Star fontSize="small" />
                Hourly: <span className="font-semibold text-white">₹{ride.hourly}</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 p-2 rounded-lg w-full justify-center">
                <MonetizationOn fontSize="small" />
                Daily: <span className="font-semibold text-white">₹{ride.daily}</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 p-2 rounded-lg w-full justify-center">
                <MonetizationOn fontSize="small" />
                Weekly: <span className="font-semibold text-white">₹{ride.weekly}</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 p-2 rounded-lg w-full justify-center">
                <Star fontSize="small" />
                Monthly: <span className="font-semibold text-white">₹{ride.monthly}</span>
              </div>
             
            </div>

           <Link href="https://wa.me/919798146740" target='_blank' className='w-full'>
           <Button
              variant="contained"
              sx={{
                width: '100%',
                py: 1.5,
                fontWeight: 600,
                borderRadius: 999,
                background: 'linear-gradient(to right, #fd1d1d, #fcb045)',
                color: '#fff',
                '&:hover': {
                  background: 'linear-gradient(to right, #fcb045, #fd1d1d)',
                },
              }}
            >
              Book Now
            </Button>
           </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
