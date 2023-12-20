import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Section3 = () => {
  const courseItems = [
    {
      id: 1,
      name: "FrontEnd Development Course",
    },

    {
      id: 2,
      name: "Object Oriented Programming",
    },

    {
      id: 3,
      name: "Computer Science",
    },

    {
      id: 4,
      name: "BackEnd Development",
    },
  ];

  return (
    <div className="section3 flex flex-col">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="Inter text-white font-[600] text-[40px] text-center pt-[20px] pb-[50px] z-[999]"
      >
        Recent Courses
      </motion.h1>

      {/* course Items */}

      <div className="flex flex-col gap-[20px]    justify-center items-center z-[999]">
        {courseItems.map((item) => (
          <Link
            to={`course/${item.id}`}
            key={item.id}
            className="bg-[#00788C] text-white flex p-[10px] items-center justify-between md:w-[50%] w-[90%]  cursor-pointer hover:bg-[#166472]"
          >
            <span>{item.name}</span>
            <div className="flex items-center justify-center bg-[#B869B3] text-white p-[5px] rounded-[50px]">
              <ArrowForwardIcon />
            </div>
          </Link>
        ))}

        {/* browse courses btn */}
        <div className="flex items-center gap-[5px] pb-[50px]">
          <NavLink
            to={"/courses/1"}
            className="text-end text-white cursor-pointer"
          >
            Browse Courses
          </NavLink>
          <ArrowForwardIcon className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
