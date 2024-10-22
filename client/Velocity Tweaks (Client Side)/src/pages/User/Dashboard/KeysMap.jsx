import React from "react";

export default function KeysMap({id, utilityName, Key}) {
  return (
    <tr>
      <td className="px-3 py-3" >{utilityName}</td>
      <td>{Key}</td>
    </tr>
  );
}
