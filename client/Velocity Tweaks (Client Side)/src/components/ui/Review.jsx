import React from "react";
import ControlledCarousel from "../ReviewCarousel";

export default function Review() {
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 3
  //   };

  return (
    <div>
      <div className="md:pt-24  bg-gradient-to-b from-[#0a0303] from-20% to-[#000000] top-80% ">
        <div className="flex justify-center bg-gradient-to-r from-sky-600 to-red-600 bg-clip-text text-transparent font-Inter font-medium opacity-80 md:text-4xl text-xl">
          But Don't Take Our Word For It
        </div>
        <div className="flex justify-center pt-1 md:pt-4 text-white font-Inter text-3xl  md:text-8xl font-semibold">
          Customer Testimonials
        </div>
      </div>

      <div className="mx-auto py-12 ">
        <ControlledCarousel></ControlledCarousel>
      </div>
    </div>
  );
}
