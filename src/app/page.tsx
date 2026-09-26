import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Hero />

      <Suspense
        fallback={
          <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-black text-white">
            <span className="loading loading-spinner loading-xl text-[#c2f800]"></span>

            <p className="text-xl text-gray-400">Loading workouts…</p>
          </div>
        }
      >
        <WorkoutLibrary />
      </Suspense>
    </div>
  );
};

export default Page;