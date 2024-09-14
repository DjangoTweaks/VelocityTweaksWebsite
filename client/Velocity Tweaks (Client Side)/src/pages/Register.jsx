import React from "react";
import "../index.css";
import GrayCard from "../components/ui/GrayCard";
import { RecoilRoot } from "recoil";
import FadeInUpwardsText from "../components/ui/FadeInUpwardsText";
import { Checkbox } from "flowbite-react";
import { Link } from "react-router-dom";



export default function Register() {
  return (
    <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40%  to-[#011422] to-70% bg-blend-screen" >
      <div className="h-full  lg:h-screen pt-16 lg:pt-0 container mx-auto -mt-14 ">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="col-span-1 lg:h-screen     pt-16 flex flex-col lg:items-start items-center lg:flex-col lg:justify-center">
            <FadeInUpwardsText
              text="Create An Account!"
              fadeClass="text-[35px] md:text-[70px] text-white font-Inter font-normal lg:leading-none lg:mb-4  "
            ></FadeInUpwardsText>
            <div className="text-white font-Roboto font-light text-center text-[21px] mb-48 md:mb-60 lg:ml-2">
              Already a member? 
              <Link to="/login" className="font-bold underline cursor-pointer ml-2">Log In</Link>
            </div>
          </div>

          <div className="flex justify-center items-center -mt-48 mb-48 lg:mt-0 lg:mb-0 ">
            <div className="col-span-1  bg-[#292929]  bg-opacity-70 h-[100%] mt-24 md:mt-0   w-[90%]  lg:max-w-[500px] lg:h-[770px] drop-shadow-2xl border-[1.5px] border-[#2F2930] rounded-2xl md:max-w-[500px] md:h-[756px]">
              <div className="text-white font-Inter font-medium  text-[60px] flex justify-center pt-12 lg:pt-6">
                Register
              </div>

              <div className="h-full flex flex-col items-center justify-start mt-10">
              
              
              <div className="mb-3">
                  <div className="font-Roboto font-light lg:text-[20px] text-md pb-1 ">
                    Name
                  </div>
                  <div>
                    <input
                      type="text"
                      name="Email"
                      placeholder="Enter Your Name"
                      className="border-b-2 bg-transparent border-white w-[300px]  lg:w-[400px]   focus:border-white focus:ring-1 focus:ring-white  text-white rounded-xl"
                    ></input>
                  </div>
                </div>
               
               
                <div className=" ">
                  <div className="font-Roboto font-light lg:text-[20px] text-md pb-1 ">
                    Email
                  </div>
                  <div>
                    <input
                      type="text"
                      name="Email"
                      placeholder="Enter Your Email"
                      className="border-b-2 bg-transparent border-white w-[300px]  lg:w-[400px]   focus:border-white focus:ring-1 focus:ring-white  text-white rounded-xl"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="font-Roboto font-light   lg:text-[20px] text-md pt-3 pb-1">
                    Password
                  </div>
                  <div>
                    <input
                      type="password"
                      name="Password"
                      placeholder="Enter Your Password"
                      className="border-b-2 bg-transparent  w-[300px] lg:w-[400px] border-white focus:border-white focus:ring-1 focus:ring-white  text-white rounded-xl"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="font-Roboto font-light   lg:text-[20px] text-md pt-3 pb-1">
                    Repeat Password
                  </div>
                  <div>
                    <input
                      type="password"
                      name="Password"
                      placeholder="Enter Password Again"
                      className="border-b-2 bg-transparent  w-[300px] lg:w-[400px] border-white focus:border-white focus:ring-1 focus:ring-white  text-white rounded-xl"
                    ></input>
                  </div>
                </div>
                <div className="flex pl-12 pr-12 lg:pl-0 lg:pr-0 justify-between w-[400px] py-4">
                  <label className="">
                    <input className="-mt-1 mr-1  rounded-sm" type="checkbox"></input>
                    Remember Me
                  </label>
                  <div className="text-white font-normal cursor-pointer font-Roboto underline">
                   <Link to="/forgot">Forgot Password?</Link>
                  </div>
                </div>
                <div>
                  <button className="border border-white  bg-transparent text-white font-Inter font-bold text-[17px] rounded-3xl p-2 w-[300px] lg:w-[400px] hover:bg-[#373737] hover:transition ease-in-out duration-150">
                    Create Account
                  </button>
                </div>
                <div className="text-[17px] font-Roboto font-light py-3">
                  OR
                </div>
                <button className="border border-white bg-white text-black font-Inter font-bold text-[17px] rounded-3xl p-2 w-[300px]  lg:w-[400px] hover:bg-slate-100 hover:transition ease-in-out duration-150">
                
                <div className="flex justify-center gap-2">
                <img
                    src="https://docs.material-tailwind.com/icons/google.svg"
                    alt="metamask"
                    className="h-6 w-6"
                  />
                  Sign Up with Google
                </div>
                
              
                </button>{" "}
                {/* <Button
                  size="lg"
                  variant="outlined"
                  color="blue-gray"
                  className="flex items-center gap-3"
                >
                  <img
                    src="https://docs.material-tailwind.com/icons/google.svg"
                    alt="metamask"
                    className="h-6 w-6"
                  />
                  Continue with Google
                </Button> */}
                <div className="pt-5">
                  Already A Member?{" "}

                  <Link to="/login" className="underline cursor-pointer">Log In</Link>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
