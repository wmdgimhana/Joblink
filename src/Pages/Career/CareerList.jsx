import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import JobCard from "../../Components/Job Card/JobCard";
import { careerData } from "../../Components/Career Card/CareerCardData";
import CareerCard from "../../Components/Career Card/CareerCard";

const CareerList = () => {
  const [careerD, setCareerD] = useState(careerData);
  const [pageNumber, setPageNumber] = useState(0);

  const careerPerPage = 8;
  const pagesVisited = pageNumber * careerPerPage;

  const displayCareer = careerD
    .slice(pagesVisited, pagesVisited + careerPerPage)
    .map((career) => {
      return (
        <div>
          <CareerCard item={career} key={career.id} />
        </div>
      );
    });

  const pageCount = Math.ceil(careerD.length / careerPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex flex-wrap gap-[20px] justify-center mt-[50px]">
      {displayCareer}
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

export default CareerList;
