import React from "react";
import img1 from "../../assets/section6img1.png";
import img2 from "../../assets/section6img2.png";
import img3 from "../../assets/section6img3.png";
import { motion } from "framer-motion";

const Section6 = () => {
  const cardImages = [
    {
      id: 1,
      img: img1,
      title: "Create Your Profile",
      desc: "Demonstrate your skills, qualifications, and experience to potential employers by showcasing them on your profile",
    },
    {
      id: 2,
      img: img2,
      title: "Get Headhunted",
      desc: "Employers will contact you even without you applying for jobs",
    },

    {
      id: 3,
      img: img3,
      title: "Find Your Dream Career",
      desc: "Watch interview requests start rolling in from employers",
    },
  ];

  return (
    <div className="mt-[50px] text-center mb-[50px]">
      {/* top */}
      <div>
        <motion.span
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="Mont text-[40px] font-[500]  "
        >
          Get{" "}
          <motion.span className="text-[#451A85] text-[50px] font-[600]">
            Headhunted
          </motion.span>{" "}
          by Employers
        </motion.span>
      </div>

      {/* bottom */}
      <div className="flex gap-[20px] justify-center flex-wrap mt-[50px]">
        {cardImages.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={item.id}
            className="relative"
          >
            <img
              src={item.img}
              alt="cardImg"
              className="w-[350px] h-[300px] "
            />
            <div className="absolute flex flex-col justify-center p-[20px]  top-0 right-0 left-0 bottom-0 m-auto z-[999]">
              <h2 className="Inter   text-[25px] font-[600]">{item.title}</h2>
              <p className="Inter font-[500]">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section6;
