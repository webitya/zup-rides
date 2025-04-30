'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const slides = [
  {
    id: 1,
    title: 'Ride the City in Style',
    desc: 'Premium bikes delivered to your location.',
    image: '/sexy-brunette-woman-leather-jacket-sitting-retro-style-motorcycle-beautiful-sunny-day.webp',
  },
  {
    id: 2,
    title: 'Escape into Nature',
    desc: 'Adventure-ready bikes for wild getaways.',
    image: '/sexy-brunette-woman-leather-jacket-sitting-retro-style-motorcycle-beautiful-sunny-day.webp',
  },
  {
    id: 3,
    title: 'Eco-Friendly Commuting',
    desc: 'Electric bikes to stay fast, fresh, and green.',
    image: '/sexy-brunette-woman-leather-jacket-sitting-retro-style-motorcycle-beautiful-sunny-day.webp',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrent(index);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="relative w-full h-[220px] md:h-[70vh] overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full z-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-2">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-2xl text-white/90 max-w-xl"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {slide.desc}
                </motion.p>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-4 sm:px-1 z-10">
        <IconButton
          onClick={prevSlide}
          className="!bg-black/40 hover:!bg-black/60 text-white"
          aria-label="Previous"
        >
          <ChevronLeftIcon fontSize="large" />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          className="!bg-black/40 hover:!bg-black/60 text-white"
          aria-label="Next"
        >
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-white scale-125 shadow-md'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
