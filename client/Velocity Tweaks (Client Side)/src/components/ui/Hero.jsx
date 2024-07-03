import React from "react";
import backgroundHeroImage from "../HeroAttempt.png";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundHeroImage})` }}
    >
      {/* "background-image: url('your-image-url.jpg');" */}
      {/* <div className="relative h-screen z-10" ></div> */}

      <div className="container  mx-auto md:pt-20 pt-10">
        <div className="text-[#FFFFFF] font-Inter tracking-tight  	 font-semibold md:text-8xl text-7xl">
          Elevate
        </div>

        <div className="text-[#FC2B27] font-Inter tracking-tight 		font-semibold md:text-8xl text-7xl">
          Boost
        </div>

        <div className="text-[#07A4FF] font-Inter tracking-tight	 	font-semibold md:text-8xl  text-7xl">
          Conquer.
        </div>

        <div className="text-white  block w-[670px] tracking-wider font-light md:text-2xl w-full md:w-[700px] text-md leading-7 	md:leading-10 font-Roboto md:pt-16 pt-16">
          Unlock the full potential of your gaming rig with Velocity Tweaks, a
          leading company specializing in a utility designed to optimize your PC
          for maximum FPS. Trusted by countless professional players and
          customers, Velocity Tweaks ensures the lowest possible latency, input
          delay, and ping, making it the best choice in the scene.{" "}
        </div>

        <div className="flex mt-12 md:mt-16">
          <Link to="store">
            <button className="text-white bg-[#FC2B27] transition-all ease-in duration-75 hover:bg-[#AB1D1A]  font-Inter font-medium text-lg rounded-full  h-16  w-40 p-3">
              Buy Now
            </button>
          </Link>

          <button className="text-white bg-black border border-white border-2 transition-all ease-in duration-75 hover:bg-[#1A1A1A]  text-lg font-Inter font-medium rounded-full ml-4 h-16  w-40 p-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
