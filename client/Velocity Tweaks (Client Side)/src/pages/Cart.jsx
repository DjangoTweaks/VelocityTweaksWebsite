import React from "react";
import { RiArrowRightWideLine } from "react-icons/ri";
import CartView from "../components/ui/Cart/CartView";
import { useRecoilValue } from "recoil";
import { cartState } from "../services/state/store";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartStateVal = useRecoilValue(cartState);

  console.log(cartStateVal);

  function checkItemsEmpty() {
    const x = cartStateVal.filter((data) => {
      return data.count !== 0;
    });

    {
      return x.length === 0 ? true : false;
    }
  }

  return (
    <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40% to-[#011422] to-70% bg-blend-screen pb-32 h-full ">
      <div className="text-4xl lg:text-6xl font-semibold font-Inter flex justify-center pt-12 pb-3">
        Cart
      </div>

      {checkItemsEmpty() ? (
        <div>
          <div className="pt-8">
            <div className="text-4xl font-Inter font-medium flex justify-center  ">
              Your Cart is Empty
            </div>

            <div className="flex justify-center mt-8  ">
              <Link to="/store">
                {" "}
                <button className="p-3 w-48 bg-white hover:bg-gray-300 rounded-lg hover:duration-150 hover:transition hover:ease-in-out text-black font-Inter font-bold ">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex font-Inter text-[15px] justify-center pt-3lg:container lg:flex lg:justify-start  lg:container lg:max-w-[1000px] lg:mx-auto lg:pl-1 ">
            <div className="font-bold">Cart</div>
            <div>
              <RiArrowRightWideLine size={30} className="pb-1" />
            </div>
            <div>Checkout</div>
            <div>
              <RiArrowRightWideLine size={30} className="pb-1" />
            </div>
            <div>Payment Confirmation</div>
          </div>
          <div className="md:max-w-[700px] md:container md:mx-auto lg:max-w-[1024px] ">
            <CartView></CartView>
          </div>
        </div>
      )}
    </div>
  );
}
