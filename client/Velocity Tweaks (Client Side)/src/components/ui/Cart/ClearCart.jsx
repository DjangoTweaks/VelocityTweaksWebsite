import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { domainName } from "../../../utils/domainName";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { cartStateDB } from "../../../services/state/store";
import { toast } from "react-toastify";

export default function ClearCart() {

  const navigate = useNavigate(); 
  const setCartStateNew = useSetRecoilState(cartStateDB); 


    const fetchCartData = async () => {
      try {
        
        const response = await axios.get(domainName + "/cart/cart-fix", {
          withCredentials: true,
        });

          const x = response.data.items;

          if (response.data.items.length === 0) {
            return setCartStateNew([]);
          }

          x.forEach((item) => {
            if (item.productName === "WittCepter Product 1") {
              item.price = 9.99;
            }
            if (item.productName === "WittCepter Product 2") {
              item.price = 29.99;
            }
          });


          setCartStateNew(response.data.items); // Populate atom with fetched data
        
      } catch (error) {
          setCartStateNew([]); // Handle error case, e.g., setting to empty array
          console.error("Error fetching cart data:", error);
        
      }
    };


  async function clearCartClick()
  { 
    const response = await axios.post(domainName + "/cart/cart/clear", {}, {
      withCredentials: true
    });
    fetchCartData();
  }
  
  
  return (
    <button onClick={clearCartClick}   className="rounded-lg font-Inter font-medium w-full flex justify-end  mt-2 pr-8">
      <div className="flex justify-center gap-x-1 hover:text-gray-300 hover:duration-150 text-sm pr-3">
        <div className="pt-1">
          <FaRegTrashCan></FaRegTrashCan>
        </div>
        <div className="pt-[1px] font-light">Clear Cart</div>
      </div>
    </button>
  );
}
