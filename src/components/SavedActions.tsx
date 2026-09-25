"use client";

import { Workout } from "@/types/workout";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/components/context/WorkoutContext";
import { Bookmark } from "lucide-react";

const SavedActions = ({ workout }: { workout: Workout }) => {
  const { saveWorkout, setSaveWorkout } = useContext(WorkoutContext)!;

  const handleSave = () => {
    const alreadySaved = saveWorkout.some(
      (item: Workout) => item.id === workout.id,
    );

    if (alreadySaved) {
      toast.warning("Already saved for later");
      return;
    }

    const updatedSaved = [...saveWorkout, workout];

    setSaveWorkout(updatedSaved);

    toast.success("Saved for later");
  };

  return (
    <button
      onClick={handleSave}
      className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 font-bold text-white"
    >
      <Bookmark size={16} />
      Save for later
    </button>
  );
};

export default SavedActions;
