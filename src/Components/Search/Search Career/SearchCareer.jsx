import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchCareer = () => {
  return (
    <div className="flex items-center Arial w-[100%] p-[10px] bg-white">
      <input
        type="text"
        placeholder="Search Career Advices"
        className="Roboto placeholder:text-[14px] placeholder:Roboto w-[100%] bg-transparent border-none outline-none placeholder:text-black"
      />
      {/* searchIcon */}
      <div className="bg-[#B051AA] p-[7px] flex items-center justify-center cursor-pointer hover:bg-[#a1479b]">
        <SearchIcon className="text-white" />
      </div>
    </div>
  );
};

export default SearchCareer;
