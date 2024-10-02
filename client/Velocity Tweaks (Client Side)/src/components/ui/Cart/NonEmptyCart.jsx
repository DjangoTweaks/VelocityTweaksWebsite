import React from "react";
import { RiArrowRightWideLine } from "react-icons/ri";
import CartView from "./CartView";

export default function NonEmptyCart() {
  return (
    <div>
      <div className="flex font-Inter text-[15px] justify-center pt-3lg:container lg:flex lg:justify-start  lg:container lg:max-w-[1000px] lg:mx-auto lg:pl-1 ">
        <div className="font-bold">Cart</div>
        <div>
          <RiArrowRightWideLine size={30} className="pb-1" />
        </div>
        <div className="font-extrabold" >Checkout</div>
        <div>
          <RiArrowRightWideLine size={30} className="pb-1" />
        </div>
        <div>Payment Confirmation</div>
      </div>
      <div className="md:max-w-[700px] md:container md:mx-auto lg:max-w-[1024px] ">
        <CartView></CartView>
      </div>
    </div>
  );
}
