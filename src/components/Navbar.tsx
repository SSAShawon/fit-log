"use client";
import logo from "../image/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { WorkoutContext } from "@/components/context/WorkoutContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { addWorkout, saveWorkout } = useContext(WorkoutContext)!;
  const pathname = usePathname();
  return (
    <div>
      <div className="navbar bg-black shadow-sm fixed top-0 z-50 w-full px-10 py-3 border-b border-zinc-800">
        <div className="navbar-start">
          <a className="flex items-center gap-2">
            <Image src={logo} alt="Workout Logo" className="h-10 w-10" />

            <span className="text-2xl font-bold">FITLOG</span>
          </a>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <Link
                href="/"
                className={pathname === "/" 
                  ? "rounded-full bg-[#c2f800]/10 px-3 py-2 text-[#c2f800]" 
                  : "text-white"
                }
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href="/my-plan"
                className={
                  pathname === "/my-plan" 
                  ? "rounded-full bg-[#c2f800]/10 px-3 py-2 text-[#c2f800]" 
                  : "text-white"
                }
              >
                My plan
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <div className="flex items-center gap-2">
            <Link href="/my-plan">Plan</Link>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border bg-yellow-300 border-yellow-300  text-black">
              {addWorkout.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/my-plan">Saved</Link>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border  border-white ">
              {saveWorkout.length}
            </span>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
};

export default Navbar;
