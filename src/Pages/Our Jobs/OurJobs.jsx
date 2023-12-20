import React from "react";
import PopularJobs from "../../Components/Popular Jobs/PopularJobs";
import JobSlider from "../../Components/Slider/JobSlider";
import SearchJobs from "../../Components/Search/Search Jobs/SearchJobs";
import { Typewriter } from "react-simple-typewriter";
import JobCard from "../../Components/Job Card/JobCard";
import { jobData } from "../../Components/Job Card/JobData";
import JobList from "./JobList";

const OurJobs = () => {
  return (
    <div>
      <div className="gradientBg flex flex-col py-[80px] px-[10px] md:px-[150px] ">
        {/* title */}
        <div className="Inter flex items-center text-[30px] gap-[5px] font-[700] mb-[20px] ">
          <span className="text-[#C1BAEB]">Find Best</span>
          <span className="text-white">
            <Typewriter words={["Jobs"]} cursor />
          </span>
        </div>

        {/* searchBox */}
        <SearchJobs />

        {/* Popular Jobs searchs */}

        <PopularJobs />
      </div>

      {/* jobs slider */}
      <JobSlider />

      {/* job cards */}
      <div className="mt-[10%] mx-[20px] flex flex-wrap gap-[20px] justify-center">
        <JobList />
      </div>
    </div>
  );
};

export default OurJobs;
