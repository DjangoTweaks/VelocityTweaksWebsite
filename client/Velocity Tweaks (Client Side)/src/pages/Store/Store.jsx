import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import "react-toastify/dist/ReactToastify.css";
import { PRODUCTS } from "../../utils/products";
import { useRecoilState, useRecoilValue } from "recoil";
import { authStateAtom, cartNotiState, cartState } from "../../services/state/store";
import ScrollToTopOnMount from "../../utils/ScrollToTopOnMount";
import "../../index.css";
import BasicProduct from "../../components/ui/Store/BasicProduct";
import PremiumProduct from "../../components/ui/Store/PremiumProduct";
import { Navigate, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { addToCart } from "../../utils/CartStateManipulation";

export function Store() {
  const [cart, setCart] = useRecoilState(cartState);
  const isAuthenticated = useRecoilValue(authStateAtom);
  // function AddToCart(id, utilName) {
  //   if (cart[id - 1].count === 10) {
  //     toast.warn("Maximum Utilities Added To Cart!", {
  //       position: "bottom-right",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       transition: Bounce,
  //     });
  //   } else {
  //     setCart((prevItem) => {
  //       console.log(prevItem);
  //       return prevItem.map((data) => {
  //         if (data.id === id && data.count < 10) {
  //           return { ...data, count: data.count + 1 };
  //         } else {
  //           return data;
  //         }
  //       });
  //     });

  //     toast.info(`${utilName} Added To Cart`, {
  //       position: "bottom-right",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       transition: Bounce,
  //     });
  //   }
  // }

  const navigate = useNavigate();


  async function ProductButtonClick(utilName, productName, priceId) {
    if (isAuthenticated === null) {
      return;
    }
    if (!isAuthenticated) {
      toast.info(`Please Login To View Cart`, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      navigate("/login");
    } else {
      await addToCart(utilName, productName, priceId);
      navigate("/cart"); 
    }
  }

  return (
    <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40% to-[#011422] to-70% bg-blend-screen pb-32 h-full ">
      <ScrollToTopOnMount />

      <div className="flex justify-center text-white font-Inter font-semibold text-4xl my-6 lg:mb-20 lg:text-6xl ">
        Choose Your Utility
      </div>

      <div className="grid grid-cols-1 container px-4 space-y-10 md:mx-auto md:max-w-[500px] lg:grid-cols-2 lg:space-y-0  lg:space-x-6 lg:max-w-[1024px] lg:h-screen  ">
        <div className="lg:flex lg:flex-col lg:justify-start">
          <BasicProduct
            onClick={() => {
              ProductButtonClick(
                "Basic Utility",
                "WittCepter Product 1",
                "price_1PpdduCUgsBmQhDaFQXyIoTK"
              );
            }}
          />
        </div>

        <PremiumProduct
          onClick={() => {
            ProductButtonClick(
              "Premium Utility",
              "WittCepter Product 2",
              "price_1PqEf5CUgsBmQhDaSN8IIsOx"
            );
          }}
        />
      </div>
    </div>
  );
}
