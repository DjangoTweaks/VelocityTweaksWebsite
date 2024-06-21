import React from "react";

export default function NavBar() {
  return (
    <React.Fragment>
      <div className="flex h-24 items-center px-4">
        <h1 className="font-Inter w-full  font-black text-white text-xl cursor-pointer">
          Velocity Tweaks
        </h1>

        <ul className="flex  text-white items-center">
          <li className="cursor-pointer w-20  font-Inter hover:text-gray-200 ">
            Log In
          </li>

          <button className="bg-gradient-to-r h-12 w-24 from-[#E32723] via-[#8F74A6] to-[#07A4FF] text-white  rounded-full p-1">
            <span className="flex justify-center font-Inter items-center transition-all ease-in duration-75 h-10 w-18 bg-gray-900 hover:bg-[#212121]  text-white rounded-full ">
              Sign Up
            </span>
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="cursor-pointer ml-6 size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </ul>
      </div>
    </React.Fragment>
  );
}
