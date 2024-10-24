import React, { useState } from "react";
import FadeInUpwardsText from "./FadeInUpwardsText";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { contactFormState } from "../../services/state/store";

export default function ContactUs() {
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
        await new Promise((resolve) => setTimeout(resolve, 2000));
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

  // &nbsp;

  return (
    <div className="text-white font-Roboto font-thin h-[850px] ">
      <FadeInUpwardsText
        text="Contact Us"
        fadeClass="container mx-auto flex justify-center font-Inter  font-semibold text-6xl md:text-8xl"
      ></FadeInUpwardsText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container ml-3 md:mx-auto flex justify-around mt-12 lg:mt-6">
          <div className="w-4/5 md:w-3/5">
            <div className="w-inherit">
              <div className="text-xl mb-1 ml-1">First Name</div>

              <div>
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="Enter First Name"
                  className="border border-[#ADBDFF] placeholder-slate-300 focus:border-[#ADBDFF] mb-4  bg-black rounded-xl w-full md:w-3/5 font-normal "
                ></input>

                {errors.firstName ? (
                  <div className="text-red-500 font-Inter font-light -mt-3 ml-1">
                    {errors.firstName.message}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="text-xl mb-1 ml-1 mt-3">Email</div>
              <div>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Enter Email"
                  className="border border-[#ADBDFF] focus:border-[#ADBDFF] placeholder-slate-300 mb-4 bg-black rounded-xl w-full md:w-3/5 font-normal"
                ></input>
                {errors.email ? (
                  <div className="text-red-500 font-Inter font-light -mt-3 ml-1">
                    {errors.email.message}
                  </div>
                ) : (
                  <div className="text-red-500 font-Inter font-light -mt-3 ml-1"></div>
                )}
              </div>

              <div className="h-[400px]">
                <div className="text-xl mb-1 ml-1 mt-3">Message</div>
                <div>
                  <textarea
                    {...register("query")}
                    type="text"
                    placeholder="Enter Message Here"
                    className="border border-[#ADBDFF] placeholder-slate-300  focus:border-[#ADBDFF] bg-black h-[350px] font-normal md:h-[380px] rounded-xl w-[350px] md:w-4/5"
                  ></textarea>
                  {errors.query ? (
                    <div className="text-red-500 font-Inter font-light -mt-1 ml-1">
                      {errors.query.message}
                    </div>
                  ) : (
                    <div className="text-red-500 font-Inter font-light -mt-3 ml-1"></div>
                  )}
                </div>
              </div>

              <div className="mt-2 md:mt-11">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="rounded-full px-2 py-1 w-[120px] lg:w-[150px] text-xl bg-inherit border-white border hover:ease-in-out  hover:bg-[#212121] disabled:bg-[#212121]  hover:transition duration-600 ease-in-out"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>

          <div className="w-2/5">
            <svg
              className="-ml-24 hidden md:block "
              width="890"
              height="900"
              viewBox="0 0 900 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_85_203)" filter="url(#filter0_d_85_203)">
                <path
                  d="M178.221 750.674L301.661 638.819C305.997 634.534 311.838 632.113 317.936 632.072H764.833C768.357 632.073 771.742 630.698 774.265 628.24C776.789 625.782 778.25 622.436 778.338 618.917V60.0431C778.25 56.5234 776.789 53.1775 774.265 50.7196C771.742 48.2617 768.357 46.8865 764.833 46.8876H64.0995C60.666 46.9756 57.4028 48.4004 55.0059 50.858C52.609 53.3157 51.2682 56.6117 51.2693 60.0431V619.052C51.2687 620.808 51.6202 622.547 52.3029 624.165C52.9857 625.784 53.9859 627.249 55.2447 628.475C56.5034 629.701 57.9951 630.663 59.6319 631.304C61.2687 631.945 63.0174 632.252 64.7748 632.207H154.789C161.01 632.225 166.97 634.706 171.362 639.107C175.755 643.508 178.221 649.47 178.221 655.685V750.674ZM186.122 447.085C179.854 447.085 173.842 449.573 169.41 454.001C164.977 458.429 162.487 464.435 162.487 470.698C162.487 476.96 164.977 482.966 169.41 487.394C173.842 491.822 179.854 494.31 186.122 494.31H463.187C469.456 494.31 475.467 491.822 479.9 487.394C484.332 482.966 486.822 476.96 486.822 470.698C486.822 464.435 484.332 458.429 479.9 454.001C475.467 449.573 469.456 447.085 463.187 447.085H186.122ZM186.122 178.173C179.854 178.173 173.842 180.661 169.41 185.089C164.977 189.517 162.487 195.523 162.487 201.785C162.487 208.048 164.977 214.054 169.41 218.482C173.842 222.91 179.854 225.398 186.122 225.398H643.418C646.606 225.569 649.795 225.089 652.791 223.988C655.786 222.887 658.526 221.188 660.843 218.994C663.16 216.8 665.005 214.158 666.266 211.228C667.527 208.299 668.177 205.143 668.177 201.954C668.177 198.765 667.527 195.609 666.266 192.68C665.005 189.75 663.16 187.108 660.843 184.914C658.526 182.72 655.786 181.021 652.791 179.92C649.795 178.819 646.606 178.339 643.418 178.51L186.122 178.173ZM186.122 312.629C180.116 312.951 174.462 315.561 170.325 319.923C166.188 324.284 163.881 330.064 163.881 336.073C163.881 342.082 166.188 347.862 170.325 352.223C174.462 356.584 180.116 359.195 186.122 359.517H595.947C601.952 359.195 607.606 356.584 611.743 352.223C615.881 347.862 618.187 342.082 618.187 336.073C618.187 330.064 615.881 324.284 611.743 319.923C607.606 315.561 601.952 312.951 595.947 312.629H186.122ZM327.254 679.095L171.941 821.242C168.761 824.752 164.593 827.219 159.985 828.32C155.376 829.421 150.542 829.105 146.117 827.412C141.691 825.72 137.882 822.73 135.187 818.836C132.493 814.941 131.04 810.324 131.019 805.59V679.095H64.0995C48.1656 679.077 32.8895 672.745 21.6225 661.489C10.3555 650.232 4.01787 634.97 4 619.052L4 60.0431C4.01787 44.1242 10.3555 28.8624 21.6225 17.6059C32.8895 6.34955 48.1656 0.0178564 64.0995 0L764.833 0C780.768 0.0355648 796.04 6.3708 807.314 17.6214C818.588 28.8721 824.946 44.1235 825 60.0431V619.052C824.946 634.971 818.588 650.223 807.314 661.473C796.04 672.724 780.768 679.059 764.833 679.095H327.254Z"
                  fill="url(#paint0_linear_85_203)"
                  fillOpacity="0.14"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_85_203"
                  x="0"
                  y="0"
                  width="829"
                  height="837"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_85_203"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_85_203"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_85_203"
                  x1="414.5"
                  y1="0"
                  x2="414.5"
                  y2="828.964"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C0211E" />
                  <stop offset="1" stopColor="#07A4FF" />
                </linearGradient>
                <clipPath id="clip0_85_203">
                  <rect
                    width="821"
                    height="829"
                    fill="white"
                    transform="translate(4)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
}
