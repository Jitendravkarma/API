import React, { memo } from "react";
import { Link } from "react-router-dom";

const Discount = ({ bg, toggleIcon, inputType }) => {
  const discount = [10, 20, 30, 40];
  return (
    <>
      <div className={`collection-header expand-icon ${bg}`}>
        <h4>Discount</h4>
        <Link to="#" id={`sb-7`}>
          <i
            className={`fa ${toggleIcon} float-end mt-15`}
            aria-hidden="true"
          ></i>
        </Link>
      </div>
      <ul className="collection with-header header-top discount list-unstyled">
        {discount.map((dis, ind) => (
          <li className="collection-item with-item" key={ind}>
            <span className="custom-control custom-checkbox">
              <input
                type={inputType}
                className="custom-control-input"
                id="customCheck19"
                name="example1"
              />
              <label
                className="d-flex custom-control-label"
                htmlFor="customCheck19"
              >
                {dis}% or More
              </label>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Discount);
