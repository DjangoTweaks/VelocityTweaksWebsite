import React from "react";
import "../index.css";
import ControlledCarousel from "../components/ui/ReviewCarousel";
import ReviewCard from "../components/ui/ReviewCard";
import FadeInUpwardsText from "../components/ui/FadeInUpwardsText";
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { contactFormState } from "../services/state/store";
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount";

export function Contact() {
  const [responses, setResponses] = useRecoilState(contactFormState);
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
  // data of type object with firstName, email, and query as object properties

  function hasExceededResponses(data) {
    if (responses.length < 5) {
      setResponses((prevResponses) => [...prevResponses, data]);
      return false;
    } else {
      return true;
    }
  }

  const schema = z.object({
    firstName: z
      .string()
      .min(1, "First name must be at least 2 characters long")
      .max(120, "First name must be at most 120 characters long"),
    email: z.string().email(),
    query: z
      .string()
      .min(5, "Message must be at least 5 characters long")
      .max(400, "Message must be at most 400 characters long"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    if (hasExceededResponses(data) === true) {
      toast.warn("Maximum Number Of Queries Sent!", toastProperties);
    } else {
      try {
        const toastAsync = toast.loading("Submitting...", toastProperties);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        axios
          .post(import.meta.env.VITE_domainName + "/api/queries", {
            name: data.firstName,
            email: data.email,
            message: data.query,
          })
          .then((response) =>
            toast.update(toastAsync, {
              render: "Response Successful",
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
      } catch (error) {
        console.log("error caught");
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40% to-[#011422] to-70% bg-blend-screen pb-32">
      <div className="container mx-auto h-full">
      <ScrollToTopOnMount/>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center">
          <div className="ml-2">
            <div className="mt-12">
              <FadeInUpwardsText
                fadeClass="font-Inter text-[35px] text-center md:text-6xl md:pb-4 lg:text-[50px] lg:text-start"
                text="Lets Get In Touch"
              ></FadeInUpwardsText>
            </div>

            <div className="font-Roboto font-light text-md pt-2 w-[320px] mx-auto text-center text-gray-200 md:w-[700px] md:text-xl lg:w-[70%] lg:text-start lg:mx-0 lg:pl-1  ">
              If you're unsure about what you need, feel free to say Hello! We'd
              be delighted to provide more details about our utilities.
            </div>

            <div className="w-[200px] mx-auto  mt-12 pt-4 pb-2 md:w-full md:ml-0 md:flex md:justify-center md:space-x-4 lg:flex-col lg:-ml-3 ">
              <div className="flex items-center h-8 lg:ml-4">
                <TfiEmail size={20} />
                <a
                  href="mailto:“velocitytweaks@gmail.com”"
                  className="ml-2 pb-1 text-sm hover:text-gray-300"
                >
                  velocitytweaks@gmail.com
                </a>
              </div>

              <div className="flex h-8 items-center">
                <FaDiscord size={20} />
                <a
                  href="https://discord.gg/velocitytweaks"
                  target="_blank"
                  className="ml-[7px] pb-0 text-sm md:pb-0 hover:text-gray-300"
                >
                  discord.gg/velocitytweaks
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-[550px] mx-4 lg:ml-0 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#292929] mt-16 bg-opacity-70 rounded-xl border-1 drop-shadow-2xl border-[#2F2930] p-8 py-6 lg:p-8"
            >
              <div className="font-Inter text-[40px] font-medium ">Contact</div>

              <div>
                <div className="font-Roboto font-light pb-1 text-lg">Name</div>

                <input
                  type="text"
                  {...register("firstName")}
                  placeholder="Enter Your First Name"
                  className=" bg-inherit border-1 pl-2 w-[80%]  focus:ring-white focus:border-white h-[30px] border-white rounded-lg md:w-[60%] "
                ></input>
                {errors.firstName ? (
                  <div className="text-red-500 font-Inter font-light pt-1 -mb-2">
                    {errors.firstName.message}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div className="mt-2">
                <div className="font-Roboto font-light pb-1 text-lg">Email</div>

                <input
                  type="text"
                  {...register("email")}
                  placeholder="Enter Your Email"
                  className=" bg-inherit border-1 pl-2  w-[80%]  focus:ring-white focus:border-white h-[30px] border-white rounded-lg md:w-[60%]  "
                ></input>
                {errors.email ? (
                  <div className="text-red-500 font-Inter font-light pt-1 -mb-1">
                    {errors.email.message}
                  </div>
                ) : (
                  <div className="text-red-500 font-Inter font-light -mt-3"></div>
                )}
              </div>

              <div className="mt-2">
                <div className="font-Roboto font-light pb-1 text-lg pt-3">
                  Message
                </div>

                <textarea
                  type="text"
                  {...register("query")}
                  placeholder="Enter Your Message"
                  className=" bg-inherit border-1 pl-2 w-[100%] h-[200px] focus:ring-white focus:border-white  border-white rounded-lg  "
                ></textarea>

                {errors.query ? (
                  <div className="text-red-500 font-Inter font-light -mt-1 ">
                    {errors.query.message}
                  </div>
                ) : (
                  <div className="text-red-500 font-Inter font-light -mt-3 ml-1"></div>
                )}
              </div>

              <div className="mt-6">
                <button className="bg-white rounded-xl p-2 w-[30%] text-center border-1 border-gray-200 text-black font-Inter font-bold hover:bg-gray-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
