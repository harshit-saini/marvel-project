import React, { useState, useEffect } from 'react';

// helper functino to create the range of numbers
const calculateRange = (pageNumber, totalPages) => {

  let currentPage = Number(pageNumber);

  let rangeArray = [];
  if (currentPage - 2 > 0) {
    rangeArray.push(currentPage - 2);
    rangeArray.push(currentPage - 1);
  }
  rangeArray.push(currentPage);
  if (currentPage + 2 < totalPages) {
    rangeArray.push(currentPage + 1);
    rangeArray.push(currentPage + 2);
  }

  return rangeArray;
}

const Pagination = ({ currentPage, setCurrentPage, pageLimit, total }) => {

  const [numberOfPages, setNumberOfPages] = useState(-1);
  const [range, setRange] = useState([])

  console.log(currentPage)

  useEffect(() => {
    let numberOfPages = Math.ceil(total / pageLimit);
    setNumberOfPages(numberOfPages);
    const rangeArray = calculateRange(currentPage, numberOfPages);
    setRange(rangeArray);
  }, [total, pageLimit, currentPage])

  const handlePageChange = (event) => {
    // set the current page based on the click 
    const innerText = event.currentTarget.innerText;
    let newPage = Number(innerText);
    if (innerText === "Start") newPage = 1;
    if (innerText === "End") newPage = (numberOfPages)
    console.log(newPage)
    setCurrentPage(newPage)
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item pointer" onClick={handlePageChange}>
          <span className="page-link">
            <span>Start</span>
          </span>
        </li>
        {range.map(item => (
          <li key={item} className={currentPage === item ? "page-item active pointer" : "page-item pointer"} onClick={handlePageChange}><span className="page-link" data-number={item} href="#">{item}</span></li>
        ))}
        <li className="page-item pointer" onClick={handlePageChange}>
          <span className="page-link">
            <span>End</span>
          </span>
        </li>
      </ul>
    </nav>
  )
};

export default Pagination;
