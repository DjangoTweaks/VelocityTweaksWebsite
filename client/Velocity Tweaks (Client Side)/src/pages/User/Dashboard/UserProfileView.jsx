import React from "react";
import { FaRegUser } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { loggedInUserDropDownAtom } from "../../../services/state/store";

export default function UserProfileView() {
  const userInfo = useRecoilValue(loggedInUserDropDownAtom);

  return (
    <div>
      <div className="border-b-2 pb-4 border-gray-600">
        <div className="flex items-center pl-4 pt-4 gap-x-2 text-2xl ">
          <FaRegUser></FaRegUser>
          Profile
        </div>
        <div className="pl-4 mt-1 text-gray-400 text-sm">
          This page shows you your profile and account details
        </div>
      </div>

      <div className=" mt-4">
        <div className="text-lg font-Inter font-semibold pl-4 ">
          Profile Picture
        </div>
        <div className="flex justify-center  py-3 ">
          <img src={userInfo.photo} className="rounded-full  " />
        </div>
      </div>

      <div className="mt-4">
        <div className="text-lg font-Inter font-semibold pl-4 ">Your Name</div>
        <div className="flex justify-start pl-4 pt-2  ">
          <input
            type="input"
            disabled={true}
            defaultValue={userInfo.name}
            className="placeholder:pl-2 text-left pl-2 font-light w-full mr-2 rounded-md disabled:border-[1px] h-7 disabled:cursor-not-allowed  disabled:border-gray-600 text-gray-400    bg-transparent "
          ></input>
        </div>
      </div>

      <div className="mt-2">
        <div className="text-lg font-Inter font-semibold pl-4 ">Your Email</div>
        <div className="flex justify-start pl-4 pt-2  ">
          <input
            type="input"
            defaultValue={userInfo.email}
            disabled={true}
            className="placeholder:pl-2 text-left pl-2 font-light w-full mr-2 rounded-md disabled:border-[1px] h-7 disabled:cursor-not-allowed  disabled:border-gray-600 text-gray-400   bg-transparent "
          ></input>
        </div>
      </div>
    </div>
  );
}
