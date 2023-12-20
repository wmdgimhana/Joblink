import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import LanguageIcon from "@mui/icons-material/Language";
import CheckIcon from "@mui/icons-material/Check";
import { Collapse } from "antd";
import CircleIcon from "@mui/icons-material/Circle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import { Modal } from "antd";
import { Link } from "react-router-dom";

const Course = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const whatYouLearn = [
    "Building responsive and interactive web applications",
    "Frontend development using HTML, CSS, and JavaScript",
    "Backend development with Node.js and Express",
    "Database management with MongoDB",
    "Version control with Git and GitHub",
    "Deployment strategies for web applications",
  ];

  const courseContent = [
    {
      id: 1,
      title: "Introduction to Web Development",
      items: [
        "Understanding the basics: HTML, CSS, JavaScript",
        "Overview of web development tools and environments",
      ],
    },

    {
      id: 2,
      title: "Frontend Development",
      items: [
        "HTML5: Semantic markup and structure",
        "CSS3: Styling and layout techniques",
        "JavaScript: Fundamentals and DOM manipulation",
      ],
    },
    {
      id: 3,
      title: "Backend Development with Node.js",
      items: [
        "Setting up a Node.js environment",
        "Building RESTful APIs with Express.js",
        "Handling data with JSON and interacting with databases",
      ],
    },
    {
      id: 4,
      title: "Database Management with MongoDB",
      items: [
        "Introduction to NoSQL databases",
        "MongoDB setup and CRUD operations",
        "Data modeling and best practices",
      ],
    },
    {
      id: 5,
      title: "Version Control with Git and GitHub",
      items: [
        "Understanding version control concepts",
        "Git basics: Cloning, branching, merging",
        "Collaborative development with GitHub",
      ],
    },
    {
      id: 6,
      title: "Deployment Strategies",
      items: [
        "Hosting options for web applications",
        "Deploying applications on platforms like Heroku",
        "Best practices for maintaining and updating deployed applications",
      ],
    },
  ];

  const requirements = [
    "Basic understanding of computer science concepts",
    "Familiarity with using a code editor (e.g., Visual Studio Code)",
    "Access to a computer with an internet connection",
    "Eagerness to learn and explore new concepts in web development",
  ];

  return (
    <div>
      {/* header */}
      <div className="gradientBg md:h-[40vh] pb-[20px] md:pb-[0] md:px-[50px] px-[20px] relative text-center md:text-left ">
        <div className=" md:w-[700px] w-[100%]">
          {/* course details */}
          <div className="pt-[5%] flex flex-col gap-[10px]">
            {/* title */}
            <span className="Roboto md:text-[40px] text-[30px] text-white font-[500]">
              Web Development Fundamentals
            </span>

            {/* description */}
            <p className="Roboto text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              rerum rem ipsam blanditiis non nostrum! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Id, inventore.
            </p>

            {/* ratings */}
            <div className="flex items-center gap-[5px] justify-center md:justify-start">
              <StarIcon className="text-yellow-400" />
              <span className="text-white">4.6</span>
            </div>

            {/* teacher name */}
            <div className="flex items-center gap-[5px] justify-center md:justify-start">
              <span className="Roboto text-white font-[400]">Instructor</span>
              <span
                className="Poppins font-[500] hover:underline cursor-pointer text-white"
                onClick={showModal}
              >
                John Smith
              </span>
            </div>

            {/* language */}
            <div className="flex items-center gap-[5px] justify-center md:justify-start">
              <LanguageIcon className="text-white" />
              <span className="Poppins text-white">English</span>
            </div>
          </div>

          {/* teacher modal */}
          <Modal
            title="Instructor"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            className="flex flex-col"
          >
            {/* teacher details */}
            <div className="mt-[20px] ">
              <div className="flex items-center gap-[10px]">
                {/* profile picture */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                  alt="profilePic"
                  className="w-[80px] h-[80px] rounded-full object-cover"
                />

                {/* name | position */}

                <div className="flex flex-col items-center">
                  {/* name */}
                  <span className="Poppins text-[20px] font-[500]">
                    John Smith
                  </span>

                  {/* about */}
                  <span className="Roboto text-gray-500">Software Engneer</span>
                </div>
              </div>

              {/* teacher description */}
              <div className="flex flex-col gap-[20px] mt-[20px]">
                {/* about */}
                <div>
                  {/* title */}
                  <span className=" font-[500] text-[17px] ">👨‍💻 About Me</span>

                  {/* description */}
                  <p className="Roboto mt-[10px]">
                    Hello, I'm John Smith, your dedicated instructor with a
                    passion for software engineering. With years of hands-on
                    experience in the tech industry, I bring a wealth of
                    practical knowledge to the table.
                  </p>
                </div>

                {/* Expertise */}

                <div>
                  {/* title */}
                  <span className=" font-[500] text-[17px] ">🌐 Expertise</span>

                  {/* description */}
                  <p className="Roboto mt-[10px]">
                    My expertise lies in crafting robust and scalable web
                    applications. From front-end technologies like HTML, CSS,
                    and JavaScript to back-end frameworks such as Node.js and
                    Django, I've got you covered. I'm committed to helping you
                    navigate the ever-evolving world of software development.
                  </p>
                </div>

                {/*  Teaching Philosophy */}
                <div>
                  {/* title */}
                  <span className=" font-[500] text-[17px] ">
                    📚 Teaching Philosophy
                  </span>

                  {/* description */}
                  <p className="Roboto mt-[10px]">
                    I believe in making complex concepts accessible and
                    enjoyable. My teaching style combines real-world examples
                    with interactive learning, ensuring you not only grasp the
                    theory but also gain the skills needed to excel in the
                    field.
                  </p>
                </div>

                {/*  Background */}
                <div>
                  {/* title */}
                  <span className=" font-[500] text-[17px] ">
                    🎓 Background
                  </span>

                  {/* description */}
                  <p className="Roboto mt-[10px]">
                    While I hold a degree in Computer Science, I understand that
                    the best learning often happens outside the classroom. I'm
                    excited to share insights from my professional journey and
                    empower you to thrive in the dynamic realm of web
                    development.
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      {/* bottom */}
      <div className="flex md:justify-between mt-[50px] px-[50px] md:flex-row  flex-col-reverse">
        {/* course descriptions */}
        <div className="flex flex-col gap-[50px]   md:w-[50%]">
          {/* What you'll learn */}

          <div className="flex flex-col border-[1px] border-solid border-[#d4d3d3] p-[15px]">
            {/* title */}
            <span className="Roboto text-[30px] font-[500] mb-[20px]">
              What you'll learn
            </span>

            <div>
              <div className="flex flex-col gap-[10px]">
                {whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-center gap-[5px]">
                    <CheckIcon className="text-[#0092AC]" />
                    <span className="Poppins">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Course Content */}

          <div className="flex flex-col">
            <span className="Roboto mb-[20px] text-[30px] font-[500]">
              Course Content
            </span>

            <div>
              <div>
                {courseContent.map((item) => (
                  <div key={item.id}>
                    {/* title */}
                    <Collapse
                      className="Poppins font-[500]"
                      items={[
                        {
                          key: item.id,
                          label: item.title,
                          children: item.items.map((contentItem, index) => (
                            <div
                              key={`${item.id}-${index}`}
                              className="flex items-center gap-[5px]"
                            >
                              <CircleIcon
                                style={{ fontSize: 10 }}
                                className="text-[#0092AC]"
                              />
                              <span>{contentItem}</span>
                            </div>
                          )),
                        },
                      ]}
                      defaultActiveKey={["1"]}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="flex flex-col">
            {/* title */}
            <span className="Roboto text-[30px] font-[500] mb-[20px]">
              Requirements
            </span>
            <div className="flex flex-col gap-[10px]">
              {requirements.map((item, index) => (
                <div key={index} className="flex items-center gap-[5px]">
                  <CircleIcon
                    style={{ fontSize: 10 }}
                    className="text-[#0092AC]"
                  />
                  <span className="Poppins">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* description */}
          <div className="flex flex-col">
            <span className="Roboto text-[30px] font-[500] mb-[20px]">
              Description
            </span>
            <div className="Poppins">
              This comprehensive web development course is designed for
              beginners who want to build a strong foundation in both frontend
              and backend development. Whether you're aiming to become a
              full-stack developer or looking to enhance your web development
              skills, this course covers essential topics with hands-on
              exercises and real-world projects. Join us on this learning
              journey and unlock the exciting world of web development!
            </div>
          </div>
        </div>

        {/* course box */}
        <div className="md:w-[350px] mt-[50px] md:mt-0 md:max-h-[550px]   bg-white border-[1px] border-solid border-[#e6e5e5] shadow-lg rounded-lg overflow-hidden md:sticky md:top-[10%] mb-[50px] md:mb-[0]">
          {/* video png */}
          <div className="relative">
            <img
              src="https://s3.us-east-2.amazonaws.com/stg.uploads.slidenest/template_656/templateColor_689/previewImages/fundamentals-of-web-development-powerpoint-google-slides-keynote-presentation-template-1.jpeg"
              alt="videoPng"
              className="w-[100%] h-[200px] object-cover"
            />

            {/* background overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto bg-gradient-to-t from-black via-black to-transparent opacity-40"></div>

            {/* play icon */}

            <PlayArrowIcon
              style={{ fontSize: 50 }}
              className="absolute top-0 left-0 right-0 bottom-0 m-auto   cursor-pointer bg-[#fff] rounded-full opacity-80 hover:opacity-90 "
            />
          </div>
          {/* course details */}
          <div className="mt-[20px] px-[20px] flex flex-col py-[20px] md:py-0">
            {/* price */}
            <div>
              <span className="Poppins text-[30px] font-[600] ">$19.99</span>
            </div>

            {/* buttons */}
            <div className="flex flex-col gap-[10px] mt-[10px]">
              {/* buy now */}
              <Link
                to={"/checkout"}
                className="bg-[#6E46AE] hover:bg-[#57378b] p-[10px] flex justify-center items-center cursor-pointer text-white"
              >
                <span className="Poppins">Buy Now</span>
              </Link>
            </div>

            {/* level */}
            <span className="Roboto text-[18px] font-[500] mt-[20px]">
              Beginner
            </span>
            {/* includes */}
            <div className="flex flex-col">
              {/* title */}
              <span className="Roboto text-[18px] font-[500] mt-[10px]">
                This course includes
              </span>
              <div className="flex flex-col ml-[5px] gap-[5px] mt-[5px]">
                <div className="flex items-center gap-[5px] text-gray-500">
                  <SystemUpdateAltIcon />
                  <span>10 downloadable resources</span>
                </div>

                <div className="flex items-center gap-[5px] text-gray-500">
                  <OndemandVideoIcon />
                  <span>23 hours video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
