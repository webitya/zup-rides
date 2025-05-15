'use client';

import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';

export default function DiscoverSection() {
  return (
    <section className="bg-white dark:bg-black py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">
            Discover Ranchi Like Never Before!
          </span>
          <br className="hidden md:block" />
          <span className="text-teal-600 dark:text-teal-400 text-base md:text-lg">
            Renting with Ranchi Rides is the Best Choice.
          </span>
        </h2>

        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6">
          Ride into the heart of Ranchi and uncover the city’s hidden charms at your own pace.
          Ranchi Rides offers high-quality, stylish bikes that suit your lifestyle.
          Enjoy more than just a ride — you’ll experience freedom, joy, and adventure.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="tel:+919798146740" >
          <button className="flex items-center justify-center gap-2 px-5 py-2 text-white bg-teal-600 hover:bg-teal-700 rounded-md text-sm font-medium transition-all">
            <DirectionsBikeIcon fontSize="small" />
            Rent a Bike
          </button>
          </Link>
         <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1537790098977!2d85.34509127541982!3d23.353530379008957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1a79ee0b42d%3A0xfb2091245f88b76!2sZupRides!5e0!3m2!1sen!2sin!4v1714812950407!5m2!1sen!2sin">
          <button className="flex items-center justify-center gap-2 px-5 py-2 border border-teal-600 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900 rounded-md text-sm font-medium transition-all">
            <LocationOnIcon fontSize="small" />
            Find a Location
          </button>
         </Link>
        </div>
      </div>
    </section>
  );
}
