import React from "react";
import { Link } from "react-router-dom";

export default function Cancellation() {
  return (
    <div className="h-full pb-36">
      <div className="font-Inter text-6xl w-full flex justify-center font-semibold pt-12">
        Payment Failed
      </div>

      <div className="container mx-auto text-[18px] px-12 mt-12 font-Inter font-extralight text-center text-wrap">
        We noticed that you cancelled your payment. No charges were made to your
        account. If you changed your mind or encountered any issues during
        checkout, you can try again by visiting our{" "}
        <Link to="/store">
          {" "}
          <span className="underline underline-offset-4 font-semibold  hover:text-gray-400 hover:ease-in-out hover:duration-150">
            store
          </span>
        </Link>{" "}
        page or reach out to us personally for assistance.
      </div>

      <div className="bg-[#292929] rounded-xl drop-shadow-2xl bg-opacity-50 container mx-auto h-auto py-3  flex justify-center items-center mt-10">
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
