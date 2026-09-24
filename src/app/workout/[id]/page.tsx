import Image from "next/image";
import React from "react";
import { Workout } from "@/types/workout";

const Details = async ({params}:{params:Promise<{id: string}>}) => {

    const {id}=await params;
    console.log(id);

    const res=await fetch("https://api.abcz.workers.dev/api/fitlog")

    const workouts:Workout[] =await res.json()

    console.log(workouts)

    const workout =workouts.find((item:Workout)=> item.id===Number(id));
    if(!workout){
        throw new Error("Not Found")
    }

    console.log(workout)

  return (
    <div className="bg-black ">
      <div className="mx-20">
        <div className="grid gap-10 lg:grid-cols-2 my-20">
          {/* image full left*/}
          <div className="relative h-200  overflow-hidden rounded-2xl ">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
            />
          </div>
          {/* other information */}
          <div>
            <h1 className="text-4xl pb-5">{workout.name}</h1>
            <p className="text-[16px] text-gray-300 pb-5">{workout.description}</p>
            <div className="flex flex-wrap gap-4 my-6">
            {workout.muscleGroups.map((item)=>(
                <span key={item} className="rounded-full bg-[#c2f800] px-4 py-2 text-xl font-semibold text-black">{item}</span>
            ))}
          </div>

            {/* table- parts */}
            <div className="my-10 rounded-2xl border  border-zinc-800">
              <div className="flex justify-between border border-zinc-600 bg-blue-950 px-5 py-5">
                <h3>EQUIPMENT</h3>
                <p>{workout.equipment}</p>
              </div>
              <div className="flex justify-between border border-zinc-600 bg-blue-950 px-5 py-5">
                <h3>DIFFICULTY</h3>
                <p>{workout.difficulty}</p>
              </div>
              <div className="flex justify-between border border-zinc-600 bg-blue-950 px-5 py-5">
                <h3>SETS</h3>
                <p>{workout.sets}</p>
              </div>
              <div className="flex justify-between border border-zinc-600 bg-blue-950 px-5 py-5">
                <h3>REPS</h3>
                <p>{workout.reps}</p>
              </div>
              <div className="flex justify-between border border-zinc-600 bg-blue-950 px-5 py-5">
                <h3>DURATION</h3>
                <p>{workout.duration} min</p>
              </div>
              <div className="flex justify-between border border-zinc-600 bg-blue-950 px-5 py-5">
                <h3>CALORIES</h3>
                <p>{workout.caloriesBurned} kcal</p>
              </div>
              <div className="flex justify-between border border-zinc-600 bg-blue-950 px-5 py-5">
                <h3>RATING</h3>
                <p>{workout.rating}</p>
              </div>
            </div>

            {/* instraction part */}
            <div className="space-y-3">
              <h1 className="font-bold text-2xl">INSTRUCTIONS</h1>
              {workout.instructions.map((item,ind)=>(
                <p key={ind}>
                    {ind+1}. {item}
                </p>
              ))}
            </div>

            {/* button  */}
            <div className="mt-10 flex justify-between gap-4">
              <button className="rounded-xl text-sm bg-[#c2f800] px-5 py-4 font-bold text-black">
                + ADD TO TODAY'S PLAN
              </button>

              <button className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 font-bold text-white">
                ♡ SAVE FOR LATER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
