import React from "react";
import { CurrencyConverterUSD } from "../../../utils/CurrencyConverter";

export default function OrdersMap({ orderID, paymentStatus, orderTotal }) {
  let num = orderTotal / 100;

  return (
    <tr className="text-center">
      <td className="text-start py-3">#{orderID}</td>
      <td className="">
        {paymentStatus === "paid" ? (
          <span className="w-4 h-3 py-1 px-3 font-bold text-black font-Inter bg-white rounded-md">
            Paid
          </span>
        ) : (
          <span className="w-4 h-3 py-1 px-3 font-bold text-black font-Inter bg-red-500 rounded-md">
            Failed
          </span>
        )}
      </td>
      <td className="text-end ">{CurrencyConverterUSD(num)}</td>
    </tr>
  );
}
