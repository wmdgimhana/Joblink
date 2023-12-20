import React from "react";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const Navbar = () => {
  // Mobile menu open trigger

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* top */}

      <div className="top ">
        <div className="flex items-center   justify-between px-[20px] md:px-[100px]">
          {/* logo */}
          <Link
            to={"/"}
            className="flex items-center  text-[15px] cursor-pointer"
          >
            <img src={Logo} alt="logo" />
            <span className="Mont font-[600] text-[#344767]">JoB LINK</span>
          </Link>

          {/*Mobile screen menu */}
          <div className="flex md:hidden">
            {menuOpen ? (
              <div onClick={() => setMenuOpen(false)}>
                <CloseIcon style={{ fontSize: 35 }} />
              </div>
            ) : (
              <div onClick={() => setMenuOpen(true)}>
                <MenuIcon style={{ fontSize: 35 }} />
              </div>
            )}
          </div>

          {/* buttons */}
          <div className="btns hidden md:flex gap-[20px]">
            <Link
              to={"/signup"}
              className="Poppins bg-[#6E46AE] flex items-center active:scale-y-75 transition-transform justify-center text-white rounded-md p-[5px] px-[10px] text-[14px] hover:bg-[#5e3c96]"
            >
              Register
            </Link>
            <Link
              to={"/login"}
              className="Poppins bg-transparent text-[#6E46AE] flex items-center justify-center rounded-md border-[3px] px-[10px] p-[5px] text-[14px] border-[#D9DBE9] hover:bg-[#ebebeb]  border-solid active:scale-y-75 transition-transform "
            >
              Log in
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu items */}
      {menuOpen && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "90%", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden flex flex-col z-[1000]  bg-white absolute  items-center w-[80%] h-[100vh] right-[0] pt-[20%] gap-[20px] text-[20px] "
        >
          <NavLink
            to={"/foreign-jobs"}
            className="Poppins cursor-pointer text-[#212121] hover:text-[#000000]"
            onClick={() => setMenuOpen(false)}
          >
            Foreign Jobs
          </NavLink>
          <NavLink
            to={"/courses/1"}
            className="Poppins cursor-pointer text-[#212121] hover:text-[#000000]"
            onClick={() => setMenuOpen(false)}
          >
            Our Courses
          </NavLink>
          <NavLink
            to={"/ourjobs/1"}
            className="Poppins cursor-pointer text-[#212121] hover:text-[#000000]"
            onClick={() => setMenuOpen(false)}
          >
            Our Jobs
          </NavLink>
          <NavLink
            to={"/career"}
            className="Poppins cursor-pointer text-[#212121] hover:text-[#000000]"
            onClick={() => setMenuOpen(false)}
          >
            Career Advice
          </NavLink>

          <div className="btns flex flex-col w-[150px] gap-[20px]">
            <Link
              to={"/signup"}
              className="Poppins bg-[#6E46AE] flex items-center active:scale-y-75 transition-transform justify-center text-white rounded-md p-[10px] px-[10px] text-[18px] hover:bg-[#5e3c96]"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
            <Link
              to={"/login"}
              className="Poppins bg-transparent text-[#6E46AE] flex items-center justify-center rounded-md border-[3px] px-[10px] p-[10px] text-[18px] border-[#D9DBE9] hover:bg-[#ebebeb]  border-solid active:scale-y-75 transition-transform "
              onClick={() => setMenuOpen(false)}
            >
              Log in
            </Link>
          </div>
        </motion.div>
      )}

      {/* bottom */}
      <div className=" Poppins bg-[#F2F2F2] text-[14px]  p-[10px] hidden md:flex justify-center items-center gap-[50px]">
        {/* navLinks */}
        <NavLink
          to={"/foreign-jobs"}
          className="Poppins cursor-pointer text-[#212121] hover:text-[#000000]"
        >
          Foreign Jobs
        </NavLink>
        <NavLink
          to={"/courses/1"}
          className="Poppins cursor-pointer text-[#212121] hover:text-[#000000]"
        >
          Our Courses
        </NavLink>
        <NavLink
          to={"/ourjobs/1"}
          className="Poppins cursor-pointer text-[#212121] hover:text-[#000000]"
        >
          Our Jobs
        </NavLink>
        <NavLink
          to={"/career"}
          className="Poppins cursor-pointer text-[#212121] hover:text-[#000000]"
        >
          Career Advice
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
