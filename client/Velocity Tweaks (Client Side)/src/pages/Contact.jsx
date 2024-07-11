import React from "react";
import '../index.css'
import ControlledCarousel from "../components/ui/ReviewCarousel";
import ReviewCard from "../components/ui/ReviewCard";
export function Contact() {
  return <React.Fragment>
      <div className="mx-auto px-10" >
      <ReviewCard
          username="Akshat Kharbanda"
          text="I liked the optimization utility a lot, gave me a lot of fps. Would recommend to anyone in the future"
          rating={3}
        />

      </div>
    Contact US</React.Fragment>;
}
