import React, { memo } from "react";
import { Link } from "react-router-dom";

const Size = ({ bg, toggleIcon, inputType }) => {
  const sizes = ["L", "XXS", "3XS", "XS", "S"];
  return (
    <>
      <div className={`collection-header expand-icon ${bg}`}>
        <h4>Size</h4>
        <Link to="#" id={`sb-3`}>
          <i
            className={`fa ${toggleIcon} float-end mt-15`}
            aria-hidden="true"
          ></i>
        </Link>
      </div>
      <ul className="collection with-header header-top size list-unstyled">
        {sizes.map((size, ind) => (
          <li className="collection-item with-item" key={ind}>
            <span className="custom-control custom-checkbox">
              <input
                type={inputType}
                className="custom-control-input"
                id="customCheck1"
                name="example1"
              />
              <label
                className="d-flex custom-control-label"
                htmlFor="customCheck1"
              >
                {size}
              </label>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Size);
