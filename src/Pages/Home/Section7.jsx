import React from "react";
import leftImg from "../../assets/section7.png";
import leftImgBg from "../../assets/section7bg.png";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Section7 = () => {
  return (
    <div className="bg-[#00788C] md:flex-row flex-col flex items-center px-[20px] md:px-[100px] pt-[100px] pb-[100px] gap-[50px]">
      {/* left */}
      <div className="flex relative">
        <img src={leftImg} alt="leftImg" className="w-[350px] z-[999]" />
        <img
          src={leftImgBg}
          alt="leftImgBg"
          className="w-[350px] absolute mt-[7px] ml-[7px]"
        />
      </div>
      {/* right */}
      <div className="flex flex-col text-white gap-[20px] text-center md:text-left">
        <h1 className="Mont text-[35px] font-[600]">
          "A single destination for <br /> strategizing, overseeing, and <br />
          achieving your desired professional <br /> path."
        </h1>

        <p className="Inter font-[200]">
          Discover your ideal career opportunity and generate income with
          renowned <br /> global companies
        </p>

        <NavLink
          to={"/signup"}
          className="text-[#E394FF] cursor-pointer md:w-fit hover:text-[#cb82e5]"
        >
          <Typewriter
            words={["CREATE YOUR PROFILE", "DISCOVER NOW"]}
            cursor
            loop={0}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Section7;
