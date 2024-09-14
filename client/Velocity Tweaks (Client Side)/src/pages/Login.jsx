import React from "react";
import "../index.css";
import GrayCard from "../components/ui/GrayCard";
import { RecoilRoot } from "recoil";
import FadeInUpwardsText from "../components/ui/FadeInUpwardsText";
import { Checkbox } from "flowbite-react";
import { Link } from "react-router-dom";


export default function Login() {
  return (

    <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40%  to-[#011422] to-70% bg-blend-screen" >
      <div className="h-full  lg:h-screen pt-16 lg:pt-0 container mx-auto -mt-14 ">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="col-span-1 lg:h-screen pt-16 flex flex-col lg:items-start items-center lg:flex-col lg:justify-center">
            <FadeInUpwardsText
              text="Welcome!"
              fadeClass="text-[70px] text-white font-Inter font-normal "
            ></FadeInUpwardsText>
            <div className="text-gray-300 font-Roboto font-light text-center lg:text-start mx-2  text-[21px] mb-48 md:mb-60">
              <Link to="/register" className="font-bold underline cursor-pointer mr-2 ">Create An Account</Link>
               or Login
              to get started with Velocity's Services
            </div>
          </div>

          <div className="flex justify-center items-center -mt-48 mb-48 lg:mt-0 lg:mb-0">
            <div className="col-span-1  bg-[#292929] bg-opacity-70 lg:h-[650px] h-[100%] mt-24 md:mt-0 w-[90%] lg:max-w-[800px]   md:w-[500px] md:h-[620px] drop-shadow-2xl border-[1.5px] border-[#2F2930] rounded-2xl">
              <div className="text-white font-Inter font-medium  text-[60px] flex justify-center pt-12">
                Login
              </div>

              <div className="h-full flex flex-col items-center justify-start mt-10">
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
                <div className="flex pl-12 pr-12 lg:pl-0 lg:pr-0 justify-between w-[400px] py-4">
                  <label className="">
                    <input className="-mt-1 mr-1  rounded-sm" type="checkbox"></input>
                    Remember Me
                  </label>
                  <div className="text-white font-normal cursor-pointer font-Roboto underline">
                    <Link to="/forgot"> <div>Forgot Password?</div> </Link>
                  </div>
                </div>
                <div>
                  <button className="border border-white  bg-transparent text-white font-Inter font-bold text-[17px] rounded-3xl p-2 w-[300px] lg:w-[400px] hover:bg-[#373737] hover:transition ease-in-out duration-150">
                    Log In
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
                  Sign in with Google
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
                  Don't have an account?{" "}

                  <Link to="/register" className="underline cursor-pointer">Sign Up</Link>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
