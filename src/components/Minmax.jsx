import { ArrowDown, ArrowUp } from "@/Icons/Icons";
import React from "react";

const Minmax = ({ min, max }) => {
  return (
    <div className="flex justify-center w-1/2 gap-[120px]">
      <div className="flex items-center gap-3">
        <span className="bg-[#ffffff14] p-3 rounded-full">
        <ArrowDown />
        </span>
        <div className='flex flex-col'>
          <span className="opacity-65 font-sans text-sm">Min.</span>
          <span className="text-2xl">{min}°</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="bg-[#ffffff14] p-3 rounded-full">
        <ArrowUp />
        </span>
        <div className='flex flex-col'>
          <span className="opacity-65 font-sans text-sm">Max.</span>
          <span className="text-2xl">{max}°</span>
        </div>
      </div>
    </div>
  );
};

export default Minmax;
