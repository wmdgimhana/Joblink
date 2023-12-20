import React from "react";
import { Link } from "react-router-dom";
import Google from "../../assets/googleIco.png";
import Facebook from "../../assets/fbIco.png";
import Apple from "../../assets/appleIco.png";

const Signup = () => {
  return (
    <div>
      {/* header image */}
      <div className="signHeader h-[60vh] md:mb-[50%] mb-[200%]">
        <div className="h-[120vh] bg-white md:w-[60vw] w-[90vw] top-[30%] border-gray-300 border-[1px] border-solid rounded-2xl left-0 right-0 m-auto absolute md:p-[50px] p-[20px]">
          {/* already btn */}
          <div className="bg-[#D9D9D980] md:w-fit p-[10px] flex items-center justify-center rounded-lg">
            <span className="Inter font-[500] text-[#00788C]">
              Have an account? <Link>Log in</Link>
            </span>
          </div>

          {/* create an account */}
          <div className="mt-[20px] ">
            <h1 className="Inter  font-[700] text-center md:text-left text-[40px]">
              Create An Account
            </h1>

            <ul className="Inter list-disc font-[600] justify-center items-center md:justify-start md:items-start flex flex-col text-[#00788C] ">
              <li>Receive jobs that match your interests</li>
              <li>Quickly apply to thousands of jobs</li>
              <li>Get a FREE professional resume review</li>
            </ul>
          </div>

          <div className="w-[100%] flex justify-center mt-[50px]">
            {/* social meadia items */}

            <div className="md:w-[60%] flex flex-col gap-[20px] justify-center">
              {/* Continue with Google */}
              <div className="flex active:scale-y-75 transition-transform items-center gap-[20px] p-[10px] md:p-[20px] border-black border-solid border-[1px] rounded-md justify-center cursor-pointer hover:bg-[#e2e2e2]">
                <img
                  src={Google}
                  alt="goole"
                  className="md:w-[30px] md:h-[30px]  w-[20px] h-[20px] "
                />
                <span className="Inter font-[700]">Continue with Google</span>
              </div>

              {/* Continue with Facebook */}
              <div className="flex items-center active:scale-y-75 transition-transform bg-[#1877F2] justify-center gap-[20px] cursor-pointer hover:bg-[#1765ca] rounded-md text-white p-[10px] md:p-[20px]">
                <img
                  src={Facebook}
                  alt="facebook"
                  className="md:w-[30px] md:h-[30px]  w-[20px] h-[20px] "
                />
                <span className="Inter font-[700]">Continue with Facebook</span>
              </div>

              {/* Continue with Apple */}
              <div className="flex items-center active:scale-y-75 transition-transform bg-black p-[10px] md:p-[20px] rounded-md text-white justify-center gap-[20px] cursor-pointer ">
                <img
                  src={Apple}
                  alt="apple"
                  className="md:w-[30px]   w-[20px]  "
                />
                <span className="Inter font-[700]">Continue with Apple</span>
              </div>

              {/* Or Continue with email */}
              <div className="w-[100%] flex justify-center mt-[20px]">
                <span className="Inter font-[700]    text-center w-fit">
                  Or Continue with email
                </span>
              </div>

              <form className="flex flex-col gap-[20px] mt-[20px]">
                {/* email box */}
                <div className="flex flex-col">
                  <span className="Inter">Enter Your Email Address</span>
                  <input
                    type="text"
                    className="md:p-[20px] p-[10px] border-gray-400 border-[2px] border-solid rounded-lg outline-none"
                  />
                </div>
                {/* password box */}
                <div className="flex flex-col">
                  <span className="Inter">Create new password</span>
                  <input
                    type="password"
                    className="md:p-[20px] p-[10px] border-gray-400 border-[2px] border-solid rounded-lg outline-none"
                  />
                </div>
                <button className="Inter active:scale-y-75 transition-transform bg-[#00788C] hover:bg-[#156574] text-white md:p-[20px] p-[10px] rounded-lg">
                  Create An Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
