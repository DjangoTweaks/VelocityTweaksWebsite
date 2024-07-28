import React from "react";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";

export default function CartView() {
  return (
    <div>
      <div className="lg:max-w-[60%]">
        <div className="bg-[#292929] rounded-xl drop-shadow-2xl bg-opacity-50 mx-4 mt-4 p-4  ">
          <CartTable></CartTable>
        </div>
      </div>

      <div className="lg:max-w-[60%]">
        <div className="bg-[#292929] rounded-xl drop-shadow-2xl bg-opacity-50 mx-4 mt-4 p-3">
          <div className="flex justify-between px-0  ">
            <div>Promo Code?</div>
            <div>
              <input
                type="textbox"
                placeholder="Enter Coupon Code"
                className="text-white bg-inherit border border-white rounded-lg focus:outline-none  pb-1 pl-1"
              ></input>
            </div>
          </div>
        </div>
      </div>

       <div className="lg:static lg:flex lg:justify-end " >

        <div className="  lg:w-[435px] lg:absolute lg:top-56 lg:pt-7 lg:pl-1 " >
        <CartTotal></CartTotal>
        </div>
       
       </div>
        
      

    </div>
  );
}
