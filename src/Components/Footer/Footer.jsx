import React from "react";
import "./Footer.css";
import Payment from "../../assets/paymentMethods.png";
import Guarantee from "../../assets/gurantee.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import StarIcon from "@mui/icons-material/Star";
import CallIcon from "@mui/icons-material/Call";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer h-[100%] flex flex-col ">
      {/* top */}
      <div className="md:flex md:justify-between grid grid-cols-1 gap-[20px]   items-center md:px-[80px] px-[20px] pt-[150px]">
        {/* section 1 */}
        <div className="text-center md:text-left">
          <NavLink to={"/"} className={" cursor-pointer inline-block"}>
            <h1 className="Oleo  text-[25px]  ">Job Link</h1>
          </NavLink>
          <p className="Open text-[#67748E]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* section 2 */}
        <div className="text-center flex flex-col  items-center">
          <span className="font-[700] text-[#344767]">SSL SECURED PAYMENT</span>
          <div className="text-[#67748E]">
            <span>Your information is protected by 256-bit</span>
            <span>SSL encryption</span>
          </div>
          <img src={Payment} alt="payment" />
        </div>

        {/* section 3 */}
        <div className="flex flex-col items-center text-center">
          <img src={Guarantee} alt="guarantee" />
          <span className="Open text-[#67748E]">
            Copyright ©2023 Joblink.com
          </span>
        </div>
      </div>
      {/* bottom */}

      <div className="flex items-center flex-wrap px-[10px] justify-center mt-[50px] mb-[20px] gap-[20px]">
        {/* links */}

        <div className="items-center flex gap-[5px] text-[#67748E] cursor-pointer hover:text-[#333a49]">
          <AccountCircleIcon />
          <span className="uppercase">TIKTOK</span>
        </div>

        <div className="items-center flex gap-[5px] text-[#67748E] cursor-pointer hover:text-[#333a49]">
          <InstagramIcon />
          <span className="uppercase">Instagram</span>
        </div>

        <div className="items-center flex gap-[5px] text-[#67748E] cursor-pointer hover:text-[#333a49]">
          <CardGiftcardIcon />
          <span className="uppercase">Freebies</span>
        </div>

        <NavLink
          to={"/faq"}
          className="items-center flex gap-[5px] text-[#67748E] cursor-pointer hover:text-[#333a49]"
        >
          <LiveHelpIcon />
          <span className="uppercase">Faq</span>
        </NavLink>
        <NavLink
          to={"/about-us"}
          className="items-center flex gap-[5px] text-[#67748E] cursor-pointer hover:text-[#333a49]"
        >
          <BookmarkIcon />
          <span className="uppercase">About Us</span>
        </NavLink>

        <NavLink
          to={"/terms"}
          className="items-center flex gap-[5px] text-[#67748E] cursor-pointer hover:text-[#333a49]"
        >
          <StarIcon />
          <span className="uppercase">Terms</span>
        </NavLink>

        <NavLink
          to={"/contact"}
          className="items-center flex gap-[5px] text-[#67748E] cursor-pointer hover:text-[#333a49]"
        >
          <CallIcon />
          <span className="uppercase">Contact Us</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
