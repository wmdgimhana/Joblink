import React from "react";
import SearchJobs from "../../Components/Search/Search Jobs/SearchJobs";
import PopularJobs from "../../Components/Popular Jobs/PopularJobs";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Section1 = () => {
  return (
    <div className="section1 flex flex-col py-[80px] px-[10px] md:px-[150px] ">
      <div className="z-[999]">
        {/* title */}
        <div className="Inter flex items-center md:text-[30px] text-[25px] gap-[5px] font-[700] mb-[20px] ">
          <span className="text-[#C1BAEB]">Find Your</span>
          <span className="text-white">
            {" "}
            <Typewriter
              words={["Future Jobs", "Courses", "Career Advices"]}
              loop={0}
              cursor={true}
            />
          </span>
        </div>

        {/* searchBox */}
        <SearchJobs />
        <PopularJobs />
      </div>
    </div>
  );
};

export default Section1;
