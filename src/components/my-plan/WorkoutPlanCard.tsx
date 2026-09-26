"use client";

import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/types/workout";
import { Check, Clock3, Flame, Star, X } from "lucide-react";

interface WorkoutPlanCardProps {
  item: Workout;
  activeTab: "today" | "saved";
  onDone?: (id: number) => void;
  onRemove: (id: number) => void;
}

const WorkoutPlanCard = ({
  item,
  activeTab,
  onDone,
  onRemove,
}: WorkoutPlanCardProps) => {
  return (
    <div className="grid grid-cols-1 items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 md:grid-cols-[160px_1fr] lg:grid-cols-[180px_1fr_auto] lg:gap-6">
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-xl md:h-32">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-white">{item.name}</h3>

        <p className="text-sm text-gray-400">
          {item.muscleGroups.join(" • ")} • {item.equipment}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 md:gap-6">
          <span className="flex items-center gap-2">
            <Clock3 size={16} />
            {item.duration} min
          </span>

          <span className="flex items-center gap-2">
            <Flame size={16} />
            {item.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-2">
            <Star size={16} />
            {item.rating}
          </span>
        </div>
      </div>

      {/* Actions part */}

      <div className="flex items-center gap-2 whitespace-nowrap">
        <Link
          href={`/workout/${item.id}`}
          className="rounded-full border border-zinc-700 px-3 py-2 text-xs font-semibold text-white transition hover:border-gray-500 md:px-4 md:text-sm"
        >
          VIEW DETAILS
        </Link>

        {activeTab === "today" && (
          <button
            onClick={() => onDone?.(item.id)}
            className="flex items-center gap-1 rounded-full bg-[#c2f800] px-3 py-2 text-xs font-semibold text-black transition hover:bg-[#d0ff33] md:gap-2 md:px-4 md:text-sm"
          >
            <Check size={15} />
            MARK AS DONE
          </button>
        )}

        <button
          onClick={() => onRemove(item.id)}
          className="flex shrink-0 items-center justify-center p-2 text-gray-400 transition hover:text-red-500"
        >
          <X size={19} />
        </button>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;
