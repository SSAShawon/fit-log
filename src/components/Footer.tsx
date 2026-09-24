import React from "react";
import logo from "../image/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="bg-black px-10 py-6 text-white border-t border-zinc-800">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Workout Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold">FITLOG</span>
          </div>

          {/* Right */}
          <h3 className="text-sm text-gray-400">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
