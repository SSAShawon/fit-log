"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/types/workout";
import { toast } from "react-toastify";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState("today");

  const [todayPlan, setTodayPlan] = useState<Workout[]>(([])
  
);
  const handleRemove=(id:number)=>{
    const updatePlan=todayPlan.filter((item)=>item.id !==id)
    localStorage.setItem("todayPlan",JSON.stringify(updatePlan))
    setTodayPlan(updatePlan)
    toast.success("Work Removed From Today's Plan")
  }

  return (
    <div className="bg-black  px-10 py-10">
      <div>
        <h1 className="text-4xl pt-8 pb-5">MY PLAN</h1>
        <p className="text-sm text-gray-300">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      {/* sum part  */}

      <div className="grid grid-cols-3 border border-zinc-900 bg-zinc-900 p-5 my-5">
        <div>
          <h2 className="text-xs py-2 text-gray-300">EXERCISE</h2>
          <h4 className="text-4xl py-2 text-[#c2f800] font-bold">
            {todayPlan.length}
          </h4>
        </div>
        <div>
          <h2 className="text-xs py-2 text-gray-300">MINUTES</h2>
          <h4 className="text-4xl py-2 text-[#c2f800] font-bold">
            {todayPlan.reduce((total, item) => total + item.duration, 0)}
          </h4>
        </div>
        <div>
          <h2 className="text-xs py-2 text-gray-300">CALORIES</h2>
          <h4 className="text-4xl py-2 text-[#c2f800] font-bold">0</h4>
        </div>
      </div>

      {/* plan and sort */}
      <div>
        {/* plan part  */}
        <div>
          {/* plan part */}
          <div className="flex w-fit rounded-xl border border-zinc-800 bg-zinc-900 p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-xl px-5 py-2 text-sm font-semibold ${
                activeTab === "today"
                  ? "bg-gray-300 text-black"
                  : "text-gray-400"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-xl px-5 py-2 text-sm font-semibold ${
                activeTab === "saved"
                  ? "bg-gray-300 text-black"
                  : "text-gray-400"
              }`}
            >
              Saved
            </button>
          </div>
        </div>

        {/* sort part  */}
        <div></div>
      </div>

      {/* big box part  */}
      <div className="my-8 border-2 border-dotted border-gray-800 p-6">
        {todayPlan.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center border-2 border-dotted border-gray-800 p-20 my-8">
            <h2>Nothing Here</h2>
            <p>Browse the library and add a lift to get today moving.</p>
            <Link
              href="/"
              className="mt-6 rounded-full bg-[#c2f800] px-6 py-3 font-bold text-black"
            >
              GO TO WORKOUTS
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {todayPlan.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[180px_1fr_auto] items-center gap-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-4"
              >
                {/* Image */}
                <div className="relative h-32 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Workout info */}
                <div className="space-y-3">
                  {/* Row 1 */}
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>

                  {/* Row 2 */}
                  <p className="text-sm text-gray-400">
                    {item.muscleGroups.join(" • ")} • {item.equipment}
                  </p>

                  {/* Row 3 */}
                  <div className="flex items-center gap-6 text-sm text-gray-300">
                    <span>◷ {item.duration} min</span>
                    <span>🔥 {item.caloriesBurned} kcal</span>
                    <span>★ {item.rating}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button className="rounded-lg border border-zinc-700 px-4 py-3 text-sm font-semibold text-white">
                    VIEW DETAILS
                  </button>

                  <button className="rounded-lg bg-[#c2f800] px-4 py-3 text-sm font-semibold text-black">
                    MARK AS DONE
                  </button>

                  <button 
                  onClick={()=>handleRemove(item.id)}
                  className="px-3 py-3 text-2xl text-gray-400 hover:text-red-500">
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlan;
