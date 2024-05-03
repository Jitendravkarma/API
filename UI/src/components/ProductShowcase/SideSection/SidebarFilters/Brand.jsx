import React, { memo } from "react";
import { Link } from "react-router-dom";

const Brand = ({ bg, toggleIcon, inputType }) => {
  const brand = [`Levi's`, `U.S Polo Assn`, `Addidas`, `Lee`, `Metronaut`];
  return (
    <>
      <div className={`collection-header expand-icon ${bg}`}>
        <h4>Brand</h4>
        <Link to="#" id={`sb-6`}>
          <i
            className={`fa ${toggleIcon} float-end mt-15`}
            aria-hidden="true"
          ></i>
        </Link>
      </div>
      <ul className="collection with-header header-top brand list-unstyled">
        <li className="collection-item with-item">
          <form className="frm-srch">
            <input type="text" name="search" placeholder="Search.." />
          </form>
        </li>
        {brand.map((brand, ind) => (
          <li className="collection-item with-item" key={ind}>
            <span className="custom-control custom-checkbox">
              <input
                type={inputType}
                className="custom-control-input"
                id="customCheck18"
                name="example1"
              />
              <label
                className="d-flex custom-control-label"
                htmlFor="customCheck18"
              >
                {brand}
              </label>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Brand);
