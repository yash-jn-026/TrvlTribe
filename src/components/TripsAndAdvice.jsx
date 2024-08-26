import React from "react";
import tarvelTip1 from "../assets/tarvelTip1.svg";
import tarvelTip2 from "../assets/travelTip2.svg";



function TripsAndAdvice() {
  return (
    <div className="flex flex-col space-y-8 px-4 md:px-16 my-8 md:my-16">
      <div className="flex justify-between items-center">
        <h1 className="font-poppins font-semibold text-2xl md:text-4xl text-[#161414]">
          Travel Tips and Advice
        </h1>
        <a href="#" className="text-[#7F56D9] font-medium">
          View all →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <img src={tarvelTip1} className="w-full h-48 object-cover rounded-md" alt="East Village Ice Cream Crawl" />
          <div className="p-4">
            <h2 className="font-poppins font-semibold text-lg md:text-xl text-[#161414]">
              East Village Ice Cream Crawl
            </h2>
            <p className="text-gray-600 mt-2">
              We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every bite.
            </p>
            <div className="flex items-center mt-4 text-gray-500 text-sm">
              <span>Today</span>
              <span className="mx-2">•</span>
              <span>Maria Philips</span>
              <span className="mx-2">•</span>
              <span>2 comments</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <img src={tarvelTip2} className="w-full h-48 object-cover rounded-md" alt="Brooklyn Bridge cinematic photo walk" />
          <div className="p-4">
            <h2 className="font-poppins font-semibold text-lg md:text-xl text-[#161414]">
              Brooklyn Bridge cinematic photo walk
            </h2>
            <p className="text-gray-600 mt-2">
              This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge.
            </p>
            <div className="flex items-center mt-4 text-gray-500 text-sm">
              <span>Today</span>
              <span className="mx-2">•</span>
              <span>James Colatori</span>
              <span className="mx-2">•</span>
              <span>17 comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripsAndAdvice;
