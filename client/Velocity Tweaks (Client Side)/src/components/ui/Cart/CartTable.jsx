import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../../services/state/store";
import { CurrencyConverterUSD } from "../../../utils/CurrencyConverter";
import TableRow from "./TableRow";

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
    </React.Fragment>
  );
}
