"use client";

import { useState } from "react";
import Link from "next/link";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState("today");
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
          <h4 className="text-4xl py-2 text-[#c2f800] font-bold">0</h4>
        </div>
        <div>
          <h2 className="text-xs py-2 text-gray-300">MINUTES</h2>
          <h4 className="text-4xl py-2 text-[#c2f800] font-bold">0</h4>
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

      <div className="flex flex-col items-center justify-center text-center border-2 border-dotted border-gray-800 p-20 my-8">
        <h2>Nothing Here</h2>
        <p>Browse the library and add a lift to get today moving.</p>
        <Link href="/" className="mt-6 rounded-full bg-[#c2f800] px-6 py-3 font-bold text-black">
          GO TO WORKOUTS
        </Link>
      </div>
    </div>
  );
};

export default MyPlan;
