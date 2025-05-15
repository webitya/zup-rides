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
    image: '/1.png',
  },
  {
    id: 2,
    title: 'Escape into Nature',
    desc: 'Adventure-ready bikes for wild getaways.',
    image: '/pv.jpg',
  },
  {
    id: 3,
    title: 'Eco-Friendly Commuting',
    desc: 'Electric bikes to stay fast, fresh, and green.',
    image: '/cp.jpg',
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
    <div className="relative w-full h-[220px] md:h-[70vh] overflow-hidden bg-black">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full z-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <motion.h2
                  className="text-2xl md:text-5xl font-bold text-teal-400 drop-shadow-lg mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  className="text-sm md:text-xl text-white/80 max-w-xl"
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
      <div className="absolute inset-0 flex justify-between items-center px-3 z-10">
        <IconButton
          onClick={prevSlide}
          className="!bg-teal-600 !text-white hover:!bg-teal-700"
          aria-label="Previous"
        >
          <ChevronLeftIcon fontSize="medium" />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          className="!bg-teal-600 !text-white hover:!bg-teal-700"
          aria-label="Next"
        >
          <ChevronRightIcon fontSize="medium" />
        </IconButton>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-teal-400 scale-125 shadow-md'
                : 'bg-white/30 hover:bg-teal-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
