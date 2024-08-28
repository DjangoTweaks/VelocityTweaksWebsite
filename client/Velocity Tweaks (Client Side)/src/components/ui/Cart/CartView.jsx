import React from "react";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
import CouponComponent from "./CouponComponent";

export default function CartView() {
  return (
    <div>
      <div className="lg:max-w-[60%]">
        <div className="bg-[#292929] rounded-xl drop-shadow-2xl bg-opacity-50 mx-4 mt-4 p-4  ">
          <CartTable></CartTable>
        </div>
      </div>

      <CouponComponent></CouponComponent>

      <div className="lg:static lg:flex lg:justify-end ">
        <div className="  lg:w-[435px] lg:absolute lg:top-56 lg:pt-7 lg:pl-1 ">
          <CartTotal></CartTotal>
        </div>
      </div>
    </div>
  );
}
