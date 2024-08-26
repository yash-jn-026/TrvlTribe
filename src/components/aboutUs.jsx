import React from "react";
import aboutUsImage from "../assets/aboutUs.svg"; // Update with your image path

function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 my-8 md:my-16">
      <div className="md:w-1/2 space-y-4">
        <h2 className="font-poppins font-semibold text-2xl md:text-4xl text-[#161414]">
          About Us
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <a href="#" className="inline-block text-[#7F56D9] font-medium mt-4">
          Read more →
        </a>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src={aboutUsImage} className="w-full h-52 md:h-96  rounded-lg" alt="About Us" />
      </div>
    </div>
  );
}

export default AboutUs;
