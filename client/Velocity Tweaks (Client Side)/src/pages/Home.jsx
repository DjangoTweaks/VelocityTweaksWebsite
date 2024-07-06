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
import Footer from "../components/ui/Footer";
import ContactUs from "../components/ui/ContactUs";

export function Home() {
  return (
    <div>
      <RecoilRoot>
        <div className="scroll-smooth" >   
           <NavBar></NavBar>
        <Hero></Hero>
        <AboutUs></AboutUs>
        <Review></Review>
        <div className="mt-24" >
        <ContactUs ></ContactUs>
        </div>
        
        <div  >
        <Footer></Footer>
        </div>
        </div>
       
        
      </RecoilRoot>
    </div>
  );
}
