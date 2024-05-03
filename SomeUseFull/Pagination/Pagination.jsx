import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  const pages = [1, 2, 3, 4, 5];
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-b justify-content-center">
        <li className="page-item">
          <Link className="page-link" to="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {pages.map((page, ind) => (
          <li
            className={`page-item ${page === 1 && "active"}`}
            aria-current="page"
            key={ind}
          >
            <Link className="page-link" to="#">
              {page}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link className="page-link" to="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
