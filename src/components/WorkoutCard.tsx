import React from "react";
import { Workout } from "@/types/workout";
import Image from "next/image";

const WorkoutCard = ({ workout }: { workout: Workout }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        {/* Image */}
        <div className=" relative h-90 w-full bg-zinc-800">
            <Image
            src={workout.image}
            alt={workout.name}
            fill
            
            />
            </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-2 my-6">
            {workout.muscleGroups.map((item)=>(
                <span key={item} className="rounded-full bg-[#c2f800] px-3 py-1 text-xs font-semibold text-black">{item}</span>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{workout.name}</h3>
            <p className="mt-2 text-sm text-gray-400">{workout.equipment}</p>
          </div>
          <div className="my-5 border-t border-zinc-800"></div>

          <div className="flex items-center text-sm text-gray-300 gap-8">
            <div className="flex items-center gap-2">
              <span>◷</span>
              <span>{workout.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔥</span>
              <span>{workout.caloriesBurned}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>★</span>
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
