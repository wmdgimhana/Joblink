import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Cards from "../../Components/Career Slider/Cards";

const SingleCareer = () => {
  return (
    <div>
      {/* header */}
      <div className="gradientBg h-[40vh] flex   flex-col">
        {/* title */}
        <span className="Inter text-white md:text-[40px] text-[30px] font-[700] mt-[50px] text-center">
          <Typewriter words={["Resume Building Tips"]} cursor />
        </span>

        {/* desc */}
        <p className="Roboto text-gray-100 text-center md:px-[200px]">
          "Learn how to showcase your skills and experience effectively. Explore
          key resume-building strategies to stand out to employers.""
        </p>
      </div>

      {/* content */}

      <div className="px-[50px] mt-[50px]">
        {/* title */}
        <div>
          <h1 className="Roboto text-[30px] font-[600]">
            Resume Examples by Industry
          </h1>
          <span className="Poppins text-[18px] text-gray-500">
            Stressed about your resume? These templates will show you how it's
            done.
          </span>
        </div>

        {/* description */}
        <div className="mt-[50px] flex flex-col gap-[20px]">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdW1lfGVufDB8fDB8fHww"
            alt="careerImg"
            className="w-[350px] h-[200px] object-cover rounded-md"
          />
          <p className="Inter">
            You’ve been applying to jobs like crazy, but it seems as though all
            of your applications have disappeared into the black hole of the
            Internet. Wondering why your resume isn’t getting you any
            interviews? We’re willing to bet it’s not because you’re unqualified
            or just not good enough (which, for the record, you are good
            enough). It’s likely because resume mistakes are causing one or more
            fatal errors. Job seekers, beware! All it takes is just one to
            strike your job search dead in its tracks. Definitely something
            entry-level workers need to be on the lookout for when writing your
            first resume. Think your resume is perfect and bulletproof? Even the
            most experienced professionals still find themselves guilty of
            making resume mistakes. Plural. With only a mere six seconds to
            “wow” a recruiter, having any kind of mistake on your resume is not
            a risk even the most daring of job seekers should take. After all,
            your resume is the first point of contact you make with a potential
            employer, so you want that first impression to be a strong, clear
            demonstration of just how awesome you are at what you do. That’s how
            you get an interview—and then once you rock that, a job. As you
            write your resume—or give your resume its six-month update—make sure
            it doesn’t include any of these common resume mistakes listed below.
          </p>
        </div>

        <div className="flex flex-col gap-[20px]">
          {/* section 1 */}
          <div className="flex flex-col gap-[10px] mt-[20px]">
            {/* title */}
            <span className="Inter text-[20px] font-[600]">
              1. Typos and Grammatical Errors
            </span>
            {/* description */}
            <p className="Roboto">
              Yes, we know, it’s probably the most obvious of all resume tips:
              It needs to be grammatically perfect. If your resume isn't,
              employers will read between the lines and draw not-so-flattering
              conclusions about you, like, "This person can't write," or, "This
              person obviously doesn't care."
            </p>
          </div>

          {/* section 2 */}
          <div className="flex flex-col gap-[10px] mt-[20px]">
            {/* title */}
            <span className="Inter text-[20px] font-[600]">
              2. Lack of Specifics
            </span>

            {/* description */}
            <p className="Inter flex flex-col gap-[5px]">
              <p>
                Your resume shouldn’t simply state the obvious to a hiring
                manager. Employers need to understand what you've done and
                accomplished. For example:
              </p>

              <div className="flex flex-col gap-[5px]">
                <p>A. Worked with employees in a restaurant setting</p>
                <p>
                  B. Recruited, hired, trained and supervised more than 20
                  employees in a restaurant with $2 million in annual sales
                </p>
              </div>

              <p>
                Both of these phrases could describe the same person, but the
                details and specifics in example B will more likely grab an
                employer's attention.
              </p>
            </p>
          </div>

          {/* section 3 */}
          <div className="flex flex-col gap-[10px] mt-[20px]">
            {/* title */}
            <span className="Inter text-[20px] font-[600]">
              5. Going on Too Long or Cutting Things Too Short
            </span>
            <div className="Inter flex flex-col gap-[5px]">
              <p>
                Many people try to squeeze their experiences onto one page,
                because they've heard resumes shouldn't be longer. By doing so,
                job seekers may delete impressive achievements. Other candidates
                ramble on about irrelevant or redundant experiences. Despite
                what you may read or hear, there are no real rules governing
                resume length. Why? Because human beings, who have different
                preferences and expectations where resumes are concerned, will
                be reading it.
              </p>

              <p>
                That doesn't mean you should start sending out five-page
                resumes, of course. Generally speaking, you usually need to
                limit yourself to a maximum of two pages. But don't feel you
                have to use two pages if one will do. Conversely, don't cut the
                meat out of your resume simply to make it conform to an
                arbitrary one-page standard. When writing your resume, ask
                yourself, "Will this statement help me land an interview?" Every
                word should sell you, so include only the information that
                elicits a "yes."
              </p>
            </div>
          </div>
        </div>

        {/* more career advices */}
        <div className="mt-[100px] flex flex-col  ">
          {/* title */}
          <span className="Roboto text-[25px] text-center font-[500]">
            More Career Advices
          </span>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default SingleCareer;
