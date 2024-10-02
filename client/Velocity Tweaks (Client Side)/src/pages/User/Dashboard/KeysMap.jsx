import React from "react";

export default function KeysMap({id, utilityName, Key}) {
  return (
    <tr>
      <td className="py-3">{id}</td>
      <td className="px-3" >{utilityName}</td>
      <td>{Key}</td>
    </tr>
  );
}
