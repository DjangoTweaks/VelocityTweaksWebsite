import React from "react";
import "./AdminLogin.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AdminLogin() {
  const schema = z.object({
    username: z
      .string()
      .min(1, "First name must be at least 2 characters long"),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="">
      <h1 className="text-white font-Inter font-semibold text-4xl md:text-5xl pt-12 flex justify-center">
        Admin Login Panel
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center h-screen items-center -mt-60 "
      >
        <div className="flex flex-col gap-4 w-[350px] ">
          <input
            {...register("username")}
            type="text"
            className="rounded-lg h-8 text-black "
            placeholder="Username"
          ></input>
          {errors.username && (
            <span className="text-red-500 -mt-3">
              {errors.username.message}
            </span>
          )}

          <input
            {...register("password")}
            type="password"
            className="rounded-lg h-8 text-black "
            placeholder="Password"
          ></input>
          {errors.password && (
            <span className="text-red-500 -mt-3">
              {errors.password.message}
            </span>
          )}

          <button
            type="submit"
            className="bg-white h-8 rounded-lg  hover:ease-in-out hover:duration-150 font-Inter text-black font-semibold hover:bg-gray-300 "
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
