import React from "react";
import { MdKey } from "react-icons/md";

export default function MyKeys() {
  return (
    <div>
      <div className="border-b-2 pb-4 border-gray-600">
        <div className="flex items-center pl-4 pt-4 gap-x-2 text-2xl ">
          <MdKey size={30} />
          My Keys
        </div>
        <div className="pl-4 mt-1 text-gray-400 text-sm">
          This page allows you to view the keys for the premium and basic versions of the utility you have purchased.
        </div>
      </div>
    </div>
  );
}
