"use client";

import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/types/workout";
import { Check } from "lucide-react";

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
    <div className="grid grid-cols-[180px_1fr_auto] items-center gap-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      {/* Image */}
      <div className="relative h-32 overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Information */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-white">{item.name}</h3>

        <p className="text-sm text-gray-400">
          {item.muscleGroups.join(" • ")} • {item.equipment}
        </p>

        <div className="flex items-center gap-6 text-sm text-gray-300">
          <span>◷ {item.duration} min</span>

          <span>🔥 {item.caloriesBurned} kcal</span>

          <span>★ {item.rating}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Link
          href={`/workout/${item.id}`}
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-gray-500"
        >
          VIEW DETAILS
        </Link>

        {activeTab === "today" && (
          <button
  onClick={() => onDone?.(item.id)}
  className="flex items-center gap-2 rounded-full bg-[#c2f800] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#d0ff33]"
>
  <Check size={16} />
  MARK AS DONE
</button>
        )}

        <button
          onClick={() => onRemove(item.id)}
          className="px-3 py-3 text-2xl text-gray-400 transition hover:text-red-500"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;