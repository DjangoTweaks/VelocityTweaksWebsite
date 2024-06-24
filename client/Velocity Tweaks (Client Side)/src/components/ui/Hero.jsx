import React from "react";
import backgroundHeroImage from '../HeroAttempt.png'
export default function Hero() {
  return (
    <div className="bg-cover bg-center h-screen"  style={{backgroundImage: `url(${backgroundHeroImage})`}}>
{/* "background-image: url('your-image-url.jpg');" */}
    {/* <div className="relative h-screen z-10" ></div> */}

    <div className="container  mx-auto md:pt-20 pt-10">
      
      <div className="text-[#FFFFFF] font-Inter tracking-tight  	 font-semibold text-8xl">
        Elevate
      </div>

      <div className="text-[#FC2B27] font-Inter tracking-tight 		font-semibold text-8xl">
        Boost
      </div>

      <div className="text-[#07A4FF] font-Inter tracking-tight	 	font-semibold text-8xl">
        Conquer.
      </div>

      <div className="text-white block w-[410px] tracking-wider font-light text-xl	leading-9 font-Roboto md:pt-10 pt-16">
        Unlock the full potential of your gaming rig with Velocity Tweaks, a
        leading company specializing in a utility designed to optimize your PC
        for maximum FPS. Trusted by countless professional players and
        customers, Velocity Tweaks ensures the lowest possible latency, input
        delay, and ping, making it the best choice in the scene.{" "}
      </div>
    </div>
    </div>

  );
}
