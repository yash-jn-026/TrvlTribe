import React from 'react';
import Navbar from '../components/Navbar';
import bgImage from '../assets/bg-image.svg';
import HeroSectiontext from '../components/heroSectiontext';


function Herosection() {
  return (
    <div className="relative h-fit px-2">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Background" className="w-full h-96  object-cover rounded-b-3xl" />
      </div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Hero Section Text */}
      <div className="relative z-20 flex items-center py-7 justify-center text-center h-fit drop-shadow-2xl rounded-lg">
        <HeroSectiontext />
      </div>
    </div>
  );
}

export default Herosection;
