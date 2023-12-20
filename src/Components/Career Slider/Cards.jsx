import React from "react";
import { cardData } from "./CardData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  // slider settings

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="cardSlider">
      <div className="mt-[20px] mb-[50px] px-[20px] md:px-[100px]">
        <Slider {...settings} className="overflow-hidden">
          {cardData.map((item) => (
            <Link to={`/career-item/${item.id}`} key={item.id}>
              <div className="Arial flex flex-col bg-white  p-[10px] shadow-xl rounded-lg">
                <img src={item.img} alt="cardImg" className="w-[200px]" />
                <span
                  style={{ backgroundColor: `${item.labelColor}` }}
                  className="w-fit text-[14px] px-[5px] mt-[10px] mb-[10px] "
                >
                  {item.label}
                </span>
                <p>{item.desc}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cards;
