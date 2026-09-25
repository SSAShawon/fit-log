"use client";

import React, { createContext, useState } from "react";
import { Workout } from "@/types/workout";

interface IWorkoutContext {
  addWorkout: Workout[];
  setAddWorkout: React.Dispatch<React.SetStateAction<Workout[]>>;
  saveWorkout: Workout[];
  setSaveWorkout: React.Dispatch<React.SetStateAction<Workout[]>>;
  activeTab: "today" | "saved";
  setActiveTab: React.Dispatch<React.SetStateAction<"today" | "saved">>;
}

export const WorkoutContext = createContext<IWorkoutContext | undefined>(
  undefined
);

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [addWorkout, setAddWorkout] = useState<Workout[]>([]);
  const [saveWorkout, setSaveWorkout] = useState<Workout[]>([]);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  return (
    <WorkoutContext.Provider
      value={{
        addWorkout,
        setAddWorkout,
        saveWorkout,
        setSaveWorkout,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;