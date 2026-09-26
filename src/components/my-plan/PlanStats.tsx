import { Workout } from "@/types/workout";

interface PlanStatsProps {
  activePlan: Workout[];
}

const PlanStats = ({ activePlan }: PlanStatsProps) => {
  const totalMinutes = activePlan.reduce(
    (total, item) => total + item.duration,
    0,
  );

  const totalCalories = activePlan.reduce(
    (total, item) => total + item.caloriesBurned,
    0,
  );

  return (
    <div className="my-5 grid grid-cols-3 rounded-2xl border border-zinc-900 bg-zinc-900 p-3 md:p-5">
      <div>
        <h2 className="py-2 text-[10px] text-gray-300 md:text-xs">EXERCISE</h2>

        <h4 className="py-2 text-4xl font-bold text-[#c2f800] md:text-4xl">
          {activePlan.length}
        </h4>
      </div>

      <div>
        <h2 className="py-2 text-xs text-gray-300">MINUTES</h2>

        <h4 className="py-2 text-4xl font-bold text-[#c2f800]">
          {totalMinutes}
        </h4>
      </div>

      <div>
        <h2 className="py-2 text-xs text-gray-300">CALORIES</h2>

        <h4 className="py-2 text-4xl font-bold text-[#c2f800]">
          {totalCalories}
        </h4>
      </div>
    </div>
  );
};

export default PlanStats;