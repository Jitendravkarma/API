import React, { memo } from "react";
import { Link } from "react-router-dom";


const Category = ({toggleIcon, icon, bg, textWhite}) => {
  const categories = [
    "Clothing",
    "Men's clothings",
    "Shoes",
    "Sunglasses",
    "Accessories",
    "Lather jackets",
  ];
  return (
    <>
      <div className={`collection-header expand-icon ${bg}`}>
        <h4 className={`${textWhite && "text-white"}`}>Categories</h4>
        <Link to="#" id={`sb-1`}>
            <i className={`fa ${toggleIcon} float-end mt-15`} aria-hidden="true"></i>
        </Link>
      </div>
      <ul
        className="collection with-header header-top categories list-unstyled"
        id="scroll"
      >
        {categories.map((catNm, ind) => (
          <li className="collection-item with-item" key={ind}>
            <i
              className={`fa ${icon} icons-cat`}
              aria-hidden="true"
            />
            <Link to="#">{catNm}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Category);
