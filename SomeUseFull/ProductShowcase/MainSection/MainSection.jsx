import React, { memo } from "react";
import ProductSection from "./ProductSection";
import { Link } from "react-router-dom";
import Category from "./SidebarFilters/Category";
import Size from './SidebarFilters/Size';
import PriceRange from "./SidebarFilters/PriceRange";
import Colors from "./SidebarFilters/Colors";
import Sleeves from "./SidebarFilters/Sleeves";
import Brand from "./SidebarFilters/Brand";
import Discount from "./SidebarFilters/Discount";
import Rating from "./SidebarFilters/Rating";

const MainSection = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm col-md-4 col-lg-3">
            <Link to="#" id="show-filter">
              <span className="filter-tab">
                <i className="fa fa-bars" aria-hidden="true"></i> Filter Siderbar-1
              </span>
            </Link>
            <div className="white wrapper-lft">
              <div className="midbox" id="sidebar">
                <Category/>
                <PriceRange/>
                <Size/>
                <Colors/>
                <Sleeves/>
                <Brand/>
                <Discount/>
                <Rating/>
              </div>
            </div>
          </div>
          <ProductSection />
        </div>
      </div>
    </div>
  );
};

export default memo(MainSection);
