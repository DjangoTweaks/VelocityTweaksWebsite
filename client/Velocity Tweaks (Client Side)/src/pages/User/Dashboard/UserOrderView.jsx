import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import OrdersMap from "./OrdersMap";
import { Link } from "react-router-dom";

export default function UserOrderView() {
  const orders = [
    { orderID: 123, paymentStatus: true, orderTotal: 29.99 },
    { orderID: 124, paymentStatus: false, orderTotal: 19.99 },
    { orderID: 125, paymentStatus: true, orderTotal: 39.99 },
    { orderID: 126, paymentStatus: true, orderTotal: 24.99 },
  ];

  return (
    <div>
      <div className="border-b-2 pb-4 border-gray-600">
        <div className="flex items-center pl-4 pt-4 gap-x-2 text-2xl ">
          <MdOutlineShoppingBag size={25} />

          <div>My Orders</div>
        </div>
        <div className="pl-4 mt-1 text-gray-400 text-sm">
          This page displays your orders and their statuses, allowing you to
          review your purchases.{" "}
        </div>
      </div>
      <div className="pl-4 pt-4 font-Inter font-semibold text-xl">Orders</div>
      <div className="bg-[#292929] rounded-md drop-shadow-2xl bg-opacity-50 mx-4  mt-4 p-3">
        {orders.length !== 0 ? (
          <div>
            {" "}
            <table className="w-full">
              <thead className="border-b-[1px]  border-gray-400 h-[30px] border-opacity-50">
                <tr className="font-Inter text-lg">
                  <th className="font-normal text-start">Order ID</th>
                  <th className="font-normal">Payment Status</th>
                  <th className="font-normal text-end">Order Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((orders) => (
                  <OrdersMap
                    key={orders.orderID}
                    orderID={orders.orderID}
                    paymentStatus={orders.paymentStatus}
                    orderTotal={orders.orderTotal}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <div>
              <div className="w-full py-5">
                <h1 className="font-Inter font-semibold text-2xl text-center pt-3">
                  No orders found. Ready to explore?
                </h1>
                <div className="flex justify-center mt-8 ">
                  {" "}
                  <Link to="/store">
                    {" "}
                    <button className="p-3 w-48 text-xl bg-white hover:bg-gray-300 rounded-lg hover:duration-150 hover:transition hover:ease-in-out text-black font-Inter font-bold ">
                      Shop Now{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
