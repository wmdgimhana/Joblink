import React from "react";
import SearchCareer from "../../Components/Search/Search Career/SearchCareer";
import PopularCareer from "../../Components/Popular Career/PopularCareer";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Cards from "../../Components/Career Slider/Cards";
import CareerCard from "../../Components/Career Card/CareerCard";
import { careerData } from "../../Components/Career Card/CareerCardData";
import CareerList from "./CareerList";

const Career = () => {
  return (
    <div>
      {/* section1 */}
      <div className="gradientBg career flex flex-col py-[80px] px-[10px] md:px-[150px]">
        {/* title */}
        <div className="Inter flex items-center text-[30px] gap-[5px] font-[700] mb-[20px] ">
          <span className="Inter text-[#ffffff]">
            <Typewriter words={["Career Advices"]} cursor />
          </span>
        </div>

        {/* search box */}
        <SearchCareer />

        {/* search items */}
        <PopularCareer />
      </div>

      {/* section2 */}
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="Inter text-[40px] font-[700] text-center mt-[20px]"
      >
        Career Advices
      </motion.h1>

      {/* cards slider*/}
      <Cards />

      {/* career advices cards */}
      <div className="flex flex-wrap justify-center gap-[20px]">
        <CareerList />
      </div>
    </div>
  );
};

export default Career;
