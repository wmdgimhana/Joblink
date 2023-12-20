import React from "react";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import "./Section5.css";
import { motion } from "framer-motion";

const companyLogos = [
  {
    id: 1,
    image: c1,
  },

  {
    id: 2,
    image: c2,
  },

  {
    id: 3,
    image: c3,
  },

  {
    id: 4,
    image: c4,
  },

  {
    id: 5,
    image: c5,
  },

  {
    id: 6,
    image: c6,
  },

  {
    id: 7,
    image: c1,
  },

  {
    id: 8,
    image: c2,
  },

  {
    id: 9,
    image: c1,
  },

  {
    id: 10,
    image: c1,
  },

  {
    id: 11,
    image: c1,
  },

  {
    id: 12,
    image: c1,
  },

  //   {
  //     id: 13,
  //     image: c1,
  //   },

  //   {
  //     id: 14,
  //     image: c1,
  //   },

  //   {
  //     id: 15,
  //     image: c1,
  //   },

  //   {
  //     id: 16,
  //     image: c1,
  //   },
];

const Section5 = () => {
  return (
    <div className="flex justify-center items-center">
      {/* left */}
      <div className="flex md:flex-row flex-col px-[20px] md:px-[100px] md:justify-center items-center container">
        <div className="Mont text-[40px] font-[500] md:flex-2 flex gap-[20px] items-center ">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <span className="text-[#451A85] ">
              The Best
              <br className="hidden md:block" />
              Company
            </span>
            <br />
            Associated With
            <br />
            Us
          </motion.h1>

          {/* line */}
          <div className="w-[5px] md:block hidden h-[400px] bg-[#D9D9D9]"></div>
        </div>
        {/* right */}

        <div className="md:flex-1  hidden md:block ">
          {/* company logos map */}
          <Swiper
            slidesPerView={4}
            grid={{
              rows: 2,
            }}
            spaceBetween={2}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {companyLogos.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt="clogo"
                  key={item.id}
                  className="w-[100px] h-[100px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="md:flex-1  md:hidden ">
          {/* company logos map */}
          <Swiper
            slidesPerView={1}
            grid={{
              rows: 2,
            }}
            spaceBetween={2}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {companyLogos.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt="clogo"
                  key={item.id}
                  className="w-[100px] h-[100px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section5;
