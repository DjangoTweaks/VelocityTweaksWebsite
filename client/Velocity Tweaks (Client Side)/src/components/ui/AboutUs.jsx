import React from "react";
import FadeInUpwardsText from "./FadeInUpwardsText";

export default function AboutUs() {
  return (
    <div
      className="bg-gradient-to-b from-[#000000] from-20% to-[#0a0303] top-80%"
      id="aboutus"
    >
      <div className="" >
        <div className="pt-36">
          <div className="w-12 h-[2px]  bg-gray-400 mx-auto mb-8"></div>
          <FadeInUpwardsText text="About Us" fadeClass="flex justify-center pt-12 text-white font-Inter text-7xl font-semibold">
          </FadeInUpwardsText>
        </div>

        <div className="flex justify-center pt-16 pb-36 text-white w-full">
          <p className="w-full md:w-1/3 text-center tracking-wider font-light text-xl leading-9 font-Roboto">
            Our journey began with a passion for unlocking the ultimate
            performance in gaming and computing. Through continuous
            experimentation and variations, we discovered the secrets to
            minimizing delay, maximizing FPS, and achieving the best computer
            optimizations. We can now proudly present the best and most
            affordable tweaking utility on the market, to unlock your PC's
            full potential.
          </p>
        </div>
      </div>
    </div>
  );
}
