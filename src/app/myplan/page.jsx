"use client";

import { useEffect, useState } from "react";

export default function MyPlanPage() {
  const [tab, setTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");

  const [todayPlan, setTodayPlan] = useState([]);
  const [savedPlan, setSavedPlan] = useState([]);

  useEffect(() => {
    const today =
      JSON.parse(localStorage.getItem("todayPlan")) || [];

    const saved =
      JSON.parse(localStorage.getItem("savedPlan")) || [];

    setTodayPlan(today);
    setSavedPlan(saved);
  }, []);

  const currentData =
    tab === "today" ? [...todayPlan] : [...savedPlan];

  currentData.sort((a, b) => {
    if (sortBy === "duration")
      return b.duration - a.duration;

    if (sortBy === "calories")
      return b.caloriesBurned - a.caloriesBurned;

    if (sortBy === "rating")
      return b.rating - a.rating;

    return 0;
  });

  const totalMinutes = currentData.reduce(
    (acc, item) => acc + item.duration,
    0
  );

  const totalCalories = currentData.reduce(
    (acc, item) => acc + item.caloriesBurned,
    0
  );

  return (
    <section className="min-h-screen bg-[#050A14] text-white container mx-auto">

      <div className="container mx-auto px-4 py-14">

        <h1 className="text-6xl font-black uppercase">
          My Plan
        </h1>

        <p className="text-[#8B93A7] mt-2">
          Cap of five lifts for today. Finish them,
          then load more.
        </p>

        {/* Stats */}

        <div className="mt-10 border border-[#1B2233] rounded-3xl overflow-hidden grid md:grid-cols-3">

          <div className="p-8">
            <p className="text-[#8B93A7]">
              Exercises
            </p>

            <h2 className="text-[#C8FF00] text-6xl font-black mt-2">
              {currentData.length}
            </h2>
          </div>

          <div className="p-8 border-l border-[#1B2233]">
            <p className="text-[#8B93A7]">
              Minutes
            </p>

            <h2 className="text-6xl font-black mt-2">
              {totalMinutes}
            </h2>
          </div>

          <div className="p-8 border-l border-[#1B2233]">
            <p className="text-[#8B93A7]">
              Calories
            </p>

            <h2 className="text-6xl font-black mt-2">
              {totalCalories}
            </h2>
          </div>

        </div>

        {/* Tabs */}

        <div className="flex justify-between items-center mt-10">

          <div className="bg-[#111827] p-1 rounded-2xl flex">

            <button
              onClick={() => setTab("today")}
              className={`px-8 py-3 rounded-xl ${
                tab === "today"
                  ? "bg-[#1F2937] text-white"
                  : "text-[#8B93A7]"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setTab("saved")}
              className={`px-8 py-3 rounded-xl ${
                tab === "saved"
                  ? "bg-[#1F2937] text-white"
                  : "text-[#8B93A7]"
              }`}
            >
              Saved
            </button>

          </div>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="bg-[#111827] border border-[#1B2233] rounded-xl px-4 py-3"
          >
            <option value="duration">
              Duration
            </option>

            <option value="calories">
              Calories
            </option>

            <option value="rating">
              Rating
            </option>
          </select>

        </div>

        {/* Cards */}

        {currentData.length === 0 ? (
          <div className="border border-dashed border-[#1B2233] rounded-3xl mt-10 h-[400px] flex flex-col justify-center items-center">

            <h2 className="text-5xl font-black uppercase">
              Nothing Here Yet
            </h2>

            <p className="text-[#8B93A7] mt-3">
              Browse the library and add a lift to
              get today moving.
            </p>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 ">

            {currentData.map((item) => (
              <div
                key={item.id}
                className="bg-[#0B1020] border border-[#1B2233] rounded-3xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[220px] object-cover"
                />

                <div className="p-5">

                  <h2 className="text-2xl font-black uppercase">
                    {item.name}
                  </h2>

                  <p className="text-[#8B93A7] mt-2">
                    {item.equipment}
                  </p>

                  <div className="border-t border-[#1B2233] my-4"></div>

                  <div className="flex gap-4 text-[#8B93A7]">
                    <span>
                      ⏱ {item.duration}
                    </span>

                    <span>
                      🔥 {item.caloriesBurned}
                    </span>

                    <span>
                      ⭐ {item.rating}
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </section>
  );
}