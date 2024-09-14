import React from "react";
import { CurrencyConverterUSD } from "../../../utils/CurrencyConverter";

export default function TableRow(props) {
  return (
    <tr>
      <td className="">{props.title}</td>
      <td className="text-center">{props.quantity}</td>
      <td className="text-center">{CurrencyConverterUSD(props.amount)}</td>
    </tr>
  );
}
