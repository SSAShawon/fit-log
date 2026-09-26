import React from "react";
import Image from "next/image";
import logo from "../image/banner.png";

import { ArrowRight } from "lucide-react";


const Hero = () => {
  return (
    <div className="bg-black px-4 py-10 text-white md:px-8 md:py-14 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-10xl rounded-2xl bg-zinc-900 px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
        <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row lg:gap-10">
          <div>
            <h1 className="text-sm py-5 text-[#c2f800]">WORKOUT LIBRARY</h1>
            <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="py-6 text-gray-400">
              <i>
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </i>
            </p>
            <a
              href="#library"
              className="btn  bg-[#c2f800] hover:bg-yellow-400 text-black"
            >
              BROWSE WORKOUTS <ArrowRight size={18} />
            </a>
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
