import React from "react";
import SearchCourses from "../../Components/Search/Search Courses/SearchCourses";
import PopularCourses from "../../Components/Popular Courses/PopularCourses";
import JobSlider from "../../Components/Slider/JobSlider";
import { Typewriter } from "react-simple-typewriter";
import CourseCard from "../../Components/Course Card/CourseCard";
import { courseData } from "../../Components/Course Card/CourseData";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <div>
      <div className="gradientBg flex flex-col py-[80px] px-[10px] md:px-[150px] ">
        {/* title */}
        <div className="Inter flex items-center text-[30px] gap-[5px] font-[700] mb-[20px] ">
          <span className="text-[#C1BAEB]">Find Best</span>
          <span className="text-white">
            <Typewriter words={["Courses"]} cursor />
          </span>
        </div>

        {/* searchBox */}
        <SearchCourses />

        {/*section1 popular courses */}
        <PopularCourses />
      </div>

      {/* Courses */}
      <div>
        <CourseList />
      </div>

      {/* section2 Jobs slider */}
      <JobSlider />
    </div>
  );
};

export default Courses;
