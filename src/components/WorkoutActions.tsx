"use client";
import { Workout } from '@/types/workout';
import React from 'react';
import { toast } from 'react-toastify';

const WorkoutActions = ({workout}:{workout: Workout}) => {
    const handleAddToPlan = () => {
        const existingPlan =JSON.parse(
            localStorage.getItem("todayPlan") || "[]"
        )
        const alreadyExists= existingPlan.some((item:Workout)=>item.id===workout.id)

        if(alreadyExists){
            toast.warning("Already in Today's Plan")
            return;
        }
        const updatePlan =[...existingPlan,workout]
        localStorage.setItem(
            "todayPlan", JSON.stringify(updatePlan)
        )
        toast.success("Added to Today's Plan")
    };
        
    return (
        
              <button
              onClick={handleAddToPlan}
              className="rounded-xl text-sm bg-[#c2f800] px-5 py-4 font-bold text-black">
                + Add to today's plan
            </button>
        
    );
};

export default WorkoutActions;