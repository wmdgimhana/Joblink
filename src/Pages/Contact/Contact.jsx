import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  return (
    <div>
      {/* header */}
      <div className="gradientBg md:h-[40vh] pb-[20px] md:pb-0 flex justify-center  flex-col">
        {/* title */}
        <span className="Inter text-white md:text-[40px] text-[30px] font-[700] text-center ">
          <Typewriter words={["Contact us"]} cursor />
        </span>

        {/* description */}
        <p className="Roboto text-gray-100 text-center px-[20px] md:px-[200px]">
          "Get in touch with us at JobLink! We value your feedback, inquiries,
          and suggestions. Whether you have questions about job listings,
          courses, or career advice, our dedicated team is here to assist you.
          Reach out to us, and let's connect to enhance your journey towards
          professional success."
        </p>
      </div>

      {/* contact form */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center md:w-[500px] items-center">
          <form className="flex flex-col md:w-[500px]   gap-[10px] mt-[50px]">
            <input
              type="text"
              placeholder="First Name"
              className="Roboto p-[10px] bg-[#ddc9fcb9] rounded-md placeholder:text-gray-400 outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="Roboto p-[10px] bg-[#ddc9fcb9] rounded-md placeholder:text-gray-400 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="Roboto p-[10px] bg-[#ddc9fcb9] rounded-md placeholder:text-gray-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="Roboto p-[10px] bg-[#ddc9fcb9] rounded-md placeholder:text-gray-400 outline-none"
            />
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Enter your Message"
              className="Roboto p-[10px] bg-[#ddc9fcb9] rounded-md placeholder:text-gray-400 outline-none resize-none"
            ></textarea>
            <button className="Poppins mt-[10px] rounded-md bg-[#6E46AE] text-white hover:bg-[#58378d] p-[10px] w-[100%]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
