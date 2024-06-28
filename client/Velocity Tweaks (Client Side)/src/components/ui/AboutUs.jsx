import React from "react";

export default function AboutUs() {
  return (
    <div
      className="bg-gradient-to-b from-[#000000] from-20% to-[#0a0303] top-80% pt-36"
      id="parent-div"
    >
      <div className="" id="123">
        <div className="pt-36">
          <div className="w-12 h-[2px]  bg-gray-400 mx-auto mb-8"></div>
          <h1 className="flex justify-center pt-12 text-white font-Inter text-7xl font-semibold">
            About Us
          </h1>
        </div>

        <div className="flex justify-center pt-16 pb-36 text-white  w-full">
          <p className="w-1/3 text-center tracking-wider font-light text-xl leading-9 font-Roboto">
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
