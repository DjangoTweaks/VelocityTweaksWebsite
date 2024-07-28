import React from "react";
import "../index.css";
import GrayCard from "../components/ui/GrayCard";
import { RecoilRoot } from "recoil";
import FadeInUpwardsText from "../components/ui/FadeInUpwardsText";
import { Checkbox } from "flowbite-react";
import { Link } from "react-router-dom";


export default function ResetPassword() {
  return (
    <div className="bg-gradient-to-b from-[#000000]  from-10% via-[#1a0404] via-40%  to-[#011422] to-70% bg-blend-screen" >
      <div className="h-full lg:h-screen pt-16 lg:pt-0 container mx-auto -mt-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-6">
          <div className="col-span-1 lg:h-screen pt-36 flex flex-col lg:items-start  items-center lg:flex-col lg:justify-center">
            <FadeInUpwardsText
              text="Forgot Your Password?"
              fadeClass="text-[33px] md:text-[60px] md:text-[70px] text-white font-Inter font-normal mb-4 "
            ></FadeInUpwardsText>
            <div className="text-gray-300 font-Roboto font-light text-center md:text-center lg:text-start text-[17px] mx-2 md:text-[21px] mb-48 md:mb-60">
            We make it easy to reset your password if you forget it. No support needed, just enter your email and click "Reset Password".
            </div>
          </div>

          <div className="flex justify-center items-center -mt-48 mb-48 lg:mt-0 lg:mb-0">
            <div className="col-span-1  bg-[#292929] bg-opacity-70 lg:h-[50%] h-[100%] mt-24 md:mt-0 pt-10    w-[90%]  lg:max-w-[500px]  lg:-mt-12 lg:pt-24 drop-shadow-2xl border-[1.5px] border-[#2F2930] rounded-2xl ">
             

              <div className="h-full flex flex-col items-center justify-start pt-20 md:pt-0 md:pb-8 lg:pt-12">
                <div className=" ">
                  <div className="font-Roboto font-light lg:text-[20px] text-md pb-1">
                    Email
                  </div>
                  <div>
                    <input
                      type="text"
                      name="Email"
                      placeholder="Enter Your Email"
                      className="border-b-2 bg-transparent border-white w-[300px] mb-4  lg:w-[400px] focus:border-white focus:ring-1 focus:ring-white  text-white rounded-xl"
                    ></input>
                  </div>
                </div>



             
            
                <div>
                  <button className="border border-white  bg-transparent text-white font-Inter font-bold text-[17px] rounded-3xl p-2 w-[300px] lg:w-[400px] hover:bg-[#373737] hover:transition ease-in-out duration-150">
                    Reset Password
                  </button>
                </div>

                <div className="pt-5">
                  Go back to {" "}

                  <Link to="/login" className="underline cursor-pointer"> Log In</Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
