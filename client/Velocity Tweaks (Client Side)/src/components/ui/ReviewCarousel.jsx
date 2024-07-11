import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";

export default function ControlledCarousel() {
  

  
  
  var settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    className: "center",
    autoplay: true,
    autoplaySpeed: 30000,
    speed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextButtonArrow />,
    prevArrow: <PrevButtonArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      id: 1,
      username: "Akshat Kharbanda",
      text: "I liked the optimization utility a lot, gave me a lot of fps. Would recommend to anyone in the future",
      rating: 5,
    },
    {
      id: 2,
      username: "Jane Doe",
      text: "The utility was easy to use and improved my system's performance noticeably.",
      rating: 4,
    },
    {
      id: 3,
      username: "John Smith",
      text: "Didn't see much improvement, but it's user-friendly.",
      rating: 3,
    },
    {
      id: 4,
      username: "Alice Johnson",
      text: "Fantastic tool! My games run so much smoother now.",
      rating: 5,
    },
    {
      id: 5,
      username: "Bob Brown",
      text: "It crashed a few times, but when it worked, it was great.",
      rating: 3,
    },
    {
      id: 6,
      username: "Carol White",
      text: "Saved me from having to upgrade my hardware. Highly recommended!",
      rating: 5,
    },
    {
      id: 7,
      username: "Dave Wilson",
      text: "Good tool, but a bit pricey for what it offers.",
      rating: 4,
    },
    {
      id: 8,
      username: "Eve Adams",
      text: "The best optimization software I've used. My PC feels brand new.",
      rating: 5,
    },
    {
      id: 9,
      username: "Frank Green",
      text: "It's okay, but there are free alternatives that are just as good.",
      rating: 3,
    },
    {
      id: 10,
      username: "Grace Lee",
      text: "This utility has made a noticeable difference in my system's speed.",
      rating: 4,
    },
    {
      id: 11,
      username: "Hank Martin",
      text: "Worked well for the first few weeks, but then my system started slowing down again.",
      rating: 2,
    },
  ];

  return (
    <div >
      <Slider {...settings} className="slider-container">
        {data.map((d) => {
          return (
            <ReviewCard
              key={d.id}
              username={d.username}
              text={d.text}
              rating={d.rating}
            ></ReviewCard>
          );
        })}
      </Slider>
    </div>
  );
}


function NextButtonArrow()
{
  return(<div>

  </div>);

}


function PrevButtonArrow()
{
  return(<div>
    
    </div>);
}