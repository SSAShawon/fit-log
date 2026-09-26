import React from "react";
import logo from "../image/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="border-t border-zinc-800 bg-black px-4 py-6 text-white md:px-8 lg:px-10">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        


        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Workout Logo"
            className="h-9 w-9 md:h-10 md:w-10"
          />

          <span className="text-xl font-bold md:text-2xl">FITLOG</span>
        </div>



       
        <h3 className="text-center text-xs text-gray-400 md:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </h3>
      </div>
    </div>
  );
};

export default Footer;