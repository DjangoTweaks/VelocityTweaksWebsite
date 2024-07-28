import React from "react";
import "../index.css";
import ControlledCarousel from "../components/ui/ReviewCarousel";
import ReviewCard from "../components/ui/ReviewCard";
import FadeInUpwardsText from "../components/ui/FadeInUpwardsText";
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

export function Contact() {
  return (
    <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40% to-[#011422] to-70% bg-blend-screen pb-32">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center">
          <div className="ml-2">
            <div className="mt-12">
              <FadeInUpwardsText
                fadeClass="font-Inter text-[35px] text-center md:text-6xl md:pb-4 lg:text-[50px] lg:text-start"
                text="Lets Get In Touch"
              ></FadeInUpwardsText>
            </div>

            <div className="font-Roboto font-light text-md pt-2 w-[320px] mx-auto text-center text-gray-200 md:w-[700px] md:text-xl lg:w-[70%] lg:text-start lg:mx-0 lg:pl-1  ">
              If you're unsure about what you need, feel free to say Hello! We'd
              be delighted to provide more details about our utilities.
            </div>

            <div className="w-[200px] mx-auto  mt-12 pt-4 pb-2 md:w-full md:ml-0 md:flex md:justify-center md:space-x-4 lg:flex-col lg:-ml-3 ">
              <div className="flex items-center h-8 lg:ml-4">
                <TfiEmail size={20} />
                <a
                  href="mailto:“velocitytweaks@gmail.com”"
                  className="ml-2 pb-1 text-sm hover:text-gray-300"
                >
                  velocitytweaks@gmail.com
                </a>
              </div>

              <div className="flex h-8 items-center">
                <FaDiscord size={20} />
                <a
                  href=""
                  className="ml-[7px] pb-0 text-sm md:pb-0 hover:text-gray-300"
                >
                  discord.gg/velocitytweaks
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-[550px] mx-4 lg:ml-0 ">
            <div className="bg-[#292929] mt-16 bg-opacity-70 rounded-xl border-1 drop-shadow-2xl border-[#2F2930] p-8 py-6 lg:p-8">
              <div className="font-Inter text-[40px] font-medium">Contact</div>

              <div>
                <div className="font-Roboto font-light pb-1 text-lg">Name</div>

                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className=" bg-inherit border-1 pl-2 w-[80%]  focus:ring-white focus:border-white h-[30px] border-white rounded-lg md:w-[60%] "
                ></input>
              </div>

              <div className="mt-2">
                <div className="font-Roboto font-light pb-1 text-lg">Email</div>

                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className=" bg-inherit border-1 pl-2  w-[80%]  focus:ring-white focus:border-white h-[30px] border-white rounded-lg md:w-[60%]  "
                ></input>
              </div>

              <div className="mt-2">
                <div className="font-Roboto font-light pb-1 text-lg">
                  Message
                </div>

                <textarea
                  type="text"
                  placeholder="Enter Your Message"
                  className=" bg-inherit border-1 pl-2 w-[100%] h-[200px] focus:ring-white focus:border-white  border-white rounded-lg  "
                ></textarea>
              </div>

              <div className="mt-6">
                <button className="bg-white rounded-xl p-2 w-[30%] text-center border-1 border-gray-200 text-black font-Inter font-bold hover:bg-gray-300">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
