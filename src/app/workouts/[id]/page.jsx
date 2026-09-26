import React from "react";

import AddToPlanButton from "@/src/app/components/AddToPlanButton";
import SaveWorkoutButton from "@/src/app/components/SaveWorkoutButton";

const addToPlan = () => {
  const existing =
    JSON.parse(localStorage.getItem("todayPlan")) || [];

  const alreadyAdded = existing.find(
    (workout) => workout.id === item.id
  );

  if (!alreadyAdded) {
    existing.push(item);
    localStorage.setItem(
      "todayPlan",
      JSON.stringify(existing)
    );
  }
};



const WorkoutDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );

  const item = await res.json();

  return (
    <section className="min-h-screen bg-[#050A14]">
      <div className="container mx-auto px-4 py-12">

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left */}
          <div>
            <img
              src={item.image}
              alt={item.name}
              className="w-full rounded-3xl"
            />
          </div>

          {/* Right */}
          <div>

            <h1 className="text-white text-5xl font-black uppercase">
              {item.name}
            </h1>

            <p className="text-[#9CA3AF] mt-5 text-lg">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {item.muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#C8FF00] text-black px-4 py-1 rounded-full text-sm font-bold"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Table */}
            <div className="mt-8 border border-[#1B2233] rounded-3xl overflow-hidden">

              <div className="flex justify-between px-6 py-5 border-b border-[#1B2233]">
                <span className="text-[#8B93A7]">EQUIPMENT</span>
                <span className="text-white">{item.equipment}</span>
              </div>

              <div className="flex justify-between px-6 py-5 border-b border-[#1B2233]">
                <span className="text-[#8B93A7]">DIFFICULTY</span>
                <span className="text-white">{item.difficulty}</span>
              </div>

              <div className="flex justify-between px-6 py-5 border-b border-[#1B2233]">
                <span className="text-[#8B93A7]">SETS</span>
                <span className="text-white">{item.sets}</span>
              </div>

              <div className="flex justify-between px-6 py-5 border-b border-[#1B2233]">
                <span className="text-[#8B93A7]">REPS</span>
                <span className="text-white">{item.reps}</span>
              </div>

              <div className="flex justify-between px-6 py-5 border-b border-[#1B2233]">
                <span className="text-[#8B93A7]">DURATION</span>
                <span className="text-white">{item.duration} min</span>
              </div>

              <div className="flex justify-between px-6 py-5 border-b border-[#1B2233]">
                <span className="text-[#8B93A7]">CALORIES</span>
                <span className="text-white">
                  {item.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex justify-between px-6 py-5">
                <span className="text-[#8B93A7]">RATING</span>
                <span className="text-white">{item.rating}</span>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-10">
              <h2 className="text-white text-3xl font-black uppercase mb-6">
                Instructions
              </h2>

              <ol className="space-y-4 text-[#C4C8D0]">
                {item.instructions.map((step, index) => (
                  <li key={index}>
                    {index + 1}. {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              {/* <button
                // onClick={addToPlan}
                className="bg-[#C8FF00] text-black font-bold px-8 py-4 rounded-2xl"
              >
                Add to today's plan
              </button> */}

              <AddToPlanButton item={item} />

              <SaveWorkoutButton item={item} />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;