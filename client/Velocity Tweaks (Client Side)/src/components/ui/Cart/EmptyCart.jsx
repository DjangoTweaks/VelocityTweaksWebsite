import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
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
  );
}
