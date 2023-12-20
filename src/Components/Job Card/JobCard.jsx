import { Skeleton } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const JobCard = ({ item }) => {
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
          {/* company */}
          <div className="absolute bg-white flex items-center gap-[5px] p-[2px] rounded-md top-[20px] left-[20px] px-[5px]">
            {/* logo */}
            <img
              src={data.companyLogo}
              alt="companyLogo"
              className="w-[20px] h-[20px] object-cover border-gray-300 border-[1px] border-solid rounded-full"
            />
            <span className="Poppins text-[15px] font-[500] ">
              {data.companyName}
            </span>
          </div>

          {/* image */}
          <img
            src={data.headerImg}
            alt="jobImg"
            className="w-[100%] h-[150px] object-cover rounded-lg"
          />

          {/* available vacancies */}
          <div className="bg-[#ebe8e8] w-fit p-[5px] rounded-md mt-[10px] mb-[10px]">
            <span className="Poppins font-[500] text-gray-500 text-[14px]">
              {data.avilableVacancies} Job Vacancies
            </span>
          </div>

          {/* details */}
          <div className="flex flex-col gap-[10px]">
            {/* title */}
            <h1 className="Roboto text-[25px]">{data.jobTitle}</h1>

            {/* description */}

            <p className="Poppins text-gray-500">{data.jobDesc}</p>
          </div>

          {/* Apply button */}
          <Link to={`/job/${data.id}`} className={"mt-auto"}>
            <div className="bg-[#6E46AE] hover:bg-[#58378d] cursor-pointer p-[10px] text-white text-center rounded-lg mt-[10px]  ">
              <span className="Poppins">See More</span>
            </div>
          </Link>
        </div>
      ) : (
        <Skeleton active className="w-[250px]" />
      )}
    </div>
  );
};

export default JobCard;
