import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { NavLink } from "react-router-dom";
import { Skeleton } from "antd";

const CourseCard = ({ item }) => {
  //Loading time simulate
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(item);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-wrap gap-[20px] justify-center">
      {data.length != 0 ? (
        <div className="flex relative flex-col max-w-[300px] max-h-[500px] bg-white  shadow-xl border-[#ecebeb] border-solid border-[2px]  p-[10px] rounded-lg pb-[20px] mb-[20px] hover:shadow-2xl transition-shadow duration-300">
          {/* image */}
          <img
            src={data.courseImg}
            alt="jobImg"
            className="w-[100%] h-[150px] object-cover rounded-lg"
          />

          {/* ratings */}
          <div className="  flex items-center gap-[5px]  mt-[10px] mb-[10px]">
            <StarIcon className="text-yellow-400" style={{ fontSize: 23 }} />
            <span className="Poppins text-[14px]">{data.ratings}</span>
          </div>

          {/* details */}
          <div className="flex flex-col gap-[10px]">
            {/* title */}
            <NavLink
              to={`/course/${data.id}`}
              className="Poppins mb-[20px] w-fit text-[20px] font-[500] hover:underline"
            >
              {data.title}
            </NavLink>
          </div>

          {/* lessons | level */}
          <div className="flex items-center justify-between mb-[20px]">
            {/* lessons */}
            <div className="Poppins text-[14px] flex items-center gap-[5px] text-gray-500">
              <LocalLibraryIcon />
              <span>{data.lessons} Lessons</span>
            </div>

            {/* level */}
            <div className="Poppins text-[14px] flex items-center gap-[5px] text-gray-500">
              <EqualizerIcon />
              <span>{data.level}</span>
            </div>
          </div>

          {/* teacher */}
          <div className="mt-auto border-t-[1px] border-solid border-t-[#d6d4d4] pt-[5px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[5px]">
                <img
                  src={item.teacherProfileImg}
                  alt="tpi"
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
                <span className="Roboto">{data.teacher}</span>
              </div>

              {/* price */}
              <span className="Poppins font-[500]">${data.price}</span>
            </div>
          </div>
        </div>
      ) : (
        <Skeleton active className="w-[250px]" />
      )}
    </div>
  );
};

export default CourseCard;
