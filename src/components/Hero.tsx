import React from "react";
import Image from "next/image";
import logo from "../image/banner.png";
const Hero = () => {
  return (
    <div className="bg-black px-10 py-10 text-white">
      <div className="mx-auto max-w-10xl rounded-2xl bg-zinc-900 px-10 py-10">
        <div className="flex flex-row items-center justify-between gap-10">
          <div>
            <h1 className="text-sm py-5 text-[#c2f800]">
              WORKOUT LIBRARY
            </h1>
            <h1 className="text-5xl font-bold">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="py-6 text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>
            <button className="btn  bg-[#c2f800] hover:bg-yellow-400 text-black">
              Explore Workouts
            </button>
          </div>
          <Image
            alt="workOut"
            src={logo}
            className="w-full max-w-sm rounded-lg "
          />
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
