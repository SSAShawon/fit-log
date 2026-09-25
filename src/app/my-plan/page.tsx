"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/types/workout";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/components/context/WorkoutContext";

const MyPlan = () => {
  const {
    addWorkout,
    setAddWorkout,
    saveWorkout,
    setSaveWorkout,
    activeTab,
    setActiveTab,
  } = useContext(WorkoutContext)!;

  const [sortBy, setSortBy] = useState("duration");

  const handleRemove = (id: number) => {
    const updatedPlan = addWorkout.filter((item: Workout) => item.id !== id);

    setAddWorkout(updatedPlan);

    toast.success("Workout removed from Today's Plan");
  };

  const activePlan = activeTab === "today" ? addWorkout : saveWorkout;

  const sortedPlan = [...activePlan].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return a.rating - b.rating;
    }

    return 0;
  });

  const totalMinutes = activePlan.reduce(
    (total, item) => total + item.duration,
    0,
  );

  const totalCalories = activePlan.reduce(
    (total, item) => total + item.caloriesBurned,
    0,
  );

  return (
    <div className="bg-black px-10 py-10 text-white">
      {/* Header */}
      <div>
        <h1 className="pt-8 pb-5 text-4xl font-bold">MY PLAN</h1>

        <p className="text-sm text-gray-300">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="my-5 grid grid-cols-3 border border-zinc-900 bg-zinc-900 p-5 rounded-2xl">
        <div>
          <h2 className="py-2 text-xs text-gray-300">EXERCISE</h2>

          <h4 className="py-2 text-4xl font-bold text-[#c2f800]">
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

      {/* Todays plan and  Saved section  */}
      <div className="my-5 flex items-center justify-between">
        <div className="flex w-fit rounded-xl border border-zinc-800 bg-zinc-900 p-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`rounded-xl px-5 py-2 text-sm font-semibold ${
              activeTab === "today" ? "bg-gray-300 text-black" : "text-gray-400"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-xl px-5 py-2 text-sm font-semibold ${
              activeTab === "saved" ? "bg-gray-300 text-black" : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex min-w-40 cursor-pointer items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#c2f800]/50"
          >
            <span>
              Sort By:{" "}
              <span className="text-[#c2f800]">
                {sortBy === "duration"
                  ? "Duration"
                  : sortBy === "calories"
                    ? "Calories"
                    : "Rating"}
              </span>
            </span>

            <span className="text-gray-400">⌄</span>
          </div>

          <ul
            tabIndex={0}
            onClick={() => (document.activeElement as HTMLElement)?.blur()}
            className="dropdown-content menu z-10 mt-2 w-44 rounded-xl border border-zinc-800 bg-zinc-950 p-2 shadow-xl"
          >
            <li>
              <button tabIndex={0} onClick={() => setSortBy("duration")}>Duration</button>
            </li>
            <li>
              <button tabIndex={0} onClick={() => setSortBy("calories")}>Calories</button>
            </li>
            <li>
              <button tabIndex={0} onClick={() => setSortBy("rating")}>Rating</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Content of Todays Plan*/}
      <div>
        {activeTab === "today" ? (
          addWorkout.length === 0 ? (
            <div className="my-8 flex flex-col items-center justify-center border-2 border-dotted border-gray-800 p-20 text-center">
              <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>

              <p className="mt-2 text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 rounded-full bg-[#c2f800] px-5 py-3 my-8 font-bold text-black"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {sortedPlan.map((item: Workout) => (
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

                  {/* Information */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">
                      {item.name}
                    </h3>

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

                    <button
                      onClick={() => {
                        const updatedPlan = addWorkout.filter(
                          (planItem) => planItem.id !== item.id,
                        );

                        setAddWorkout(updatedPlan);

                        toast.success(`${item.name} marked as done`);
                      }}
                      className="rounded-full bg-[#c2f800] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#d0ff33]"
                    >
                      ✓ MARK AS DONE
                    </button>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="px-3 py-3 text-2xl text-gray-400 transition hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : // Content  Saved

        saveWorkout.length === 0 ? (
          <div className="my-8 flex flex-col items-center justify-center border-2 border-dotted border-gray-800 p-20 text-center">
            <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>

            <p className="mt-2 text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 rounded-full bg-[#c2f800] px-5 py-3 my-8 font-bold text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedPlan.map((item: Workout) => (
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

                  <button
                    onClick={() => {
                      const updatedSaved = saveWorkout.filter(
                        (savedItem) => savedItem.id !== item.id,
                      );

                      setSaveWorkout(updatedSaved);

                      toast.success("Workout removed from Saved");
                    }}
                    className="px-3 py-3 text-2xl text-gray-400 transition hover:text-red-500"
                  >
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
