import React, { useEffect, useState } from "react";
import { authStateAtom, buttonState } from "../../../services/state/store";
import { useRecoilState, useRecoilValue } from "recoil";
import { SideBar } from "../SideBar";
import { Link, NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import Cart from "./Cart";
import UserAccount from "./UserAccount";

export default function NavBar() {
  const [button, setButton] = useRecoilState(buttonState);
  const authState = useRecoilValue(authStateAtom); 
  const [authenticationState, setAuthenticationState] = useState(false);
  

  useEffect(()=>{
    function authStateSetting()
    {
      if(authState === null)
      {
        return setAuthenticationState(false);
      }
      return authState ? setAuthenticationState(true) : setAuthenticationState(false)
    }

    authStateSetting(); 
  }, [authState])

  
  function boolValChanger() {
    setButton(!button);
  }

  return (
    <React.Fragment>
      <div className="bg-transparent backdrop-blur-xl sticky top-0 z-50 pt-2">
        <div className="flex h-24 items-center px-4 container mx-auto">
          <NavLink to="/">
            <h1 className="font-Inter font-black text-white text-xl cursor-pointer">
              Velocity Tweaks
            </h1>
          </NavLink>

          <div className="flex-grow flex justify-center ">
            <ul className="flex text-white space-x-10  ">
              <NavLink to="/faq">
                <li className=" hidden md:block  hover:text-gray-200 font-Inter  cursor-pointer">
                  FAQ
                </li>
              </NavLink>
              <NavLink to="/store">
                <li className="hidden md:block hover:text-gray-200 font-Inter cursor-pointer">
                  Store
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="hidden md:block hover:text-gray-200 font-Inter cursor-pointer">
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <UserAccount></UserAccount>

            {authenticationState ? <Cart></Cart> : <div></div> }

            <NavLink to="/store">
              <button className="bg-gradient-to-r h-12 w-28 from-[#E32723] via-[#8F74A6] to-[#07A4FF] text-white rounded-full p-1">
                <span className="flex justify-center  font-Inter items-center transition-all ease-in duration-75 h-10 w-18 bg-gray-900 hover:bg-[#212121] text-white rounded-full">
                  Buy Now
                </span>
              </button>
            </NavLink>

            <div onClick={boolValChanger} className="block md:hidden">
              {button ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="cursor-pointer size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-10 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}

              <SideBar></SideBar>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
