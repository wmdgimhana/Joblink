import React from "react";
import CourseCard from "../../Components/Course Card/CourseCard";
import { courseData } from "../../Components/Course Card/CourseData";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const CourseList = () => {
  const [courseD, setCourseD] = useState(courseData);
  const [pageNumber, setPageNumber] = useState(0);

  const coursesPerPage = 8;
  const pagesVisited = pageNumber * coursesPerPage;

  const displayCourses = courseD
    .slice(pagesVisited, pagesVisited + coursesPerPage)
    .map((course) => {
      return (
        <div>
          <CourseCard item={course} key={course.id} />
        </div>
      );
    });

  const pageCount = Math.ceil(courseD.length / coursesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex flex-wrap gap-[20px] justify-center mt-[50px]">
      {displayCourses}
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

export default CourseList;
