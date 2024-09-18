import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import "./Home.css"
import Hero from "../../components/ui/Hero";
import AboutUs from "../../components/ui/AboutUs";
import Review from "../../components/ui/Review";
import Footer from "../../components/ui/Footer";
import ContactUs from "../../components/ui/ContactUs";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../utils/ScrollToTopOnMount";

export default function Home() {
  return (
    <div id="homediv" >
      <ScrollToTopOnMount/>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Review></Review>
      <div className="mt-24">
      <ContactUs></ContactUs>
      </div>
    </div>
  );
}
