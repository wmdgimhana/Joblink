import React from "react";
import { Typewriter } from "react-simple-typewriter";
import OurStory from "../../assets/ourS.jpg";
import Mission from "../../assets/mission.jpg";
import Vision from "../../assets/vision.jpg";
import Trust from "../../assets/trust.jpg";
import Goal from "../../assets/goal.jpg";
import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <div className="overflow-x-hidden">
      {/* header */}
      <div className="gradientBg md:h-[40vh] pb-[20px] md:pb-0 flex flex-col  items-center">
        {/* title */}
        <span className="Inter text-white md:text-[40px] text-[30px] font-[700] mt-[50px]  ">
          <Typewriter words={["About us"]} cursor />
        </span>

        <p className="Roboto text-gray-200 text-center px-[20px] md:px-[200px]">
          "Welcome to JobLink, your go-to platform for jobs, courses, and career
          advice. At JobLink, we believe in empowering individuals on their
          professional journeys."
        </p>
      </div>

      {/* about us sections */}
      <div className="flex flex-col justify-center items-center gap-[50px] mt-[50px]">
        {/* section 1 */}
        <div className="flex md:flex-row flex-col justify-center items-center gap-[20px]">
          {/* desc */}
          <div className="flex flex-col w-[500px] text-center justify-center">
            {/* title */}
            <motion.span
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="Inter text-[30px] font-[600]"
            >
              Our Story
            </motion.span>
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="Poppins "
            >
              JobLink was born out of a passion for connecting individuals with
              meaningful opportunities. Founded in 20XX, we embarked on a
              mission to simplify the job search process and provide valuable
              resources for career development
            </motion.p>
          </div>

          {/* image */}
          <motion.img
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={OurStory}
            alt="story"
            className="w-[350px] h-[250px] object-cover rounded-md"
          />
        </div>

        {/* section 2 */}
        <div className="flex gap-[20px] md:flex-row flex-col justify-center items-center ">
          {/* image */}
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={Mission}
            alt="story"
            className="w-[350px] h-[250px] object-cover rounded-md"
          />

          {/* desc */}
          <div className="flex flex-col w-[500px] text-center justify-center">
            {/* title */}
            <motion.span
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="Inter text-[30px] font-[600]"
            >
              Our Mission and Values
            </motion.span>
            <motion.p
              className="Poppins"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our mission is to facilitate career growth by offering a seamless
              platform for job seekers, learners, and professionals. Integrity,
              innovation, and inclusivity are at the core of everything we do.
            </motion.p>
          </div>
        </div>

        {/* section 3 */}
        <div className="flex gap-[20px] md:flex-row flex-col justify-center items-center">
          {/* desc */}
          <div className="flex flex-col w-[500px] text-center justify-center">
            {/* title */}
            <motion.span
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="Inter text-[30px] font-[600]"
            >
              What Sets Us Apart
            </motion.span>
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="Poppins "
            >
              JobLink stands out through
              <p>1. Advanced job matching algorithms</p>
              <p>2. A vast library of high-quality courses</p>
              <p>3. Personalized career advice tailored to your goals</p>
            </motion.p>
          </div>

          {/* image */}
          <motion.img
            src={Trust}
            alt="story"
            className="w-[350px] h-[250px] object-cover rounded-md"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* section 4 */}
        <div className="flex gap-[20px] md:flex-row flex-col justify-center items-center">
          {/* image */}
          <motion.img
            src={OurStory}
            alt="story"
            className="w-[350px] h-[250px] object-cover rounded-md"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* desc */}
          <div className="flex flex-col w-[500px] text-center justify-center">
            {/* title */}
            <motion.span
              className="Inter text-[30px] font-[600]"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Transparency and Trust
            </motion.span>
            <motion.p
              className="Poppins"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transparency is our priority. Your data is secure, and we are
              committed to building trust through open communication.
            </motion.p>
          </div>
        </div>

        {/* section 5 */}
        <div className="flex gap-[20px] md:flex-row flex-col justify-center items-center">
          {/* desc */}
          <div className="flex flex-col w-[500px] text-center justify-center">
            {/* title */}
            <motion.span
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="Inter text-[30px] font-[600]"
            >
              Our Vision
            </motion.span>
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="Poppins"
            >
              Embarking on a journey to redefine career development, JobLink
              envisions a future where every individual, regardless of
              background or circumstance, has the tools and opportunities to
              sculpt a fulfilling professional path. We are dedicated to
              pioneering innovative solutions, fostering continuous learning,
              and making a global impact with a local touch. At JobLink, our
              vision is your empowerment on the road to lasting career success.
            </motion.p>
          </div>

          {/* image */}
          <motion.img
            src={Vision}
            alt="story"
            className="w-[350px] h-[250px] object-cover rounded-md"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* section 6 */}
        <div className="flex gap-[20px] md:flex-row flex-col justify-center items-center">
          {/* image */}
          <motion.img
            src={Goal}
            alt="story"
            className="w-[350px] h-[250px] object-cover rounded-md"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* desc */}
          <div className="flex flex-col w-[500px] text-center justify-center">
            {/* title */}
            <motion.span
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="Inter text-[30px] font-[600]"
            >
              Future Goals
            </motion.span>
            <motion.p
              className="Poppins"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>1. Expand our course offerings</p>
              <p>2. Enhance our job matching capabilities</p>
              <p>3. Foster a vibrant and supportive user community</p>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
