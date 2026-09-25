import React from "react";
import { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

const WorkoutCard = ({ workout }: { workout: Workout }) => {
  return (
    <Link href={`workout/${workout.id}`}>
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
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
              <Clock3 size={16} />
              <span> {workout.duration} min</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame size={16} />
              <span> {workout.caloriesBurned} Kcal</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} />
              <span> {workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
