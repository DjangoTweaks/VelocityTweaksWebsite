import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../../services/state/store";
import { CurrencyConverterUSD } from "../../../utils/CurrencyConverter";
import TableRow from "./TableRow";
import { FaRegTrashCan } from "react-icons/fa6";

export default function CartTable() {
  const cart = useRecoilValue(cartState);

  return (
    <React.Fragment>
      <table className="text-white w-full ">
        <tbody>
          <tr className="">
            <th className="text-start w-32">Product</th>
            <th className="">Quantity</th>
            <th className="">Price</th>
          </tr>

          {cart.map((data) => {
            if (data.count === 0) {
              return <tr key={data.id}></tr>;
            } else {
              return (
                <TableRow
                  key={data.id}
                  title={data.productName}
                  quantity={data.count}
                  amount={data.price}
                ></TableRow>
              );
            }
          })}
        </tbody>
      </table>

      <button className="rounded-lg font-Inter font-medium w-full flex justify-end  mt-2 pr-8">
        <div className="flex justify-center gap-x-1 hover:text-gray-300 hover:duration-150 text-sm pr-3">
          <div className="pt-1">
            <FaRegTrashCan></FaRegTrashCan>
          </div>
          <div className="pt-[1px] font-light" >Clear Cart</div>
        </div>
      </button>
    </React.Fragment>
  );
}
