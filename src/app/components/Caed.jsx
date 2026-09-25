"use client";

import { useEffect, useState } from "react";
import {
  Clock3,
  Flame,
  Star,
} from "lucide-react";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((res) => res.json())
      .then((data) => setWorkouts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
          The Library
        </h2>

        <p className="text-[#7C8499] mt-2 text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-[#0D1220] border border-[#1A2233] rounded-3xl overflow-hidden hover:border-[#C8FF00]/40 transition-all duration-300"
          >
            {/* Image */}
            <div className="h-[250px] overflow-hidden">
              <img
                src={workout.image}
                alt={workout.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {workout.muscleGroups.map((group, index) => (
                  <span
                    key={index}
                    className="bg-[#C8FF00] text-black text-[11px] font-bold uppercase px-3 py-1 rounded-full"
                  >
                    {group}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-white text-3xl font-black uppercase leading-tight">
                {workout.name}
              </h3>

              {/* Equipment */}
              <p className="text-[#7C8499] mt-2 text-sm">
                {workout.equipment}
              </p>

              {/* Divider */}
              <div className="h-px bg-[#1A2233] my-6"></div>

              {/* Stats */}
              <div className="flex items-center gap-5 text-[#7C8499] text-sm">
                <div className="flex items-center gap-1">
                  <Clock3 size={14} />
                  <span>{workout.duration} min</span>
                </div>

                <div className="flex items-center gap-1">
                  <Flame size={14} />
                  <span>{workout.caloriesBurned} kcal</span>
                </div>

                <div className="flex items-center gap-1">
                  <Star size={14} />
                  <span>{workout.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}