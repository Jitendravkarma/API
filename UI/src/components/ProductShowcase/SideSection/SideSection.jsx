import React from "react";
import { Link } from "react-router-dom";
import Category from "./SidebarFilters/Category";
import Size from "./SidebarFilters/Size";
import PriceRange from "./SidebarFilters/PriceRange";
import Colors from "./SidebarFilters/Colors";
import Sleeves from "./SidebarFilters/Sleeves";
import Brand from "./SidebarFilters/Brand";
import Discount from "./SidebarFilters/Discount";
import Rating from "./SidebarFilters/Rating";
import { IconData } from "../../../pages/Product1/Product1";
const SideSection = () => {
  const data = IconData();
  console.log(data);
  return (
    <div className="col-sm col-md-4 col-lg-3">
      <Link to="#" id="show-filter">
        <span className="filter-tab">
          <i className="fa fa-bars" aria-hidden="true"></i> Filter Siderbar-1
        </span>
      </Link>
      <div className="white wrapper-lft">
        <div className="midbox" id="sidebar">
          <Category toggleIcon={data.toggle} icon={data.catIcon} />
          <PriceRange />
          <Size toggleIcon={data.toggle} inputType={data.type} />
          <Colors toggleIcon={data.toggle} inputType={data.type} />
          <Sleeves toggleIcon={data.toggle} inputType={data.type} />
          <Brand toggleIcon={data.toggle} inputType={data.type} />
          <Discount toggleIcon={data.toggle} inputType={data.type} />
          <Rating toggleIcon={data.toggle} inputType={data.type} />
        </div>
      </div>
    </div>
  );
};

export default SideSection;
