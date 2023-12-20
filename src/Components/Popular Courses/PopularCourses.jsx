import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const PopularCourses = () => {
  // search Items Array
  const searchItems = [
    {
      id: 1,
      name: "Front End",
    },

    {
      id: 2,
      name: "Backend",
    },

    {
      id: 3,
      name: "Object Oriented",
    },

    {
      id: 4,
      name: "JavaScript",
    },

    {
      id: 5,
      name: "Java",
    },

    {
      id: 6,
      name: "C++",
    },

    {
      id: 7,
      name: "UI /UX",
    },

    {
      id: 8,
      name: "Driver",
    },

    {
      id: 9,
      name: "DevOps",
    },

    {
      id: 10,
      name: "Cyber Security",
    },
  ];

  return (
    <div className="flex flex-col gap-[20px] mt-[20px]">
      {/* title text */}

      <span className="Roboto text-white">Popular Courses</span>

      {/* search Items map */}

      <div className="searchItems flex gap-[20px] flex-wrap">
        {searchItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-[2px] bg-[#FFFFFF1A] p-[5px] px-[10px] cursor-pointer hover:bg-[#eeeeee3d] rounded-md"
          >
            <SearchIcon className="text-[#00B6B4]" />
            <span className="text-white">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
