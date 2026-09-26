import Link from "next/link";
import React from "react";


const datacardPromise = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  return res.json();
};



const Card = async () => {
  const data = await datacardPromise();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">


      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tight">
          THE LIBRARY
        </h1>

        <p className="text-[#7C8499] mt-2 text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}

      

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* {data.map((item) => (
          <div
            key={item.id}
            className="bg-[#0B1020] border border-[#1B2233] rounded-3xl overflow-hidden hover:border-[#C8FF00]/50 transition-all duration-300 cursor-pointer"
          > */}

        {data.map((item) => (
          <Link href={`/workouts/${item.id}`} key={item.id}>
          
            <div className="bg-[#0B1020] border border-[#1B2233] rounded-3xl overflow-hidden cursor-pointer hover:border-[#C8FF00]/50 transition-all">


              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[220px] object-cover"
              />

              {/* Content */}
              <div className="p-5">
                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.muscleGroups.map((group, index) => (
                    <span
                      key={index}
                      className="bg-[#C8FF00] text-black text-[11px] font-bold uppercase px-3 py-1 rounded-full"
                    >
                      {group}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-white text-[30px] font-black uppercase leading-none">
                  {item.name}
                </h2>

                {/* Equipment */}
                <p className="text-[#7C8499] text-sm mt-2">
                  {item.equipment}
                </p>

                {/* Divider */}
                <div className="border-t border-[#1B2233] my-5"></div>

                {/* Footer Stats */}
                <div className="flex items-center gap-5 text-[#8B93A7] text-sm">
                  <span>⏱ {item.duration} min</span>
                  <span>🔥 {item.caloriesBurned} kcal</span>
                  <span>⭐ {item.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section >
  );
};

export default Card;