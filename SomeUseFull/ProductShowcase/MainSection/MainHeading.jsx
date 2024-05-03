import React from "react";
import { Link } from "react-router-dom";

const MainHeading = ({page}) => {
  const shortBy = [
    "Popularity",
    "Price-Low to High",
    "Price-High to Low",
    "Newest First",
  ];
  return (
    <>
      {
        page==="home" &&
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent p-0 mtb-12">
            <li className="breadcrumb-item">
              <Link to="https://designcollection.in/codecanyon/prolist-bootstrap-4-and-materialize-framework-layout/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Clothing</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Men's Clothing </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">T-shirts</Link>
            </li>
          </ol>
        </nav>
      }
      <div className="breadcrumb-sec">
        <h2 className="black-text text-darken-5">T -Shirts</h2>
        <p className="breadcrumb-title">
          (Showing 1 – 40 products of 80,881 products)
        </p>
      </div>
      <div className="d-none d-sm-block">
        <ul className="list-sec list-unstyled unstyled-sec">
          <li>
            <h2 className="black-text text-darken-5">Short By</h2>
          </li>
          {shortBy.map((short, ind) => (
            <li key={ind}>
              <Link to="#">{short}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-lg-none">
        <ul className="list-sec list-unstyled unstyled-sec">
          <li className="left mtb-12">
            <h2 className="black-text text-darken-5">Short By</h2>
          </li>
          <li className="right mtb-12 list-sel">
            <select className="form-control form-select">
              {shortBy.map((short, ind) => (
                <option defaultValue={short === "Popularity"} key={ind}>
                  {short}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainHeading;
