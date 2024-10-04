import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FeaturesList } from "./BasicProduct";

export default function PremiumProduct({ onClick }) {
  const features = [
    "Full PC Optimization",
    "1000+ Performance Tweaks",
    "Enhanced Windows Tuning",
    "Full System Clean",
    "Full Network Performance Boost",
    "Enhanced Power Optimization",
  ];

  return (
    <div>
      {" "}
      {/* product two  */}
      <div className="bg-gradient-to-br from-[#00a2ff46] to-[#0ab5ff38]  bg-opacity-70 rounded-[30px] h-[600px] p-6">
        <div className="text-white font-medium font-Inter text-2xl pb-2">
          Premium
        </div>

        <div className="text-gray-400 font-Roboto pb-4 ">
          Experience the pinnacle of PC performance
        </div>

        <div className="flex font-Inter font-bold pb-4">
          <div className="flex items-center text-gray-300 text-lg pt-1 font-semibold">
            $
          </div>
          <div className="text-5xl">30</div>
        </div>

        <div className="flex flex-col  mt-8 space-y-3 text-lg">
          {features.map((feat) => (
            <FeaturesList feature={feat} />
          ))}
        </div>



        <div className="mt-6 h-[147px] pt-16">
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
