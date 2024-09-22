import React from "react";
import { useRecoilValue } from "recoil";
import { cartNotificationSelector, cartState } from "../../../services/state/store";
import { IoCart } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const currentCartState = useRecoilValue(cartState);

  const notificationCount = useRecoilValue(cartNotificationSelector)
  return (
    <div>
      <ul className="text-white hidden md:block">
        <NavLink to="/cart">
          <div className="static">
            {notificationCount === 0 ? (
              <IoCart size={28} className="hover:text-slate-300 mr-1"></IoCart>
            ) : (
              <div>
                <IoCart
                  size={28}
                  className="hover:text-slate-300 mr-1"
                ></IoCart>
                <div className="bg-red-600 rounded-full w-[12px] h-[12px] text-[10px] text-center absolute bottom-12 ml-[18px] mb-[2px]">
                  <div className=" rounded-full relative bottom-[2px]">{notificationCount}</div>
                </div>
              </div>
            )}
          </div>
        </NavLink>
      </ul>
    </div>
  );
}
