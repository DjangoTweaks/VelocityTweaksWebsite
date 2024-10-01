import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../services/state/store";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { domainName } from "./domainName";

const toastProperties = {
  position: "bottom-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
};

export async function addToCart(utilName, productName, priceId) {
  const toastAsync = toast.loading("Adding To Cart...", toastProperties);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  axios
    .post(
      domainName + "/cart/add-to-cart",
      {
        productName: productName,
        priceId: priceId,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      console.log(utilName + "added to cart:");
      toast.update(toastAsync, {
        render: utilName + " Added To Cart Successfully",
        type: "Success",
        isLoading: false,
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    })
    .catch((error) => {
      console.error("Error adding to cart:", error);
      toast.update(toastAsync, {
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    });
}

export async function removeFromCart(productName, priceId) {
    try {
      // Perform a POST request to remove the item from the cart
      const response = await axios.post(
        domainName + "/cart/decrease",
        {
          productName: productName,
          priceId: priceId,
        },
        {
          withCredentials: true, // Ensure credentials (cookies or tokens) are sent
        }
      );
  
      console.log(productName + " removed from cart:", response.data);
    } catch (error) {
      console.error("Error removing from cart:", error);
  
      // Display a toast notification if there's an error
      toast.error("Failed to remove item from cart", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }
  