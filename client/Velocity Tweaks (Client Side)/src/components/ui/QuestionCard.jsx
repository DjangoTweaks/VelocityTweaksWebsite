import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { dropdownStateFamily } from "../../services/state/store";

export default function QuestionCard(props) {
  const [arrowPos, setArrowPos] = useRecoilState(dropdownStateFamily(props.id));

  function dropDownHandler() {
    setArrowPos(!arrowPos);
  }

  return (
    <div className="my-5">
      <div className="pl-3 pr-3 pt-2 pb-2 -mt-2 bg-gradient-to-b from-[#1F1F1F] to-[#292929] h-[50px] rounded-lg drop-shadow-2xl">
        <div className="flex items-center justify-between h-full text-xs font-Inter">
          <div className="lg:text-lg font-Inter font-light" >{props.question}</div>
          <div
            onClick={() => {
              dropDownHandler();
            }}
          >
            {arrowPos ? (
              <IoIosArrowDropupCircle size={25} />
            ) : (
              <IoIosArrowDropdownCircle size={25} />
            )}
          </div>
        </div>
      </div>

      {arrowPos ? (
        <div className="-mt-2 pt-3 pl-3 pb-3 pr-3 rounded-b-lg h-[50%] bg-[#292929] font-Roboto font-light ">
          {props.content}
        </div>
      ) : (
        <motion.div></motion.div>
      )}
    </div>
  );
}
