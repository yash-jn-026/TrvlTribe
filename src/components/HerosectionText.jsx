import React from "react";
import Button from "./button";
import SearchBar from "./SearchBar";

function HeroSectiontext() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className=" flex flex-col space-y-10 items-center tracking-wide text-white md:text-5xl font-poppins font-bold leading-relaxed text-3xl">
      <h1 className="">Discover the most engaging places</h1>

      <Button label="Discover on 3D Globe" onClick={handleClick} />

        <div className="pt-16 px-4"><SearchBar/></div>
      
    </div>
  );
}

export default HeroSectiontext;
