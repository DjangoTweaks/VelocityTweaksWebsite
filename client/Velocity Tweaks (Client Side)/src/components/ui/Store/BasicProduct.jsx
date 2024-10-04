import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { Bounce, toast } from "react-toastify";

export default function BasicProduct({ onClick }) {
  const features = [
    "Core PC Optimization",
    "Limited Performance Tweaks",
    "Basic Windows Tuning",
    "System Clean",
    "Basic Network Peformance Boost",
    "Standard Power Optimizations",
  ];

  return (
    <div>
      {" "}
      {/* product one  */}
      <div className="bg-[#292929] bg-opacity-70 rounded-[30px] h-[600px] p-6 lg:mb-[150px]">
        <div className="text-white font-medium font-Inter text-2xl pb-2 ">
          Basic
        </div>

        <div className="text-gray-400 font-Roboto pb-4 ">
          Enhance your PC's performance with essential OS, CPU, and GPU tweaks.
        </div>

        <div className="flex font-Inter font-bold pb-4 ">
          <div className="flex items-center text-gray-300 text-lg pt-1 font-semibold">
            $
          </div>
          <div className="text-5xl">14.99</div>
        </div>

        <div className="flex flex-col  mt-4 space-y-3 text-lg">
          {features.map((feat)=><FeaturesList feature={feat} ></FeaturesList>)}
        </div>

        <div className="mt-6 h-[147px] pt-14">
          <button
            onClick={onClick}
            className="bg-[#4B5257] bg-opacity-70 rounded-[20px] p-3 w-full text-center font-Inter mt-6 hover:bg-[#2d3134] hover:transition hover:ease-in hover:duration-75   "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export function FeaturesList({feature}) {
  return (
    <div className="flex">
      <CiCircleCheck size={25} className="mt-[2px]" />
      <p className="ml-1">{feature}</p>
    </div>
  );
}
