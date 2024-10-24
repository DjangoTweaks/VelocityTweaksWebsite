import React from "react";

import GrayCard from "../../components/ui/GrayCard";
import { RecoilRoot } from "recoil";
import FadeInUpwardsText from "../../components/ui/FadeInUpwardsText";
import { Checkbox } from "flowbite-react";
import { Link } from "react-router-dom";
export default function LoginNew() {

  function handleSignup()
  {
    window.location.href =  import.meta.env.VITE_domainName + "/auth/google/login"; 
  }



  return (
    <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40%  to-[#011422] to-70% bg-blend-screen">
      <div className="h-full lg:h-screen pt-16 lg:pt-0 container mx-auto -mt-14 ">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="col-span-1 lg:h-screen pt-16 flex flex-col lg:items-start items-center lg:flex-col lg:justify-center">
            <FadeInUpwardsText
              text="Welcome!"
              fadeClass="text-[70px] text-white font-Inter font-normal "
            ></FadeInUpwardsText>
            <div className="text-gray-300 font-Roboto font-light text-center lg:text-start mx-2  text-[21px] mb-48 md:mb-60">
              Login to get started with Velocity's Services
            </div>
          </div>

          <div className="flex justify-center items-center -mt-48 mb-48 lg:mt-0 lg:mb-32">
            <div className="col-span-1  bg-[#292929] bg-opacity-70 lg:h-[300px] h-[100%] mt-24 md:mt-0 w-[90%] lg:max-w-[800px]   md:w-[500px] md:h-[300px] drop-shadow-2xl border-[1.5px] border-[#2F2930] rounded-2xl">
              <div className="text-white font-Inter font-medium  text-[60px] flex justify-center pt-12">
                Login
              </div>

              <div className="h-full flex flex-col items-center justify-start mt-10">
                <button onClick={handleSignup}  className="border border-white bg-white text-black font-Inter font-bold text-[17px] rounded-3xl p-2 w-[300px]  lg:w-[400px]  hover:transition ease-in-out duration-150 hover:duration-150 hover:ease-in-out hover:bg-gray-300 ">
                  <div className="flex justify-center gap-2">
                    <img
                      src="https://docs.material-tailwind.com/icons/google.svg"
                      alt="metamask"
                      className="h-6 w-6"
                    />
                    Sign in with Google
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
