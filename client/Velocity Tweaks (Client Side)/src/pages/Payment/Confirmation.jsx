import React from "react";
import NonEmptyCart from "../../components/ui/Cart/NonEmptyCart";
import { RiArrowRightWideLine } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";


export default function Confirmation() {
  return (
    <div className="h-screen">
      <div className="font-Inter text-6xl w-full flex justify-center font-semibold pt-12">
        Payment Successful
      </div>
      <div className="container mx-auto text-[18px] px-12 mt-6 font-Inter font-extralight text-center text-wrap">
        Thank You For Availing Velocity Tweak's Services!
      </div>

      <div className="flex font-Inter text-[15px] justify-start container mx-auto pt-12 pl-1">
        <div className="">Cart</div>
        <div>
          <RiArrowRightWideLine size={30} className="pb-1" />
        </div>
        <div className="">Checkout</div>
        <div>
          <RiArrowRightWideLine size={30} className="pb-1" />
        </div>
        <div className="font-extrabold">Payment Confirmation</div>
      </div>

      <div className="bg-[#292929] rounded-xl drop-shadow-2xl bg-opacity-50 mt-4 p-4 container mx-auto">
        <div className="text-xl">Order ID: #34733734834783</div>

        <table className="w-full mt-6 ">
          <thead className="font-Inter font-semibold text-lg">
            <tr className="text-center">
              <td className="">Quantity</td>
              <td className="">Products</td>
              <td>Keys</td>
              <td className="">Download Link</td>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center">
              <td className="py-3">3</td>
              <td>Velocity Tweaks Premium Tweaking Application</td>
              <td className="">
                xOOMvi-aLfQ0b-CJva17-CCFGQ1-7oe4Hb-hNDwQ1<br></br>
                xOOMvi-aLfQ0b-CJva17-CCFGQ1-7oe4Hb-hNDwQ1<br></br>
                xOOMvi-aLfQ0b-CJva17-CCFGQ1-7oe4Hb-hNDwQ1
              </td>
              <td className="  flex justify-center items-center h-16" > <a><IoMdDownload size={30} className="hover:text-gray-400 hover:duration-150 hover:ease-in-out hover:cursor-pointer" /></a> </td>
            </tr>

            <tr className="text-center">
              <td className="py-3">1</td>
              <td>Velocity Tweaks Basic Tweaking Application</td>
              <td>xOOMvi-aLfQ0b-CJva17-CCFGQ1-7oe4Hb-hNDwQ1</td>
              <td className="  flex justify-center items-center h-16" > <a><IoMdDownload size={30} className="hover:text-gray-400 hover:duration-150 hover:ease-in-out hover:cursor-pointer" /></a> </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#292929] rounded-xl drop-shadow-2xl bg-opacity-50 container mx-auto h-auto py-3 flex justify-center items-center mt-3">
        <span className="text-center">
          Questions, Comments, Concerns? Email us at velocitytweaks@gmail.com or
          visit our{" "}
          <a
            target="_blank"
            href="https://discord.com/invite/velocity"
            className="underline underline-offset-4 font-semibold  hover:text-gray-400 hover:ease-in-out hover:duration-150 hover:cursor-pointer"
          >
            {" "}
            Discord
          </a>
        </span>
      </div>
    </div>
  );
}