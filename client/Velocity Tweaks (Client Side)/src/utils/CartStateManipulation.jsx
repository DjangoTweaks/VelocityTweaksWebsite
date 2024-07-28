import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../services/state/store";

export default function CartStateManipulation() {
  const [cart, setCart] = useRecoilState(cartState);

  return <></>;
}

export function incrementCart(id) {
  const [cart, setCart] = useRecoilState(cartState);

  return setCart((prevItem) => {
    console.log(prevItem);
    return prevItem.map((data) => {
      if (data.id === id && data.count < 10) {
        return { ...data, count: data.count + 1 };
      } else {
        return data;
      }
    });
  });
}

export function decrementCart(id) {
  const [cart, setCart] = useRecoilState(cartState);

  return setCart((prevItem) => {
    // console.log(prevItem);
    return prevItem.map((data) => {
      if (data.id === id && data.count > 0) {
        return { ...data, count: data.count - 1 };
      } else {
        return data;
      }
    });
  });
}
