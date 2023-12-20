import React from "react";
import { cardItems } from "./CardItems";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const JobSlider = () => {
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
    <div className="bg-[#244C62] pb-[100px] overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="Inter text-[40px] font-[600] text-white text-center pt-[20px] pb-[50px]"
      >
        Our Latest Job Opening
      </motion.h1>
      <Slider {...settings}>
        {cardItems.map((item) => (
          <div
            className="flex flex-col bg-white w-[400px] p-[20px] rounded-tl-3xl rounded-br-3xl gap-[20px]"
            key={item.id}
          >
            {/* company info */}
            <div className="flex">
              {/* company logo */}
              <img
                src={item.logo}
                alt="CLogo"
                className="w-[70px] h-[70px] mr-[15px]"
              />

              {/* company details */}

              <div className="flex flex-col gap-[5px]">
                {/* company name */}
                <span className="Inter text-[#699BF7] font-[600]">
                  {item.company}
                </span>
                {/* location */}
                <span className="Inter font-[600]">{item.location}</span>
                {/* time */}
                <div className="text-[#363636] flex items-center gap-[5px]">
                  <AccessTimeIcon />
                  <span className="Inter text-[14px]">{item.time}</span>
                </div>
              </div>
            </div>

            {/* job details */}
            <div className="flex flex-col gap-[15px]">
              {/* job tile */}
              <span className="Mont font-[600] text-[23px] text-[#3b3b3b]">
                {item.title}
              </span>

              {/* job description */}
              <div>
                <p>
                  {item.description}{" "}
                  <Link
                    to={`/job/${item.id}`}
                    className=" Inter text-[#871282B0] cursor-pointer hover:text-[#5c1458b0]"
                  >
                    see more...
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobSlider;
