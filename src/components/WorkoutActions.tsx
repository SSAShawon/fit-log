"use client";
import { Workout } from '@/types/workout';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { WorkoutContext } from '@/components/context/WorkoutContext';

const WorkoutActions = ({workout}:{workout: Workout}) => {
    const { addWorkout, setAddWorkout } = useContext(WorkoutContext)!;
    const handleAddToPlan = () => {
    const alreadyExists = addWorkout.some(
        (item: Workout) => item.id === workout.id
    );

    if (alreadyExists) {
        toast.warning("Already in Today's Plan");
        return;
    }

    setAddWorkout([...addWorkout, workout]);

    toast.success("Added to Today's Plan");
};
        
    return (
        
              <button
              onClick={handleAddToPlan}
              className="rounded-xl text-sm bg-[#c2f800] px-5 py-4 font-bold text-black">
                + Add to today&apos;s plan
            </button>
        
    );
};

export default WorkoutActions;