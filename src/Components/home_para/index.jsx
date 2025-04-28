'use client';

export default function DiscoverSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-6 transition-transform duration-500 hover:scale-105 hover:text-indigo-600 dark:hover:text-indigo-400">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-500 dark:from-indigo-400 dark:to-teal-400 animate-none hover:animate-pulse">
            Discover Ranchi Like Never Before!
          </span>
          <br className="hidden md:block" />
          <span className="text-indigo-500 dark:text-indigo-400">
            Renting with Ranchi Rides is the Best Choice.
          </span>
        </h2>

        <p className="text-md md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-all duration-300 hover:text-slate-800 dark:hover:text-white">
          Ride into the heart of Ranchi and uncover the city’s hidden charms at your own pace. 
          Ranchi Rides offers you high-quality, stylish bikes that suit your lifestyle. 
          With smooth booking, reliable service, and affordable pricing, you’ll enjoy more than just a ride — 
          you’ll experience freedom, joy, and adventure with every turn of the wheel.
        </p>
      </div>
    </section>
  );
}
