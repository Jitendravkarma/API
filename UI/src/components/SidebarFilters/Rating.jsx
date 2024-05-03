import React, { memo } from "react";
import { Link } from "react-router-dom";

const Rating = ({ bg, toggleIcon, inputType }) => {
  const rating = [4, 3, 2, 1];
  return (
    <>
      <div className={`collection-header expand-icon ${bg}`}>
        <h4>Customer Ratings</h4>
        <Link to="#" id={`sb-8`}>
          <i
            className={`fa ${toggleIcon} float-end mt-15`}
            aria-hidden="true"
          ></i>
        </Link>
      </div>
      <ul className="collection with-header header-top rating list-unstyled">
        {rating.map((rat, ind) => (
          <li className="collection-item with-item" key={ind}>
            <span className="custom-control custom-checkbox">
              <input
                type={inputType}
                className="custom-control-input"
                id="customCheck23"
                name="example1"
              />
              <label
                className="d-flex custom-control-label"
                htmlFor="customCheck23"
              >
                <span>
                  {rat} <i className="fa fa-star" aria-hidden="true"></i> &
                  Above
                </span>
              </label>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Rating);
