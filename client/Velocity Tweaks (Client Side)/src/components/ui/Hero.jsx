import React from "react";
import backgroundHeroImage from "../HeroAttempt.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeInUpwardsText from "./FadeInUpwardsText";

export default function Hero() {
  return (
    <div
      className="bg-cover  bg-center h-screen "
      style={{ backgroundImage: `url(${backgroundHeroImage})` }}
    >
      {/* "background-image: url('your-image-url.jpg');" */}
      {/* <div className="relative h-screen z-10" ></div> */}

      <div className="container  mx-auto md:pt-20 pt-10">
        {/* <motion.div
          initial={{ opacity: 0, y:15 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true }}
          transition={{duration: 0.3}}
          className="text-[#FFFFFF] font-Inter tracking-tight  	 font-semibold md:text-8xl text-7xl"
        >
          Elevate
        </motion.div> */}

        <FadeInUpwardsText
          text="Elevate"
          fadeClass="text-[#FFFFFF] font-Inter tracking-tight font-semibold md:text-8xl text-7xl"
        ></FadeInUpwardsText>

        {/* 
        <div >
          Boost
        </div> */}

        <FadeInUpwardsText
          text="Boost"
          fadeClass="text-[#FC2B27] font-Inter tracking-tight 		font-semibold md:text-8xl text-7xl"
        ></FadeInUpwardsText>

        <FadeInUpwardsText
          text="Conquer"
          fadeClass="text-[#07A4FF] font-Inter tracking-tight font-semibold md:text-8xl  text-7xl"
        ></FadeInUpwardsText>

        <FadeInUpwardsText
          text=" Unlock the full potential of your gaming rig with Velocity Tweaks, a
          leading company specializing in a utility designed to optimize your PC
          for maximum FPS. Trusted by countless professional players and
          customers, Velocity Tweaks ensures the lowest possible latency, input
          delay, and ping, making it the best choice in the scene."
          fadeClass="text-white  block  tracking-wider font-light md:text-2xl w-full md:w-[700px] text-md leading-7 	md:leading-10 font-Roboto md:pt-16 pt-16"
        ></FadeInUpwardsText>

        <div className="flex mt-12 md:mt-8">
          <Link to="store">
            <button className="text-white bg-[#07A4FF] transition-all ease-in duration-150 hover:bg-[#0583CC]  font-Inter font-medium text-lg rounded-full  h-16  w-40 p-3">
              Buy Now
            </button>
          </Link>
          <a href="#aboutus">
            {" "}
            <button className="text-white bg-black border border-white transition-all ease-in duration-150 hover:bg-[#1A1A1A]  text-lg font-Inter font-medium rounded-full ml-4 h-16  w-40 p-3">
              Learn More
            </button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
