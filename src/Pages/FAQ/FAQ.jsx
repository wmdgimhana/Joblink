import React from "react";
import { Collapse } from "antd";
import { Typewriter } from "react-simple-typewriter";

const FAQ = () => {
  const items = [
    {
      key: "1",
      label: "1. How does JobLink work for job seekers?",
      children: (
        <p>
          JobLink simplifies the job search process by providing a user-friendly
          platform where you can browse and apply for relevant job listings.
          Create a profile, set preferences, and let our advanced matching
          algorithms connect you with suitable opportunities.
        </p>
      ),
    },
    {
      key: "2",
      label: "2. What types of courses are available on JobLink?",
      children: (
        <p>
          JobLink offers a diverse range of courses, from technical skills to
          soft skills and professional development. Explore our extensive
          library to find courses tailored to your career goals.
        </p>
      ),
    },
    {
      key: "3",
      label: "3. How can employers post job listings on JobLink?",
      children: (
        <p>
          Employers can easily post job listings by creating an account,
          providing details about the position, and specifying their
          requirements. Our platform ensures that your job postings reach a
          targeted and qualified audience.
        </p>
      ),
    },
    {
      key: "4",
      label: "4. Is JobLink accessible for freelancers?",
      children: (
        <p>
          Absolutely! JobLink welcomes freelancers looking for opportunities.
          Create a profile highlighting your skills and expertise, and explore
          freelance job listings on our platform.
        </p>
      ),
    },
    {
      key: "5",
      label: "5. How can I get career advice on JobLink?",
      children: (
        <p>
          JobLink provides valuable career advice through articles, webinars,
          and expert insights. Stay updated with the latest trends and get
          personalized advice to navigate your career journey.
        </p>
      ),
    },
    {
      key: "6",
      label: "6. Is my personal information secure on JobLink?",
      children: (
        <p>
          Yes, we prioritize the security of your personal information. Our
          platform employs robust security measures to ensure the
          confidentiality and integrity of your data.
        </p>
      ),
    },
    {
      key: "7",
      label: "7. Can I connect with other professionals on JobLink?",
      children: (
        <p>
          Yes, JobLink fosters a community-oriented approach. Engage with other
          professionals through discussion forums, networking events, and
          collaborative initiatives to expand your professional network.
        </p>
      ),
    },
    {
      key: "8",
      label: "8. What sets JobLink apart from other job search platforms?",
      children: (
        <p>
          JobLink stands out with its advanced job matching algorithms, a
          comprehensive course library, and a commitment to user-centric
          experiences. We prioritize innovation to provide a unique and
          effective platform for our users.
        </p>
      ),
    },
    {
      key: "9",
      label: "9. How can I provide feedback or report issues on JobLink?",
      children: (
        <p>
          We value your feedback. If you encounter any issues or have
          suggestions for improvement, please reach out to our support team
          through the contact form on our platform. Your input helps us enhance
          the JobLink experience for everyone.
        </p>
      ),
    },
    {
      key: "10",
      label: "10. Is JobLink available globally?",
      children: (
        <p>
          Yes, JobLink is accessible worldwide. We strive to connect talent with
          opportunities on a global scale while ensuring a personalized
          experience based on local preferences and trends.
        </p>
      ),
    },
  ];

  return (
    <div>
      {/* header */}
      <div className="gradientBg md:h-[40vh] pb-[20px] md:pb-0 flex justify-center  flex-col">
        {/* title */}
        <span className="Inter text-white text-[40px] font-[700] text-center">
          <Typewriter words={["Frequently Asked Questions (FAQ)"]} cursor />
        </span>

        {/* desc */}
        <p className="Roboto text-gray-100 text-center md:px-[200px] px-[20px]">
          "Explore the answers to common queries about JobLink's services, job
          listings, courses, and career advice. Find detailed information to
          streamline your experience and make the most of our platform. If you
          have additional questions, feel free to reach out to our support team
          for personalized assistance."
        </p>
      </div>

      {/* faq */}
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

export default FAQ;
