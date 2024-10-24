import React from "react";
import { cartState, cartStateDB } from "../../../services/state/store";
import { useRecoilValue } from "recoil";
import { CurrencyConverterUSD } from "../../../utils/CurrencyConverter";
import axios from "axios";

export default function CartTotal() {
  const cart = useRecoilValue(cartStateDB);

  function SubTotal() {
    return cart.reduce((accumulator, currentVal) => {
      return accumulator + currentVal.quantity * currentVal.price;
    }, 0);
  }

  function GrandTotal() {
    let tax = 0;
    return SubTotal() + tax;
  }

  //   console.log("SubTotal is: ", SubTotal());
  async function InitiateStripeCheckoutSession()
  {
    try {
      const response = await axios.post(import.meta.env.VITE_domainName + "/checkout/", {}, {
        withCredentials: true
      }) 

      window.location.href =  response.data; 
      console.log(response); 

    } catch (error) {
      console.log(error);        
    }
  }


  return (
    <div>
      <div className="bg-[#292929] rounded-xl drop-shadow-2xl bg-opacity-50 mx-4 mt-4 p-4">
        <div className="flex justify-between px-1">
          <div className="font-Inter font-light text-sm text-white text-opacity-70">
            Subtotal
          </div>
          <div className="font-Inter font-normal text-sm text-white text-opacity-70">
            {CurrencyConverterUSD(SubTotal())}
          </div>
        </div>

        <div className="flex justify-between px-1">
          <div className="font-Inter font-light text-sm text-white text-opacity-70">
            Discount
          </div>
          <div className="font-Inter font-normal text-sm text-white text-opacity-70">
            -$0.00
          </div>
        </div>
        <div className="flex justify-between px-1 py-4">
          <div className="font-Inter font-bold text-[20px] ">Total</div>
          <div className="font-Inter font-bold text-[20px]">
            {CurrencyConverterUSD(GrandTotal())}
          </div>
        </div>
        <button onClick={()=>{InitiateStripeCheckoutSession()}}  className="bg-white hover:ease-in-out hover:duration-75 hover:bg-slate-200 rounded-[503px] p-2 text-black font-Roboto font-bold px-2 w-full ">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}
