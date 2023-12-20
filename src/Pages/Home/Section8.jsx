import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink } from "react-router-dom";
import Cards from "../../Components/Career Slider/Cards";

const Section8 = () => {
  return (
    <div className="flex flex-col mt-[100px]">
      {/* top */}
      <div className="flex flex-col text-center">
        <span className="Roboto font-[700]">Top Career Advice</span>
        <div className="flex items-center gap-[5px] justify-center  mt-[10px] cursor-pointer">
          <NavLink to={"/career"} className="Roboto text-[12px] font-[800] ">
            BROWSE ADVICE
          </NavLink>
          <ArrowForwardIcon className="text-[#00788C]" />
        </div>
      </div>

      {/* bottom */}
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Section8;
