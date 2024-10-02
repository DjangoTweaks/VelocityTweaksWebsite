import React, { useEffect } from "react";
import { RiArrowRightWideLine } from "react-icons/ri";
import CartView from "../components/ui/Cart/CartView";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from "recoil";
import { cartState, cartStateDB } from "../services/state/store";
import { Link } from "react-router-dom";
import axios from "axios";
import { domainName } from "../utils/domainName";

export default function Cart() {
  const cartStateVal = useRecoilValue(cartState);
  const [cartStateNew, setCartStateNew] = useRecoilState(cartStateDB);


  useEffect(() => {
    const fetchCartData = async () => {
      let ignore = false;
      try {
        
        const response = await axios.get(domainName + "/cart/cart-fix", {
          withCredentials: true,
        });
        if (!ignore) {

          const x = response.data.items;

          if (response.data.items.length === 0) {
            return setCartStateNew([]);
          }

          x.forEach((item) => {
            if (item.productName === "WittCepter Product 1") {
              item.price = 9.99;
            }
            if (item.productName === "WittCepter Product 2") {
              item.price = 29.99;
            }
          });

           
          setCartStateNew(response.data.items); // Populate atom with fetched data
        }
      } catch (error) {
        if (!ignore) {
          setCartStateNew([]); // Handle error case, e.g., setting to empty array
          console.error("Error fetching cart data:", error);
        }
      }
    };
    fetchCartData();

  }, []);



  if (cartStateNew === null) {
    return <div className="text-white"></div>;
  }

  function checkItemsEmpty() {
    return cartStateNew.length === 0 ? true : false;
  }

  return (
    <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40% to-[#011422] to-70% bg-blend-screen pb-32 h-full ">
      <div className="text-4xl lg:text-6xl font-semibold font-Inter flex justify-center pt-12 pb-3">
        Cart
      </div>

      {checkItemsEmpty() ? (
        <div className="pb-12" >
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
            <div className="font-extrabold text-[16px]">Cart</div>
            <div>
              <RiArrowRightWideLine size={30} className="pb-1" />
            </div>
            <div>Checkout</div>
            <div>
              <RiArrowRightWideLine size={30} className="pb-1" />
            </div>
            <div className="">Payment Confirmation</div>
          </div>
          <div className="md:max-w-[700px] md:container md:mx-auto lg:max-w-[1024px] ">
            <CartView></CartView>
          </div>
        </div>
      )}
    </div>
  );
}
