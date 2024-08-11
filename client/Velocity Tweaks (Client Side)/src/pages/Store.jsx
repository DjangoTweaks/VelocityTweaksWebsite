import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, toast } from "react-toastify";
import "../index.css";
import { PRODUCTS } from "../utils/products";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../services/state/store";

export function Store() {
  const [cart, setCart] = useRecoilState(cartState);

  function AddToCart(id, utilName) {
    if (cart[id - 1].count === 10) {
      toast.warn("Maximum Utilities Added To Cart!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      setCart((prevItem) => {
        console.log(prevItem);
        return prevItem.map((data) => {
          if (data.id === id && data.count < 10) {
            return { ...data, count: data.count + 1 };
          } else {
            return data;
          }
        });
      });

      toast.info(`${utilName} Added To Cart`, {
      position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }

  return (
    <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40% to-[#011422] to-70% bg-blend-screen pb-32 h-full ">
      <div className="flex justify-center text-white font-Inter font-semibold text-4xl my-6 lg:mb-20 lg:text-6xl ">
        Choose Your Utility
      </div>

      <div className="grid grid-cols-1 container px-4 space-y-10 md:mx-auto md:max-w-[500px] lg:grid-cols-2 lg:space-y-0  lg:space-x-6 lg:max-w-[1024px] lg:h-screen  ">
        <div className="lg:flex lg:flex-col lg:justify-start">
          {/* product one  */}
          <div className="bg-[#292929] bg-opacity-70 rounded-[30px] h-[600px] p-6 lg:mb-[150px]">
            <div className="text-white font-medium font-Inter text-2xl pb-2 ">
              Basic
            </div>

            <div className="text-gray-400 font-Roboto pb-4 ">
              Enhance your PC's performance with essential OS, CPU, and GPU
              tweaks.
            </div>

            <div className="flex font-Inter font-bold pb-4 ">
              <div className="flex items-center text-gray-300 text-lg pt-1 font-semibold">
                $
              </div>
              <div className="text-5xl">10</div>
            </div>

            <div className="flex flex-col  mt-4 space-y-3 text-lg">
              <div className="flex ">
                <CiCircleCheck size={25} className="mt-[2px]" />
                <p className="ml-1">Windows Tweaks</p>
              </div>

              <div className="flex ">
                <CiCircleCheck size={25} className="mt-[2px]" />
                <p className="ml-1">Windows Tweaks</p>
              </div>

              <div className="flex ">
                <CiCircleCheck size={25} className="mt-[2px]" />
                <p className="ml-1">Windows Tweaks</p>
              </div>

              <div className="flex ">
                <CiCircleCheck size={25} className="mt-[2px]" />
                <p className="ml-1">Windows Tweaks</p>
              </div>

              <div className="flex ">
                <CiCircleCheck size={25} className="mt-[2px]" />
                <p className="ml-1">Windows Tweaks</p>
              </div>

              <div className="flex ">
                <CiCircleCheck size={25} className="mt-[2px]" />
                <p className="ml-1">Windows Tweaks</p>
              </div>

              <div className="flex ">
                <CiCircleCheck size={25} className="mt-[2px]" />
                <p className="ml-1">Windows Tweaks</p>
              </div>

              <div className="flex ">
                <CiCircleCheck size={25} className="mt-[2px]" />
                <p className="ml-1">Windows Tweaks</p>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => {
                  AddToCart(1, "Velocity Tweaks Basic Utility");
                }}
                className="bg-[#4B5257] bg-opacity-70 rounded-[20px] p-3 w-full text-center font-Inter hover:bg-[#2d3134] hover:transition hover:ease-in hover:duration-75   "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* product two  */}

        <div className="bg-gradient-to-br from-[#00a2ff46] to-[#0ab5ff38]  bg-opacity-70 rounded-[30px] h-[600px] p-6">
          <div className="text-white font-medium font-Inter text-2xl pb-2">
            Premium
          </div>

          <div className="text-gray-400 font-Roboto pb-4 ">
            Experience the pinnacle of PC performance
          </div>

          <div className="flex font-Inter font-bold pb-4 ">
            <div className="flex items-center text-gray-300 text-lg pt-1 font-semibold">
              $
            </div>
            <div className="text-5xl">30</div>
          </div>

          <div className="flex flex-col  mt-4 space-y-3 text-lg">
            <div className="flex ">
              <CiCircleCheck size={25} className="mt-[2px]" />
              <p className="ml-1">Windows Tweaks</p>
            </div>

            <div className="flex ">
              <CiCircleCheck size={25} className="mt-[2px]" />
              <p className="ml-1">Windows Tweaks</p>
            </div>

            <div className="flex ">
              <CiCircleCheck size={25} className="mt-[2px]" />
              <p className="ml-1">Windows Tweaks</p>
            </div>

            <div className="flex ">
              <CiCircleCheck size={25} className="mt-[2px]" />
              <p className="ml-1">Windows Tweaks</p>
            </div>

            <div className="flex ">
              <CiCircleCheck size={25} className="mt-[2px]" />
              <p className="ml-1">Windows Tweaks</p>
            </div>

            <div className="flex ">
              <CiCircleCheck size={25} className="mt-[2px]" />
              <p className="ml-1">Windows Tweaks</p>
            </div>

            <div className="flex ">
              <CiCircleCheck size={25} className="mt-[2px]" />
              <p className="ml-1">Windows Tweaks</p>
            </div>

            <div className="flex ">
              <CiCircleCheck size={25} className="mt-[2px]" />
              <p className="ml-1">Windows Tweaks</p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => {
                AddToCart(2, "Velocity Tweaks Premium Utility");
              }}
              className="bg-[#4B5257] bg-opacity-70 rounded-[20px] p-3 w-full text-center font-Inter mt-6 hover:bg-[#2d3134] hover:transition hover:ease-in hover:duration-75   "
            >
              Add to Cart
            </button>
          </div>
        </div>

  
      </div>
    </div>
  );
}
