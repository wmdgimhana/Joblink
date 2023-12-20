import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { jobData } from "../../Components/Job Card/JobData";
import JobCard from "../../Components/Job Card/JobCard";

const JobList = () => {
  const [jobD, setJobD] = useState(jobData);
  const [pageNumber, setPageNumber] = useState(0);

  const jobsPerPage = 8;
  const pagesVisited = pageNumber * jobsPerPage;

  const displayJobs = jobD
    .slice(pagesVisited, pagesVisited + jobsPerPage)
    .map((job) => {
      return (
        <div>
          <JobCard item={job} key={job.id} />
        </div>
      );
    });

  const pageCount = Math.ceil(jobD.length / jobsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex flex-wrap gap-[20px] justify-center mt-[50px]">
      {displayJobs}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default JobList;
