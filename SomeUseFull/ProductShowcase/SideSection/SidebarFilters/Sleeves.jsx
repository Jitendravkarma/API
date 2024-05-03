import React, { memo } from "react";
import { Link } from "react-router-dom";

const Sleeves = ({ bg, toggleIcon, inputType }) => {
  const sleeves = ["Full Sleeves", "Half Sleeves", "Short Sleeves"];
  return (
    <>
      <div className={`collection-header expand-icon ${bg}`}>
        <h4>Sleeves</h4>
        <Link to="#" id={`sb-5`}>
          <i
            className={`fa ${toggleIcon} float-end mt-15`}
            aria-hidden="true"
          ></i>
        </Link>
      </div>
      <ul className="collection with-header header-top sleeves list-unstyled">
        {sleeves.map((sleeve, ind) => (
          <li className="collection-item with-item" key={ind}>
            <span className="custom-control custom-checkbox">
              <input
                type={inputType}
                className="custom-control-input"
                id="customCheck11"
                name="example1"
              />
              <label
                className="d-flex custom-control-label"
                htmlFor="customCheck11"
              >
                {sleeve}
              </label>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Sleeves);
