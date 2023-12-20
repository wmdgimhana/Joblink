import React from "react";
import Section1 from "./Section1";
import JobSlider from "../../Components/Slider/JobSlider";
import Section3 from "./Section3";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Top Header */}

      {/* Navigation bar */}

      {/* Section 1 Find Your Future Job. */}
      <Section1 />

      {/* Section 2 Our Latest Job Opening */}
      <JobSlider />

      {/* Section 3 Recent Courses */}
      <Section3 />

      {/* section 4 Our Headhunted*/}

      {/* section 5 The Best Company Associated With Us */}
      <Section5 />

      {/* section 6 Get Headhunted by Employers */}
      <Section6 />

      {/* section7  A single destination for */}
      <Section7 />

      {/* section8 Top Career Advice */}
      <Section8 />
    </div>
  );
};

export default Home;
