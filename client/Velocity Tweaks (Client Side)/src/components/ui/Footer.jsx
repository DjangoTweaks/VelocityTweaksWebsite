import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-zinc-950  bg-opacity-60 backdrop-blur-md backdrop-brightness-150 border-t-[0.5px] py-12 border-gray-600 w-full ">
      <div>
        <div className="text-white container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 ">
            <div className="grid col-span-1  md:col-span-3">
              <Link to="/">
                <h1 className="font-Inter font-black text-xl cursor-pointer">
                  Velocity Tweaks
                </h1>
              </Link>
            </div>

            <div className="col-start-2 md:col-start-4  ">
              <h1 className="font-Roboto font-semibold text-xl">Community</h1>
              <ul className="text-gray-300 pt-6 font-Roboto font-light">
                <li className="pb-[2px]">Discord</li>
                <li className="pb-[2px]">Twitter</li>
                <li className="pb-[2px]">YouTube</li>
              </ul>
            </div>

            <div className="md:col-start-5 ">
              <h1 className="font-Roboto font-semibold text-xl">View More</h1>
              <ul className="text-gray-300 pt-6 font-Roboto font-light">
                <li className="pb-[2px]">FAQ</li>
                <li className="pb-[2px]">Store</li>
                <li className="pb-[2px]">Contact</li>
                <li className="pb-[2px]">Login</li>
              </ul>
            </div>

            <div className="md:col-start-6 ">
              <h1 className="font-Roboto font-semibold text-xl ">Legal</h1>
              <ul className="text-gray-300  pt-6 font-Roboto font-light">
                <li className="pb-[2px]">Terms Of Service</li>
                <li className="pb-[2px]">Privacy Policy</li>
                <li className="pb-[2px]">Refund Policy</li>
                <li className="pb-[2px]">Cookie Policy</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center font-Roboto text-sm md:text-base font-normal mt-16  ">
            Copyright © 2024 Velocity Tweaks, All Rights Reserved.
          </div>
        </div>
        
      </div>
    </div>
  );
}
