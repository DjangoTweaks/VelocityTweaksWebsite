import { FaStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import {
  loggedInUserDropDownAtom,
  reviewValueState,
  reviewValueStateNullSelector,
} from "../../../services/state/store";
import { useRecoilState, useRecoilValue } from "recoil";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { domainName } from "../../../utils/domainName";
import { Bounce, toast } from "react-toastify";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

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

const schema = z.object({
  name: z
    .string()
    .min(1, "Name must be at least 2 characters long")
    .max(120, "First name must be at most 120 characters long"),
  review: z
    .string()
    .min(5, "Review must be at least 5 characters long")
    .max(400, "Review must be at most 400 characters long"),
  email: z.string().email(),
  utility: z.string().min(1, "Please select a utility option"),
});

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function Review() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(domainName + "/home/userinfo", {
        withCredentials: true,
      });
      console.log(result);

      setData(result.data.user);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="border-b-2 pb-4 border-gray-600">
        <div className="flex items-center pl-4 pt-4 gap-x-2 text-2xl ">
          <FaStar size={23} />
          Review
        </div>
        <div className="pl-4 mt-1 text-gray-400 text-sm">
          This page allows you to share your feedback and rate your experience
          with Velocity's Utilities.{" "}
        </div>
      </div>

      <div>
        {data ? (
          <ReviewComponent preloadedValues={data}></ReviewComponent>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

function ReviewComponent({ preloadedValues }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: preloadedValues,
  });

  const [value, setValue] = useRecoilState(reviewValueState);
  const nullReviewChecker = useRecoilValue(reviewValueStateNullSelector);
  const [hover, setHover] = React.useState(-1);

  const onSubmit = async (data) => {
    console.log(data);
    const toastAsync = toast.loading("Submitting...", toastProperties);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    axios
      .post(domainName + "/api/review", {
        name: data.name,
        email: data.email,
        message: data.review,
        rating: value,
        product: data.utility,
      })
      .then((response) =>
        toast.update(toastAsync, {
          render: "Review Submitted Successfully",
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
        })
      )
      .catch((err) => {
        toast.update(toastAsync, {
          render: err.response.data.message,
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
  };

  return (
    <div className="mt-8 max-w-[700px] mx-auto">
      <div className="font-Inter text-4xl font-semibold text-center pt-12 pb-6">
        Write a Review!
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-6 md:w-full md:container md:mx-auto lg:max-w-[1024px]"
      >
        <div className="flex justify-between">
          <div className="font-Inter">Overall Rating:</div>
          <Box
            sx={{
              width: "inherit",
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <Rating
              className=""
              sx={{
                "& .MuiRating-iconEmpty		": {
                  color: "white",
                },
              }}
              name="hover-feedback"
              value={value}
              precision={1.0}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </Box>
        </div>

        <div className="flex justify-between py-3">
          <span className="flex items-center font-Inter">Name:</span>
          <input
            {...register("name")}
            type="text"
            disabled={true}
            placeholder="Discord username or nickname"
            className="border-1 border-white rounded-lg bg-transparent text-white font-Inter focus:ring-white focus:border-white focus:outline-none h-[30px] w-full ml-3 flex items-center disabled:text-gray-400 disabled:border-gray-500 disabled:font-light disabled:cursor-not-allowed "
          ></input>
        </div>

        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}

        <div className="flex justify-between py-3">
          <span className="flex items-center font-Inter">Email:</span>
          <input
            {...register("email")}
            type="text"
            disabled={true}
            placeholder="Enter Email"
            className="border-1 border-white rounded-lg bg-transparent text-white font-Inter focus:ring-white focus:border-white focus:outline-none h-[30px] w-full ml-3 flex items-center disabled:text-gray-400 disabled:border-gray-500 disabled:font-light disabled:cursor-not-allowed"
          ></input>
        </div>

        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}

        <div className="my-2">
          <select
            {...register("utility")}
            className="text-white border-gray-400 bg-transparent rounded-xl h-10 px-4 py-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent transition ease-in-out duration-300"
          >
            <option value="premium" className=" text-white bg-gray-800 ">
              Premium
            </option>
            <option value="basic" className=" bg-gray-800  text-white">
              Basic
            </option>
          </select>
        </div>
        {errors.utility && (
          <div className="text-red-500">{errors.utility.message}</div>
        )}

        <div>
          <span className="font-Inter">Review:</span>
          <div className="pt-2">
            <textarea
              {...register("review")}
              type="text"
              placeholder="Enter Your Review"
              className=" bg-inherit border-1 pl-2 w-[100%] h-[200px] focus:ring-white focus:border-white  border-white rounded-lg  "
            ></textarea>{" "}
          </div>
        </div>
        {errors.review && (
          <div className="text-red-500">{errors.review.message}</div>
        )}

        {nullReviewChecker === true && (
          <div className="text-red-500">Please Enter A Valid Rating </div>
        )}

        <div className="text-center pt-2">
          <button
            disabled={nullReviewChecker}
            type="submit"
            className="w-full  rounded-xl p-3 bg-white text-black font-Inter font-bold text-xl hover:duration-150 hover:ease-in-out hover:bg-slate-300 disabled:bg-gray-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
