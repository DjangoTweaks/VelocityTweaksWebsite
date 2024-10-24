import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { useRecoilState, useRecoilValue } from "recoil";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";

import {
  authStateAtom,
  dropDownStateAtom,
  loggedInUserDropDownAtom,
} from "../../../services/state/store";
import axios from "axios";
import { CgProfile } from "react-icons/cg";

export default function UserAccount() {
  const authState = useRecoilValue(authStateAtom);

  return (
    <div>
      {authState === true ? (
        <UserLoggedIn></UserLoggedIn>
      ) : (
        <UserLoggedOut></UserLoggedOut>
      )}
    </div>
  );
}

// function DropDown() {
//   const [dropDownState, setdropDownState] = useRecoilState(dropDownStateAtom);
//   const dropdownRef = useRef();

//   useEffect(() => {
//     document.addEventListener("mousedown", (e) => {
//       if (!dropdownRef.current.contains(e.target)) {
//         setdropDownState(false);
//       }
//     });
//   });

//   const loggedInUserDropDownInfo = useRecoilValue(loggedInUserDropDownAtom);

//   async function LogoutHandler() {
//     const result = await axios.get(import.meta.env.VITE_domainName + "/auth/logout", {
//       withCredentials: true,
//     });
//   }

//   return (
//     <div
//       useRef={dropdownRef}
//       className="bg-[#000000] border-2 border-gray-800 rounded-md  divide-y divide-slate-700  absolute w-fit"
//     >
//       <div className="">
//         <div className="flex h-full pl-0 pt-3 pb-3">
//           <div className=" w-1/5 flex justify-center  items-center  ">
//             <img
//               src={loggedInUserDropDownInfo.photo}
//               className="rounded-full w-6 h-6"
//             ></img>
//           </div>
//           <div className=" w-4/5 ">
//             <div className="font-Inter text-sm font-bold">
//               {loggedInUserDropDownInfo.name}
//             </div>
//             <div className="font-Inter text-xs font-light text-gray-400 w-[210px]">
//               {" "}
//               {loggedInUserDropDownInfo.email}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="py-2 pl-[8px] ">
//         <div className="flex hover:text-gray-400">
//           <div className="flex justify-center items-center">
//             <CgProfile size={23} className="" />
//           </div>
//           <div className="pb-[1px] font-Inter font-semibold text-md pl-[10px]">
//             Profile
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="py-2 pl-[6px] ">
//           <div className="flex hover:text-gray-400">
//             <div className="flex justify-center items-center">
//               <MdOutlineShoppingBag size={25} className="" />
//             </div>
//             <div className="pb-[1px] font-Inter font-semibold text-md pl-[10px]">
//               My Orders
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         {" "}
//         <div className="py-2 pl-[6px] text-red-500 hover:text-red-700 ">
//           <div className="flex  ">
//             <div className="flex justify-center items-center ">
//               <CgLogOut size={28} className="justify-center pl-1" />
//             </div>
//             <div
//               onClick={LogoutHandler}
//               className="pb-[1px] font-Inter font-semibold text-md pl-[7px] "
//             >
//               Logout
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function UserLoggedOut() {
  return (
    <div>
      <ul className="text-white hidden md:block">
        <NavLink to="/login">
          <IoPerson size={23} className="hover:text-slate-300" />
        </NavLink>
      </ul>
    </div>
  );
}

function UserLoggedIn() {
  const [dropDownState, setdropDownState] = useRecoilState(dropDownStateAtom);
  const loggedInUserDropDownInfo = useRecoilValue(loggedInUserDropDownAtom);

  let refDropDown = useRef();

  const domEventHandler = (e) => {
    if (!refDropDown.current?.contains(e.target)) {
      setdropDownState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", domEventHandler);

    return () => {
      document.removeEventListener("mousedown", domEventHandler);
    };
  });

  async function LogoutHandler() {
    window.location.href = import.meta.env.VITE_domainName + "/auth/logout";
  }

  return (
    <div ref={refDropDown} onClick={() => setdropDownState(!dropDownState)}>
      <div className="text-white hidden md:block cursor-pointer">
        <IoPerson size={23} className="hover:text-slate-300" />
        <div className="relative top-3 right-20">
          {dropDownState === true && (
            <div className="bg-[#000000] border-2 border-gray-800 rounded-md  divide-y divide-slate-700  absolute w-fit">
              <div className="">
                <div className="flex h-full pl-0 pt-3 pb-3">
                  <div className=" w-1/5 flex justify-center  items-center  ">
                    <img
                      src={loggedInUserDropDownInfo.photo}
                      className="rounded-full w-6 h-6"
                    ></img>
                  </div>
                  <div className=" w-4/5 ">
                    <div className="font-Inter text-sm font-bold">
                      {loggedInUserDropDownInfo.name}
                    </div>
                    <div className="font-Inter text-xs font-light text-gray-400 w-[210px]">
                      {loggedInUserDropDownInfo.email}
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2 pl-[8px] ">
                <Link to="/user/dashboard/profile">
                  {" "}
                  <div className="flex hover:text-gray-400">
                    <div className="flex justify-center items-center">
                      <CgProfile size={23} className="" />
                    </div>
                    <div className="pb-[1px] font-Inter font-semibold text-md pl-[10px]">
                      Profile
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <div className="py-2 pl-[6px] ">
                  <Link to="/user/dashboard/orders">
                    <div className="flex hover:text-gray-400">
                      <div className="flex justify-center items-center">
                        <MdOutlineShoppingBag size={25} className="" />
                      </div>

                      <div className="pb-[1px] font-Inter font-semibold text-md pl-[10px]">
                        My Orders
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                {" "}
                <div className="py-2 pl-[6px] text-red-500 hover:text-red-700 ">
                  <div className="flex  ">
                    <div className="flex justify-center items-center ">
                      <CgLogOut size={28} className="justify-center pl-1" />
                    </div>
                    <div
                      onClick={LogoutHandler}
                      className="pb-[1px] font-Inter font-semibold text-md pl-[7px] "
                    >
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
