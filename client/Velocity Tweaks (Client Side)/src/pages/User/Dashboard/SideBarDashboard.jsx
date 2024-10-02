import React from "react";
import { useRecoilValue } from "recoil";
import { loggedInUserDropDownAtom } from "../../../services/state/store";
import { FaBold, FaRegUser, FaStar } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdKey } from "react-icons/md";

export default function SideBarDashboard() {
  const userInfo = useRecoilValue(loggedInUserDropDownAtom);

  return (
    <div className="bg-gray-800 h-screen rounded-xl w-[350px] border-[1px] border-gray-600 ">
      <div className=" ">
        <div className="flex justify-center pt-10">
          <img src={userInfo.photo} className="rounded-full w-13 h-13"></img>
        </div>
        <div className="text-center font-Inter font-medium text-lg pt-2">
          {userInfo.name}
        </div>
        <div className="text-gray-400 font-Inter font-light text-sm text-center ">
          {userInfo.email}
        </div>
      </div>

      <div className="mx-2  h-[500px] mt-12">
        <NavLink
          to="/user/dashboard/profile"
          className={({ isActive }) =>
            isActive
              ? "font-Inter cursor-pointer pl-3 flex rounded-md h-8 bg-gray-500 bg-opacity-75 border-r-8 border-gray-300 border-opacity-85 ease-in-out duration-150 gap-x-2"
              : "font-Inter cursor-pointer pl-3 flex hover:rounded-md h-8 hover:bg-gray-500 hover:bg-opacity-75 hover:h-8 hover:border-r-8 hover:border-gray-300 hover:border-opacity-85 hover:ease-in-out hover:duration-150 gap-x-2"
          }
        >
          <div className="flex items-center gap-x-2">
            <span className="flex items-center">
              <FaRegUser size={15} />
            </span>
            <span className="flex items-center">Profile</span>
          </div>
        </NavLink>

        <NavLink
          to="/user/dashboard/orders"
          className={({ isActive }) =>
            isActive
              ? "font-Inter mt-2 cursor-pointer pl-2 flex rounded-md h-8 bg-gray-500 bg-opacity-75 border-r-8 border-gray-300 border-opacity-85 ease-in-out duration-150 gap-x-2"
              : "font-Inter mt-2 cursor-pointer pl-2 flex hover:rounded-md h-8 hover:bg-gray-500 hover:bg-opacity-75 hover:h-8 hover:border-r-8 hover:border-gray-300 hover:border-opacity-85 hover:ease-in-out hover:duration-150 gap-x-2"
          }
        >
          <div className="flex items-center gap-x-2">
            <span className="pl-[1px] flex items-center">
              <MdOutlineShoppingBag size={19} />
            </span>
            <span className="flex items-center -ml-[1px]">My Orders</span>
          </div>
        </NavLink>
        <NavLink
          to="/user/dashboard/keys"
          className={({ isActive }) =>
            isActive
              ? "font-Inter mt-2 cursor-pointer pl-2 flex rounded-md h-8 bg-gray-500 bg-opacity-75 border-r-8 border-gray-300 border-opacity-85 ease-in-out duration-150 gap-x-2"
              : "font-Inter mt-2 cursor-pointer pl-2 flex hover:rounded-md h-8 hover:bg-gray-500 hover:bg-opacity-75 hover:h-8 hover:border-r-8 hover:border-gray-300 hover:border-opacity-85 hover:ease-in-out hover:duration-150 gap-x-2"
          }
        >
          <div className="flex items-center gap-x-2 pl-[2px]">
            <span className="flex items-center">
              <MdKey size={18} />
            </span>
            <span className="flex items-center">My Keys</span>
          </div>
        </NavLink>
        <NavLink
          to="/user/dashboard/reviews"
          className={({ isActive }) =>
            isActive
              ? "font-Inter mt-2 cursor-pointer pl-2 flex rounded-md h-8 bg-gray-500 bg-opacity-75 border-r-8 border-gray-300 border-opacity-85 ease-in-out duration-150 gap-x-2"
              : "font-Inter mt-2 cursor-pointer pl-2 flex hover:rounded-md h-8 hover:bg-gray-500 hover:bg-opacity-75 hover:h-8 hover:border-r-8 hover:border-gray-300 hover:border-opacity-85 hover:ease-in-out hover:duration-150 gap-x-2"
          }
        >
          <div className="flex items-center gap-x-2 pl-[2px]">
            <span className="flex items-center">
              <FaStar size={15} />
            </span>
            <span className="flex items-center  ">Drop A Review</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
