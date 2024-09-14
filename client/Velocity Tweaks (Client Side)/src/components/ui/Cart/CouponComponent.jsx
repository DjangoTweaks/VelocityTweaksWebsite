import React from "react";

export default function CouponComponent() {
  return (
    <div className="lg:max-w-[60%]">
      <div className="bg-[#292929] rounded-xl drop-shadow-2xl bg-opacity-50 mx-4 mt-4 p-3">
        <div className="flex justify-between px-0  ">
          <div className="flex items-center pb-1" >Promo Code?</div>
          <div>
            <input
              type="textbox"
              placeholder="Enter Coupon Code"
              className="text-white bg-inherit border border-white rounded-lg focus:outline-none pb-1 pl-1"
            ></input>

            <button className="bg-white font-Inter font-bold rounded-lg text-black p-1 px-2  ml-2   hover:ease-in-out hover:duration-150 hover:bg-gray-300 ">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
