import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const PopularJobs = () => {
  // search Items Array
  const searchItems = [
    {
      id: 1,
      name: "Software Engineer",
    },

    {
      id: 2,
      name: "Accountant",
    },

    {
      id: 3,
      name: "Administrator",
    },

    {
      id: 4,
      name: "Finance",
    },

    {
      id: 5,
      name: "Civil",
    },

    {
      id: 6,
      name: "IT",
    },

    {
      id: 7,
      name: "Lecturer",
    },

    {
      id: 8,
      name: "Administrator",
    },

    {
      id: 9,
      name: "Driver",
    },

    {
      id: 10,
      name: "Doctor",
    },
  ];

  return (
    <div className="flex flex-col gap-[20px] mt-[20px]">
      {/* title */}
      <span className="Roboto text-white">Popular Jobs</span>

      {/* search items map */}
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

export default PopularJobs;
