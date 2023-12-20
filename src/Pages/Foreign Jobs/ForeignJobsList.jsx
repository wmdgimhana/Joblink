import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { jobData } from "../../Components/Job Card/JobData";
import JobCard from "../../Components/Job Card/JobCard";

const ForeignJobsList = () => {
  // getting foreign jobs

  const [foreignJobD, setForeignJobD] = useState(jobData);
  const [pageNumber, setPageNumber] = useState(0);

  const foreignJobsPage = 8;
  const pagesVisited = pageNumber * foreignJobsPage;

  const displayForeignJobs = foreignJobD
    .slice(pagesVisited, pagesVisited + foreignJobsPage)
    .filter((item) => item.foreign)
    .map((job) => {
      return (
        <div>
          <JobCard item={job} key={job.id} />
        </div>
      );
    });

  const pageCount = Math.ceil(foreignJobD.length / foreignJobsPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex flex-wrap gap-[20px] justify-center mt-[50px]">
      {displayForeignJobs}
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

export default ForeignJobsList;
