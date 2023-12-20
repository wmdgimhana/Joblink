import React from "react";
import ForeignJobsSearch from "../../Components/Search/Foreign Jobs/ForeignJobsSearch";
import JobSlider from "../../Components/Slider/JobSlider";
import PopularFJobs from "../../Components/Popular Foreign Jobs/PopularFJobs";
import { Typewriter } from "react-simple-typewriter";
import { jobData } from "../../Components/Job Card/JobData";
import JobCard from "../../Components/Job Card/JobCard";
import ForeignJobsList from "./ForeignJobsList";

const ForeignJobs = () => {
  return (
    <div>
      <div className="gradientBg flex flex-col py-[80px] px-[10px] md:px-[150px] ">
        {/* title */}
        <div className="Inter flex items-center text-[30px] gap-[5px] font-[700] mb-[20px] ">
          <span className="text-[#C1BAEB]">Find</span>
          <span className="text-white">
            <Typewriter words={["Foreign Jobs"]} cursor />
          </span>
        </div>

        {/* searchBox */}
        <ForeignJobsSearch />

        {/* Popular keywords */}
        <PopularFJobs />
      </div>
      {/* Popular jobs slider */}
      <JobSlider />

      {/* Foreign Jobs */}
      <div className="mt-[10%] mx-[20px] flex flex-wrap gap-[20px] justify-center">
        <ForeignJobsList />
      </div>
    </div>
  );
};

export default ForeignJobs;
