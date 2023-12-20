import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ForeignJobs from "../Pages/Foreign Jobs/ForeignJobs";
import Courses from "../Pages/Courses/Courses";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Job from "../Pages/Job/Job";
import OurJobs from "../Pages/Our Jobs/OurJobs";
import Course from "../Pages/Course/Course";
import Contact from "../Pages/Contact/Contact";
import Aboutus from "../Pages/About us/Aboutus";
import FAQ from "../Pages/FAQ/FAQ";
import Terms from "../Pages/Terms/Terms";
import SingleCareer from "../Pages/SingleCareer/SingleCareer";
import Checkout from "../Pages/Checkout Course/Checkout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="foreign-jobs" element={<ForeignJobs />} />
      <Route path="courses/:id" element={<Courses />} />
      <Route path="course/:id" element={<Course />} />
      <Route path="career" element={<Career />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="job/:id" element={<Job />} />
      <Route path="ourjobs/:id" element={<OurJobs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about-us" element={<Aboutus />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="terms" element={<Terms />} />
      <Route path="career-item/:id" element={<SingleCareer />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Routers;
