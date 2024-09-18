import React from "react";
import SideBarDashboard from "./SideBarDashboard";
import DashboardViews from "./DashboardViews";

export default function Dashboard() {
  return (
    <div className="h-[600px] mb-[600px]">
      <div className="font-Inter text-6xl font-semibold text-center pt-8">
        Dashboard
      </div>

      <div className="container mx-auto mt-12 md:w-[700px]  lg:w-[1000px] ">
        <div className="flex  ">
          <SideBarDashboard></SideBarDashboard>
          <DashboardViews></DashboardViews>
        </div>
      </div>
    </div>
  );
}
