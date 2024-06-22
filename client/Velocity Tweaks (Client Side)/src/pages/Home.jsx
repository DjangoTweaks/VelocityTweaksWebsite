import React from "react";
import NavBar from "../components/ui/NavBar";
import "../index.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Hero from "../components/ui/Hero";
import AboutUs from "../components/ui/AboutUs";
import Review from "../components/ui/Review";

export function Home() {
  return (
    <div>
      <RecoilRoot>
        <NavBar></NavBar>
        <Hero></Hero>
        <AboutUs></AboutUs>
        <Review></Review>
      </RecoilRoot>
    </div>
  );
}
