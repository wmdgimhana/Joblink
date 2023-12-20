import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Collapse } from "antd";

const Terms = () => {
  const items = [
    {
      key: "1",
      label: "User Conduct",
      children: (
        <p>
          <p>
            1. Users are expected to engage respectfully and professionally.
          </p>
          <p>
            2. Any form of harassment or inappropriate behavior is strictly
            prohibited.
          </p>
        </p>
      ),
    },
    {
      key: "2",
      label: "Account Responsibility",
      children: (
        <p>
          <p>
            1. Users are responsible for maintaining the confidentiality of
            their account credentials.
          </p>
          <p>
            2. Notify JobLink immediately of any unauthorized access to your
            account.
          </p>
        </p>
      ),
    },
    {
      key: "3",
      label: "Content Usage",
      children: (
        <p>
          <p>
            1. Users must adhere to copyright and intellectual property laws.
          </p>
          <p>
            2. Any content uploaded to JobLink should not violate the rights of
            third parties.
          </p>
        </p>
      ),
    },
    {
      key: "4",
      label: "Job Listings",
      children: (
        <p>
          <p>
            1. Employers are responsible for providing accurate and legitimate
            job listings.
          </p>
          <p>
            2. JobLink reserves the right to remove listings that violate our
            guidelines.
          </p>
        </p>
      ),
    },
    {
      key: "5",
      label: "Course Enrollment",
      children: (
        <p>
          <p>
            1. Enrolled users must adhere to the terms set by course
            instructors.
          </p>
          <p>2. Any form of plagiarism or cheating is not tolerated.</p>
        </p>
      ),
    },
    {
      key: "6",
      label: "Privacy and Data Security",
      children: (
        <p>
          <p>
            1. JobLink prioritizes user privacy and employs security measures to
            protect personal information.
          </p>
          <p>
            2. Users are encouraged to review our Privacy Policy for details.
          </p>
        </p>
      ),
    },
    {
      key: "7",
      label: "Feedback and Reporting",
      children: (
        <p>
          <p>
            1. Users can provide feedback and report issues through designated
            channels.
          </p>
          <p>
            2. JobLink will investigate and address reported issues promptly.
          </p>
        </p>
      ),
    },
    {
      key: "8",
      label: "Platform Availability",
      children: (
        <p>
          <p>
            1. JobLink strives to maintain platform availability, but
            interruptions may occur for maintenance or unforeseen circumstances.
          </p>
          <p>2. Users will be notified of any planned downtime.</p>
        </p>
      ),
    },
    {
      key: "9",
      label: "Termination of Accounts",
      children: (
        <p>
          <p>
            1. JobLink reserves the right to terminate accounts that violate
            terms and conditions.
          </p>
          <p>
            2. Users will be notified of any violations and given an opportunity
            to rectify.
          </p>
        </p>
      ),
    },
    {
      key: "10",
      label: "Updates to Terms",
      children: (
        <p>
          <p>1. JobLink may update terms and conditions as needed.</p>
          <p>2. Users will be notified of any significant changes.</p>
        </p>
      ),
    },
  ];

  return (
    <div>
      <div className="gradientBg md:h-[40vh] pb-[20px] md:pb-0 flex justify-center  flex-col">
        {/* title */}
        <span className="Inter text-white text-[40px] font-[700] text-center">
          <Typewriter words={["Terms of Service"]} cursor />
        </span>

        {/* desc */}
        <p className="Roboto text-gray-100 text-center md:px-[200px] px-[20px] ">
          "Welcome to JobLink! Our Terms of Service outline the rules and
          regulations governing the use of our platform. By accessing and using
          JobLink, you agree to abide by these terms. Please take a moment to
          familiarize yourself with our policies, covering everything from user
          conduct to privacy and intellectual property. If you have any
          questions or concerns, feel free to reach out to us. Your use of
          JobLink signifies your acceptance of these terms and your commitment
          to a positive and constructive community experience."
        </p>
      </div>

      {/* terms */}
      <div className="flex flex-col justify-center px-[50px] mt-[50px]">
        <Collapse
          items={items}
          defaultActiveKey={["1"]}
          className="Poppins font-[500]"
        />
      </div>
    </div>
  );
};

export default Terms;
