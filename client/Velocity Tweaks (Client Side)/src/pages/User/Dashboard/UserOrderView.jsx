import React, { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import OrdersMap from "./OrdersMap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserOrderView() {
  const [loadingState, setLoadingState] = useState(false);
  const [ordersState, setOrdersState] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchOrders = async () => {
      setLoadingState(true);
      const response = await axios.get(import.meta.env.VITE_domainName + "/auth/check-auth", {
        withCredentials: true,
      });

      if (!ignore) {
        console.log(response.data.orders);
        setOrdersState(response.data.orders);
        setLoadingState(false);
        
      }
    };
  
      fetchOrders();
  
    return () => {
      ignore = true;
    };
  }, []);

  if (loadingState) {
    return <div className="text-white flex justify-center mt-12">Loading Orders...</div>;
  }



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
        {ordersState.length !== 0 ? (
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
                {ordersState.map((ordersState, index) => (
                  <OrdersMap
                    key={index}
                    orderID={ordersState._id}
                    paymentStatus={ordersState.status}
                    orderTotal={ordersState.amount}
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
