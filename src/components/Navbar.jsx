import React from "react";
import Logo from "../assets/logo.svg";
import profileIcon from "../assets/profile.svg";

function Navbar() {
  return (
    <div className="flex flex-row justify-between  py-4">
      <div className=" order-2 flex flex-row justify-center items-center md:order-1">
        <img src={Logo} className="flex " alt="" srcset="" />
      </div>

      <div className="md:hidden order-1">
        <button className="group h-15 w-10 rounded-lg">
          <div className="grid justify-items-center gap-1.5">
            <span className="h-1 w-8 rounded-full bg-white transition group-hover:rotate-45 group-hover:translate-y-2.5"></span>
            <span className="h-1 w-8 rounded-full bg-white group-hover:scale-x-0 transition"></span>
            <span className="h-1 w-8 rounded-full bg-white group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
          </div>
        </button>
      </div>

      <div className="hidden md:flex flex-row justify-center items-center md:order-2 text-gray-300 ">
        <ul className=" flex font-poppins  space-x-4 flex-row ">
          <li className="flex">Home</li>
          <li className="flex">Hotel</li>
          <li className="flex">Restaurants</li>
          <li className="flex">Tours</li>
          <li className="flex">Destinations</li>
          <li className="flex">Activities</li>
          <li className="flex">Contact</li>
        </ul>
      </div>

      <div className="profile flex flex-row space-x-4 justify-center items-center order-3 ">
        <div className="hidden md:inline-flex md:flex-col text-gray-400 leading-relaxed text-xs ">
          <h1 className="">Holla</h1>
          <h2 className="">Ales Nesetril</h2>
        </div>
        <div className="flex-row">
          <img src={profileIcon} className="rounded-full" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
