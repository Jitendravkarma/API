import React, { memo } from "react";
import { Link } from "react-router-dom";

const Colors = ({ bg, toggleIcon, inputType, text }) => {
  const colors = [
    { name: "Blue", color: "primary" },
    { name: "Red", color: "danger" },
    { name: "Green", color: "success" },
    { name: "Yellow", color: "warning" },
    { name: "Black", color: "dark" },
  ];
  return (
    <>
      <div className={`collection-header expand-icon ${bg}`}>
        <h4>Color</h4>
        <Link to="#" id={`sb-4`}>
          <i
            className={`fa ${toggleIcon} float-end mt-15`}
            aria-hidden="true"
          ></i>
        </Link>
      </div>
      <ul className="collection with-header header-top color list-unstyled">
        {colors.map((clr, ind) => (
          <li className="collection-item with-item" key={ind}>
            <span className="custom-control custom-checkbox">
              <input
                type={inputType}
                className="custom-control-input"
                id="customCheck6"
                name="example1"
              />
              <label
                className={`d-flex ${text && `text-${clr.color}`} custom-control-label`}
                htmlFor="customCheck6"
              >
                {!text && <span className={`badge bg-${clr.color} left bge-clr`}></span>}
                {clr.name}
              </label>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Colors);
