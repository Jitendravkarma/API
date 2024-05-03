import React, { memo } from "react";
import { Link } from "react-router-dom";

const MidSection = ({ page }) => {
  return (
    <div className="mid-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="pb-10">Shop Online with Best Offers‎</h1>
            {page === "home" ? (
              <p className="light text-left">
                <Link to="https://designcollection.in/codecanyon/prolist-bootstrap-4-and-materialize-framework-layout/">
                  Home
                </Link>
                &nbsp;/&nbsp;sidebar-1
              </p>
            ) : (
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 m-0">
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
            )}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MidSection);
