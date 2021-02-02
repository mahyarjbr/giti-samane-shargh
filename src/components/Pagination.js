import React from "react";
import { range } from "lodash";
import { Link } from "react-router-dom";

const Pagination = ({ totalCourse, currentPage, perPage, onPageChange }) => {
  const totalPage = Math.ceil(totalCourse / perPage);
  const pages = range(1, totalPage + 1);
  if (pages === 1) return null;

  return (
    <nav aria-label="Page navigation">
      <ul className="d-flex justify-content-center pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "pagination--li active" : "pagination--li"}
          >
            <Link 
              className="pagination--link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
