import React from "react";
import sailingImg from "../assets/sailingImg.svg"; // Update with your image paths
import climbingImg from "../assets/climbingImg.png";
import skiingImg from "../assets/s.svg";
import hikingImg from "../assets/hikingImg.svg";





function Activities() {
  return (
    <div className="flex flex-col space-y-8 px-4 md:px-16 my-8 md:my-16">
      <div className="flex justify-between items-center">
        <h1 className="font-poppins font-semibold text-2xl md:text-4xl text-[#161414]">
          Activities
        </h1>
        <a href="#" className="text-[#7F56D9] font-medium">
          View all →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <img src={sailingImg} className="w-full h-full  rounded-lg" alt="Sailing" />
          <p className="mt-4 font-poppins font-medium text-lg text-[#161414]">Sailing</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={climbingImg} className="w-full h-full rounded-lg" alt="Climbing" />
          <p className="mt-4 font-poppins font-medium text-lg text-[#161414]">Climbing</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={skiingImg} className="w-full h-full rounded-lg" alt="Skiing" />
          <p className="mt-4 font-poppins font-medium text-lg text-[#161414]">Skiing</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={hikingImg} className="w-full h-full rounded-lg" alt="Hiking" />
          <p className="mt-4 font-poppins font-medium text-lg text-[#161414]">Hiking</p>
        </div>
      </div>
    </div>
  );
}

export default Activities;
