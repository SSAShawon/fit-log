import React from "react";
import logo from "../image/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
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
              <Link href="/">Workout</Link>
            </li>
            <li>
              <Link href="/my-plan">My plan</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <div className="flex items-center gap-2">
            <Link href="/my-plan">Plan</Link>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border bg-yellow-300 border-yellow-300  text-black">0</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/my-plan">Saved</Link>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border  border-white ">0</span>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
};

export default Navbar;
