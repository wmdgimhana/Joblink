import { Skeleton } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CareerCard = ({ item }) => {
  //Loading time simulate
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(item);
    }, 3000);
  }, []);

  return (
    <div className="flex">
      {/* card */}
      {data.length != 0 ? (
        <div className="flex-shrink-0 w-72 bg-white shadow-xl rounded-lg overflow-hidden mb-4 border border-solid border-gray-300 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
          {/* image */}
          <div className="w-full h-32">
            <img
              src={data.img}
              alt="cardImg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* details */}
          <div className="flex flex-col p-4 gap-4 h-full">
            {/* title */}
            <span className="Roboto text-2xl font-semibold">{data.title}</span>

            {/* description */}
            <div className="flex-1">
              <p className="Poppins text-gray-600 text-justify">{data.desc}</p>
            </div>

            {/* button */}
            <Link to={`/career-item/${data.id}`} className="mt-auto">
              <div className="Poppins p-2 bg-[#6E46AE] text-white flex justify-center items-center cursor-pointer hover:bg-[#5d3a94] rounded-md">
                <span>See More</span>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <Skeleton active className="w-[250px]" />
      )}
    </div>
  );
};

export default CareerCard;
