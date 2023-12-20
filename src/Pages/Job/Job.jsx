import React, { useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import CheckIcon from "@mui/icons-material/Check";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PaidIcon from "@mui/icons-material/Paid";
import { Modal } from "antd";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Job = () => {
  const jobDuties = [
    "Collaborate with the design team to implement responsive and user-friendly web interfaces.",
    "Develop and maintain high-quality code for web applications.",
    "Optimize application for maximum speed and scalability.",
    "Implement and maintain efficient, reusable, and reliable front-end components.",
    "Ensure the technical feasibility of UI/UX designs.",
    "Work closely with back-end developers to integrate front-end logic with server-side logic.",
    "Stay up-to-date with the latest industry trends and technologies.",
  ];

  const jobReq = [
    "Proven experience as a Frontend Developer or similar role.",
    "Proficient understanding of web markup, including HTML5, CSS3, and JavaScript.",
    "Experience with modern JavaScript frameworks such as React, Vue, or Angular.",
    "Familiarity with front-end build tools, such as Webpack or Gulp.",
    "Strong understanding of responsive design principles.",
    "Knowledge of version control systems, such as Git.",
    "Ability to work collaboratively in a team environment.",
    "Excellent problem-solving and communication skills.",
    "Self-motivated with a strong desire to learn and stay updated on new technologies.",
  ];

  // apply form modal open
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

  // Close the Modal close when user submit the Apply form
  const closeModal = (event) => {
    event.preventDefault();

    // empty the input boxes when user submit the form
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setCity("");
    setMessage("");

    // simulate Submiting
    setTimeout(() => {
      // close the model when user submit the form
      setIsModalOpen(false);
    }, 2000);
  };

  // Get the Data user enterd

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cv, setCv] = useState("");

  return (
    <div>
      {/* title */}
      <div className="gradientBg h-[40vh] flex flex-col items-center">
        {/* job title */}
        <div className="flex flex-col items-center mt-[50px]">
          <span className="Inter text-white md:text-[40px] text-[30px] font-[700]">
            Frontend Developer
          </span>

          {/* details */}
          <div className="flex gap-[20px] items-center">
            {/* company */}
            <span className="Poppins text-white md:text-[30px] text-[20px] font-[500]">
              Cyberpixels
            </span>
            {/* time */}
            <span className="Poppins bg-[#B051AA] text-white p-[5px] rounded-md text-[14px]">
              Full-Time
            </span>
          </div>
        </div>
      </div>

      {/* details */}
      <div className="flex items-center md:flex-row flex-col">
        {/* left */}
        <div className="md:flex-[2]">
          {/* job details */}

          {/* job duties */}
          <div className="mt-[5%] px-[50px]">
            {/* title */}
            <span className="Poppins text-[20px] font-[500] ">Job Duties</span>
            {/* duties */}
            <div className="gap-[10px] flex flex-col mt-[20px] ml-[2%]">
              {jobDuties.map((item, index) => (
                <div key={index} className="flex items-center gap-[10px]">
                  <WorkIcon className="text-[#0092AC]" />
                  <span className="Inter">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Job Requirements */}
          <div className="mt-[5%] px-[50px]">
            {/* title */}
            <span className="Poppins text-[20px] font-[500]">
              Job Requirements
            </span>

            {/* duties */}
            <div className="gap-[10px] flex flex-col mt-[20px] ml-[2%]">
              {jobReq.map((item, index) => (
                <div key={index} className="flex items-center gap-[10px]">
                  <CheckIcon className="text-[#0092AC]" />
                  <span className="Inter">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right */}
        <div className="md:flex-[1] w-[100%] mt-[50px] md:mt-0 flex flex-col justify-center items-center md:justify-start md:block md:items-start">
          {/* apply */}

          {/* title */}
          <span className="Poppins text-[20px] font-[500] text-center  ">
            Apply for this Job
          </span>

          {/* job overview */}
          <div className="bg-white border-[1px] border-solid mt-[10px] border-[#d8d8d8] p-[10px] px-[20px] w-[300px] max-h-[400px] rounded-lg flex flex-col gap-[20px]">
            {/* location */}
            <div className="flex  gap-[5px] items-start">
              <LocationOnIcon className="text-[#00849C]" />
              <div className="flex flex-col">
                <span className="Inter text-[18px] ">Location</span>
                <span className="Inter text-gray-600">Colombo</span>
              </div>
            </div>

            {/* Job title */}
            <div className="flex  gap-[5px] items-start">
              <WorkIcon className="text-[#00849C]" />
              <div className="flex flex-col">
                <span className="Inter text-[18px] ">Job Title</span>
                <span className="Inter text-gray-600">Frontend Developer</span>
              </div>
            </div>

            {/* Sallary rate */}
            <div className="flex  gap-[5px] items-start">
              <PaidIcon className="text-[#00849C]" />
              <div className="flex flex-col">
                <span className="Inter text-[18px] ">Sallary Rate</span>
                <span className="Inter text-gray-600">
                  Rs. 50,000.00 - Rs. 80,000.00 / Monthly
                </span>
              </div>
            </div>

            {/* time */}
            <div className="flex  gap-[5px] items-start">
              <AccessTimeFilledIcon className="text-[#00849C]" />
              <div className="flex flex-col">
                <span className="Inter text-[18px] ">Days</span>
                <span className="Inter text-gray-600">5.5d / week</span>
              </div>
            </div>

            {/* Apply button */}
            <div
              className=" bg-[#6E46AE] hover:bg-[#57368b] mt-[20px] mb-[10px] text-center p-[10px] text-white cursor-pointer active:scale-y-75 transition-transform"
              onClick={showModal}
            >
              <span className="Poppins">Apply Now</span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Apply For This Job"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="flex flex-col"
      >
        <div className="flex flex-col gap-[20px]">
          <form className="flex flex-col justify-center gap-[10px]">
            {/* First Name */}
            <input
              type="text"
              placeholder="First Name"
              className="p-[10px] bg-[#ccccf7ad] outline-none rounded-md  "
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            {/* Last Name */}
            <input
              type="text"
              placeholder="Last Name"
              className="p-[10px] bg-[#ccccf7ad] outline-none rounded-md  "
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="p-[10px] bg-[#ccccf7ad] outline-none rounded-md  "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {/* Phone Number */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-[10px] bg-[#ccccf7ad] outline-none rounded-md  "
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
            {/* City */}
            <input
              type="text"
              placeholder="City"
              className="p-[10px] bg-[#ccccf7ad] outline-none rounded-md  "
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            {/* Message */}
            <textarea
              name="message"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="p-[10px] bg-[#ccccf7ad] outline-none rounded-md resize-none  "
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            {/* Upload CV */}
            <div className="flex items-center gap-[20px]">
              <input
                type="file"
                id="cv"
                className="hidden"
                onChange={(e) => setCv(e.target.files[0])}
              />
              <label
                htmlFor="cv"
                className="flex items-center bg-[#6E46AE] text-white cursor-pointer p-[10px] rounded-md justify-center "
              >
                <FileUploadIcon />
                <span>Browse</span>
              </label>

              <span>Upload Your CV</span>
            </div>
            <button
              className="p-[15px] bg-[#6E46AE] hover:bg-[#593e85] w-[100%] text-white rounded-md active:scale-y-75 transition-transform mt-[10px]"
              onClick={(e) => closeModal(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Job;
