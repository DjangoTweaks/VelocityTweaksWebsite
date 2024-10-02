import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartStateDB } from "../../../services/state/store";
import { CurrencyConverterUSD } from "../../../utils/CurrencyConverter";
import TableRow from "./TableRow";
import { FaRegTrashCan } from "react-icons/fa6";
import ClearCart from "./ClearCart";

export default function CartTable() {
  const cart = useRecoilValue(cartState);
  const cartStateNew = useRecoilValue(cartStateDB); 

  return (
    <React.Fragment>
      <table className="text-white w-full ">
        <tbody>
          <tr className="">
            <th className="text-start w-32">Product</th>
            <th className="">Quantity</th>
            <th className="">Price</th>
          </tr>

          {cartStateNew.map((data) => {
            if (data.quantity === 0) {
              return <tr key={data.id}></tr>;
            } else {
              return (
                <TableRow
                  key={data.id}
                  title={data.productName}
                  quantity={data.quantity}
                  amount={data.price}
                ></TableRow>
              );
            }
          })}
        </tbody>
      </table>

      <ClearCart/>
    </React.Fragment>
  );
}
