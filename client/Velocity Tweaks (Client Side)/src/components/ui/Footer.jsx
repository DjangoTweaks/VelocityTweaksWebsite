import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      {/* 
        <div className="container font-Inter font-light py-4 flex justify-between  text-white mx-auto border-t border-white border-solid">
        <div className="" >@VelocityTweaks, Inc</div>
       
        <div className="ml-20 " >@Akshat Kharbanda @Aaditya Dawkar </div>
        
        <div className="flex justify-around w-[300px]" >
        <div>Home</div>
        <div>FAQs</div>
        <div>Store</div>
        <div>Contact</div>
        </div>
        */}

      <div className="grid text-white border-t border-white">
        <div>
          {" "}
          <Link to="/">
            <h1 className=" font-Inter font-black text-xl  cursor-pointer">
              Velocity Tweaks
            </h1>
          </Link>
        </div>

        <div>
          <h1 className="font-Roboto font-semibold text-xl">Community</h1>
          
          <ul>
            <li>Discord</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>

        <div>
        <h1 className="font-Roboto font-semibold text-xl" >Legal</h1>
          <ul>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
