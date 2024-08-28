import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";




export default function Footer() {
  return (
    <div className="bg-zinc-950  bg-opacity-60 backdrop-blur-md backdrop-brightness-150 border-t-[0.5px] py-12 border-gray-600 bottom-0 w-full ">
      <div>
        <div className="text-white container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 ">
            <div className="grid col-span-1  md:col-span-3">
              <Link onClick={()=> ScrollToTop()} to="/">
                <h1 className="font-Inter font-black text-xl cursor-pointer">
                  Velocity Tweaks
                </h1>
              </Link>
            </div>

            <div className="col-start-2 md:col-start-4 pl-0 md:pl-0 lg:pl-28 ">
              <h1 className="font-Roboto font-semibold text-xl">Community</h1>
              <ul className="text-gray-300 pt-6 font-Roboto font-light ">
                <a href="https://discord.gg/velocity" target="_blank">
                  <li className="pb-[2px] hover:text-gray-400 hover:duration-150">
                    Discord
                  </li>
                </a>
                <a
                  href="https://www.youtube.com/@VelocityTweaks"
                  target="_blank"
                >
                  <li className="pb-[2px] hover:text-gray-400 hover:duration-150">
                    YouTube
                  </li>
                </a>
              </ul>
            </div>

            <div className="md:col-start-5 pl-0 md:pl-0 lg:pl-28 ">
              <h1 className="font-Roboto font-semibold text-xl">View More</h1>
              <ul className="text-gray-300 pt-6 font-Roboto font-light">
              
                  <NavLink onClick={()=> ScrollToTop()} to="/faq">
                    <li className="pb-[2px] hover:text-gray-400 hover:duration-150">
                      FAQ
                    </li>
                  </NavLink>

                <NavLink onClick={()=> ScrollToTop()}  to="/store">
                  {" "}
                  <li className="pb-[2px] hover:text-gray-400 hover:duration-150">
                    Store
                  </li>
                </NavLink>

                <NavLink onClick={()=> ScrollToTop()} to="/contact">
                  {" "}
                  <li className="pb-[2px] hover:text-gray-400 hover:duration-150">
                    Contact
                  </li>
                </NavLink>
                <NavLink onClick={()=> ScrollToTop()} to="/login">
                  {" "}
                  <li className="pb-[2px] hover:text-gray-400 hover:duration-150">
                    Login
                  </li>
                </NavLink>
              </ul>
            </div>

            <div className="md:col-start-6 pl-0 md:pl-0 lg:pl-28 ">
              <h1 className="font-Roboto font-semibold text-xl ">Legal</h1>
              <ul className="text-gray-300  pt-6 font-Roboto font-light">
                <NavLink onClick={()=> ScrollToTop()} to="/legal/terms-of-service">
                  <li className="pb-[2px] hover:text-gray-400 hover:duration-150">
                    Terms Of Service
                  </li>
                </NavLink>
                <NavLink onClick={()=> ScrollToTop()} to="/legal/privacy-policy">
                  <li className="pb-[2px] hover:text-gray-400 hover:duration-150">
                    Privacy Policy
                  </li>
                </NavLink>
                <NavLink onClick={()=> ScrollToTop()} to="/legal/refund-policy">
                  <li className="pb-[2px] hover:text-gray-400 hover:duration-150">
                    Refund Policy
                  </li>
                </NavLink>
                <NavLink onClick={()=> ScrollToTop()} to="/legal/cookie-policy">
                  <li className="pb-[2px] hover:text-gray-400 hover:duration-150">
                    Cookie Policy
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex  justify-between mt-24 container mx-auto md:gap-x-2">
          <div className="font-Roboto text-sm md:text-base font-normal ">
            Copyright © 2024 Velocity Tweaks, All Rights Reserved.
          </div>

          <div className="font-Roboto text-sm md:text-base font-light">
            <div className="flex">
              {/* <div>
              Developed By
              </div>
              
              <a target="_blank" href="https://github.com/DjangoTweaks">
                &nbsp;@DjangoTweaks&nbsp;
              </a>
              and
              <a target="_blank" href="">
                &nbsp;@AadityaDawkar&nbsp;
              </a> */}

              <div>
                Developed By{" "}
                <a
                  href="https://github.com/DjangoTweaks"
                  className="hover:text-gray-600 hover:duration-150 text-gray-400"
                  target="_blank"
                >
                  @DjangoTweaks
                </a>{" "}
                and{" "}
                <a
                  className="hover:text-gray-600 hover:duration-150 text-gray-400"
                  href=""
                  target="_blank"
                >
                  @AadityaDawkar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
