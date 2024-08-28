import React from "react";
import { Outlet } from "react-router-dom";

export default function DashboardViews() {
  return (
    <div className="bg-gray-800 bg-opacity-60  h-screen rounded-md w-full ml-3 border-[2px] border-gray-700 ">
      <Outlet></Outlet>
    </div>
  );
}
