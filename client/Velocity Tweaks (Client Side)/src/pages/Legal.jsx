import React from "react";
import { Outlet } from "react-router-dom";

export default function Legal({ Heading }) {
  return (
    <div className="h-full">
      <div className="text-6xl font-Inter font-semibold text-center pt-12">
        {Heading}
      </div>

      <div className="container mx-auto mt-12">
        <div className="bg-[#292929] rounded-xl drop-shadow-2xl bg-opacity-50 h-fit mb-24 p-8">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
