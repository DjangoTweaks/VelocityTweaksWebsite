import React from "react";
import Rating from "@mui/material/Rating";

export default function ReviewCard(reviwProps) {
  return (
    <div
      className="block p-6  max-w-lg h-auto bg-[#060606] 
        rounded-3xl border border-gray-200  "
    >
      <h1 className="my-6 text-3xl  font-Inter text-white text-center font-semibold ">
        {reviwProps.username}
      </h1>

      <p className="italic font-thin font-Roboto text-white text-center text-lg ">
        {reviwProps.text}
      </p>

      <div className="text-center my-6">
        <Rating sx={{
          
        }}    name="read-only" value={reviwProps.rating} readOnly />
      </div>
    </div>
  );
}
