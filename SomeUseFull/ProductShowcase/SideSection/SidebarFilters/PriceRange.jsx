import React, { memo } from "react";
import { Link } from "react-router-dom";

const PriceRange = ({ bg }) => {
  return (
    <>
      <div className={`collection-header expand-icon ${bg}`}>
        <h4>Price Range</h4>
        <Link to="#" id={`sb-2`}>
          <i
            className="fa fa-chevron-down float-end mt-15"
            aria-hidden="true"
          ></i>
        </Link>
      </div>
      <ul className="collection with-header header-top range list-unstyled">
        <li className="collection-item with-item">
          <p>
            <input type="text" id="amount" readOnly className="s-range" />
          </p>
          <div id="slider-range"></div>
        </li>
      </ul>
    </>
  );
};

export default memo(PriceRange);
