import React from "react";
import "../index.css";
import GrayCard from "../components/ui/GrayCard";
import NavBar from "../components/ui/NavBar";
import { RecoilRoot } from "recoil";
import FadeInUpwardsText from "../components/ui/FadeInUpwardsText";
import { Checkbox } from "flowbite-react";


export function Login() {
  return (
    <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40%  to-[#011422] to-70% bg-blend-screen" >
      <div className="h-screen container mx-auto -mt-14">
        <div className="grid grid-cols-2">
          <div className="col-span-1 h-screen flex flex-col justify-center  ">
            <FadeInUpwardsText
              text="Welcome!"
              fadeClass="text-[70px] text-white font-Inter font-normal"
            ></FadeInUpwardsText>
            <div className="text-white font-Roboto font-light text-[21px] mb-48  ">
              <a className="font-bold underline cursor-pointer ">Create An Account</a> or Login
              to get started with Velocity's Services
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <div className="col-span-1  bg-[#292929] bg-opacity-70 h-[75%] w-[70%]   drop-shadow-2xl border-[1.5px] border-[#2F2930] rounded-2xl">
              <div className="text-white font-Inter font-medium text-[60px] flex justify-center pt-12   ">
                Login
              </div>

              <div className="h-full flex flex-col items-center  justify-start mt-14 ">
                <div className=" ">
                  <div className="font-Roboto font-light text-[20px] pb-1 ">
                    Email
                  </div>
                  <div>
                    <input
                      type="text"
                      name="Email"
                      placeholder="Enter Your Email"
                      className="border-b-2 bg-transparent border-white w-[400px]   focus:border-white focus:ring-1 focus:ring-white  text-white rounded-xl"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="font-Roboto font-light text-[20px] pt-3 pb-1">
                    Password
                  </div>
                  <div>
                    <input
                      type="password"
                      name="Password"
                      placeholder="Enter Your Password"
                      className="border-b-2 bg-transparent w-[400px] border-white focus:border-white focus:ring-1 focus:ring-white  text-white rounded-xl"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between w-[400px] py-4">
                  <label className="">
                    <input className="-mt-1 mr-1  rounded-sm  " type="checkbox"></input>
                    Remember Me
                  </label>
                  <div className="text-white font-normal cursor-pointer  font-Roboto underline ">
                    <div>Forgot Password?</div>
                  </div>
                </div>
                <div>
                  <button className="border border-white bg-transparent text-white font-Inter font-bold text-[17px] rounded-3xl p-2 w-[400px] hover:bg-[#373737] hover:transition ease-in-out duration-150">
                    Log In
                  </button>
                </div>
                <div className="text-[17px] font-Roboto font-light py-3">
                  OR
                </div>
                <button className="border border-white bg-white text-black font-Inter font-bold text-[17px] rounded-3xl p-2 w-[400px] hover:bg-slate-100 hover:transition ease-in-out duration-150">
                
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
                  <a className="underline cursor-pointer">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
