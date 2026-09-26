import Image from "next/image";
import React from "react";
import { Workout } from "@/types/workout";
import WorkoutActions from "@/components/WorkoutActions";
import SavedActions from "@/components/SavedActions";

const Details = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const workouts: Workout[] = await res.json();

  const workout = workouts.find((item: Workout) => item.id === Number(id));
  if (!workout) {
    throw new Error("Not Found");
  }

  return (
    <div className="bg-black ">
      <div className="mx-4 md:mx-8 lg:mx-20">
        <div className="my-10 grid gap-8 md:my-14 md:gap-10 lg:my-20 lg:grid-cols-2">
          {/* image full left*/}
          <div className="relative h-80 overflow-hidden rounded-2xl md:h-100 lg:h-200">
            <Image src={workout.image} alt={workout.name} fill />
          </div>
          {/* other information */}
          <div>
            <h1 className="pb-5 text-3xl font-bold md:text-4xl">
              {workout.name}
            </h1>
            <p className="text-[16px] text-gray-300 pb-5">
              {workout.description}
            </p>
            <div className="flex flex-wrap gap-4 my-6">
              {workout.muscleGroups.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#c2f800] px-3 py-1.5 text-sm font-semibold text-black md:px-4 md:py-2 md:text-xl"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* table- parts */}
            <div className="my-10 rounded-2xl border  border-zinc-800">
              <div className="flex items-center justify-between gap-4 border border-zinc-600 bg-blue-950 px-3 py-3 text-sm md:px-5 md:py-5 md:text-base">
                <h3>EQUIPMENT</h3>
                <p>{workout.equipment}</p>
              </div>
              <div className="flex items-center justify-between gap-4 border border-zinc-600 bg-blue-950 px-3 py-3 text-sm md:px-5 md:py-5 md:text-base">
                <h3>DIFFICULTY</h3>
                <p>{workout.difficulty}</p>
              </div>
              <div className="flex items-center justify-between gap-4 border border-zinc-600 bg-blue-950 px-3 py-3 text-sm md:px-5 md:py-5 md:text-base">
                <h3>SETS</h3>
                <p>{workout.sets}</p>
              </div>
              <div className="flex items-center justify-between gap-4 border border-zinc-600 bg-blue-950 px-3 py-3 text-sm md:px-5 md:py-5 md:text-base">
                <h3>REPS</h3>
                <p>{workout.reps}</p>
              </div>
              <div className="flex items-center justify-between gap-4 border border-zinc-600 bg-blue-950 px-3 py-3 text-sm md:px-5 md:py-5 md:text-base">
                <h3>DURATION</h3>
                <p>{workout.duration} min</p>
              </div>
              <div className="flex items-center justify-between gap-4 border border-zinc-600 bg-blue-950 px-3 py-3 text-sm md:px-5 md:py-5 md:text-base">
                <h3>CALORIES</h3>
                <p>{workout.caloriesBurned} kcal</p>
              </div>
              <div className="flex items-center justify-between gap-4 border border-zinc-600 bg-blue-950 px-3 py-3 text-sm md:px-5 md:py-5 md:text-base">
                <h3>RATING</h3>
                <p>{workout.rating}</p>
              </div>
            </div>

            {/* instructions part */}
            <div className="space-y-3">
              <h1 className="text-xl font-bold md:text-2xl">INSTRUCTIONS</h1>

              <ol className="list-decimal space-y-3 pl-5">
                {workout.instructions.map((item, ind) => (
                  <li key={ind} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* button  */}
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-5">
              <WorkoutActions workout={workout} />

              <SavedActions workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
