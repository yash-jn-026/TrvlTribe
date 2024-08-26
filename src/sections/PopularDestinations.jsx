import React from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.svg";

function PopularDestinations() {
  const destinations = [
    { img: img1, name: "Big Sur", location: "California, USA" },
    { img: img2, name: "Prescott", location: "Arizona, USA" },
    { img: img3, name: "Fort Myers", location: "Florida, USA" },
    { img: img4, name: "Tucson", location: "Arizona, USA" },
    { img: img5, name: "St. Joseph", location: "Michigan, USA" },
    { img: img6, name: "Madrid", location: "Spain" },
  ];

  return (
    <div className="flex flex-col space-y-8 px-4 md:px-16 my-8 md:my-16">
      <div className="font-poppins font-semibold text-2xl md:text-4xl text-[#161414]">
        Popular Destinations
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4   justify-center items-center">
        {destinations.map((destination, index) => (
          <div key={index} className="flex flex-col text-left ">
            <img src={destination.img} alt={destination.name} className="w-full h-auto" />
            <h1 className="font-poppins text-base text-[#161414] px-4 pt-2" >{destination.name}</h1>
            <h2 className="font-poppins text-sm text-[#979797] px-4">{ destination.location}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularDestinations;
