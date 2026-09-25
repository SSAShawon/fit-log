"use client";

import { useContext, useState } from "react";
import { Workout } from "@/types/workout";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/components/context/WorkoutContext";
import PlanStats from "@/components/my-plan/PlanStats";
import PlanTabs from "@/components/my-plan/PlanTabs";
import EmptyPlan from "@/components/my-plan/EmptyPlan";
import WorkoutPlanCard from "@/components/my-plan/WorkoutPlanCard";

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

  return (
    <div className="bg-black px-10 py-10 text-white">
      {/* Header */}
      <div>
        <h1 className="pt-8 pb-5 text-4xl font-bold">MY PLAN</h1>

        <p className="text-sm text-gray-300">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <PlanStats activePlan={activePlan} />

      <PlanTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Content of Todays Plan*/}
      <div>
        {activeTab === "today" ? (
          addWorkout.length === 0 ? (
            <EmptyPlan />
          ) : (
            <div className="space-y-4">
              {sortedPlan.map((item: Workout) => (
                <WorkoutPlanCard
                  key={item.id}
                  item={item}
                  activeTab="today"
                  onDone={(id) => {
                    const updatedPlan = addWorkout.filter(
                      (planItem) => planItem.id !== id,
                    );

                    setAddWorkout(updatedPlan);

                    toast.success(`${item.name} marked as done`);
                  }}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          )
        ) : // Content  Saved

        saveWorkout.length === 0 ? (
          <EmptyPlan />
        ) : (
          <div className="space-y-4">
            {sortedPlan.map((item: Workout) => (
              <WorkoutPlanCard
                key={item.id}
                item={item}
                activeTab="saved"
                onRemove={(id) => {
                  const updatedSaved = saveWorkout.filter(
                    (savedItem) => savedItem.id !== id,
                  );

                  setSaveWorkout(updatedSaved);

                  toast.success("Workout removed from Saved");
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlan;
