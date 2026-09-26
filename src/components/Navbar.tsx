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
      <div className="navbar fixed top-0 z-50 w-full border-b border-zinc-800 bg-black px-4 py-3 shadow-sm md:px-8 lg:px-10">
        
        {/* Logo */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Workout Logo"
              className="h-9 w-9 md:h-10 md:w-10"
            />

            <span className="text-xl font-bold md:text-2xl">FITLOG</span>
          </Link>
        </div>

        {/* Workouts + My Plan */}
        <div className="navbar-center">
          <ul className="menu menu-horizontal gap-1 px-1 md:gap-5">
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "rounded-full bg-[#c2f800]/10 px-3 py-2 text-sm text-[#c2f800] md:text-base"
                    : "px-3 py-2 text-sm text-white md:text-base"
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
                    ? "rounded-full bg-[#c2f800]/10 px-3 py-2 text-sm text-[#c2f800] md:text-base"
                    : "px-3 py-2 text-sm text-white md:text-base"
                }
              >
                My plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Plan + Saved */}
        <div className="navbar-end hidden gap-5 lg:flex">
          <div className="flex items-center gap-2">
            <Link href="/my-plan">Plan</Link>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border bg-[#c2f800] text-black">
              {addWorkout.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/my-plan">Saved</Link>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white">
              {saveWorkout.length}
            </span>
          </div>
        </div>

        {/* Mobile */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-white"
            >
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-10 mt-3 w-48 rounded-box border border-zinc-800 bg-zinc-950 p-2 shadow-xl"
            >
              <li>
                <Link href="/my-plan" className="text-white">
                  Plan
                  <span className="ml-auto rounded-full bg-[#c2f800] px-2 text-black">
                    {addWorkout.length}
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/my-plan" className="text-white">
                  Saved
                  <span className="ml-auto rounded-full border border-white px-2">
                    {saveWorkout.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Space for fixed navbar */}
      <div className="h-16"></div>
    </div>
  );
};

export default Navbar;