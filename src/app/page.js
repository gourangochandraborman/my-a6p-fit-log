import Image from 'next/image';
import React from 'react';
// import Card from './components/Card';

const homepage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[30]">
      <section className="relative overflow-hidden rounded-3xl border border-[#1b2233] bg-[#0B1020]">
        <div className="grid lg:grid-cols-2 gap-10 items-center p-8 md:p-12 lg:p-16">

          {/* Left Content */}
          <div>
            <span className="inline-block text-[#C8FF00] text-xs font-bold tracking-[0.2em] uppercase mb-6">
              WORKOUT LIBRARY
            </span>

            <h1 className="text-white uppercase font-black leading-[0.9] tracking-tight text-5xl md:text-6xl lg:text-7xl max-w-xl ffo">
              TRAIN WITH INTENT. LOG
              <br />
              EVERY SET.
            </h1>

            <p className="mt-8 text-gray-400 text-lg max-w-lg leading-relaxed">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <button className="mt-10 bg-[#C8FF00] hover:bg-lime-300 text-black font-bold uppercase text-sm px-8 py-4 rounded-xl transition-all duration-300">
              BROWSE WORKOUTS
            </button>
          </div>

          {/* Right Image */}
          <div className=" flex justify-center lg:justify-end loading-eager ">
            <Image
              src= "/banner.png"
              alt="Workout"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>

  

  );
};

export default homepage;

