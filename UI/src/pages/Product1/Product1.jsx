import React, { useEffect } from "react";
import ToTop from "../../components/ToTop";
import MidSection from "../../components/MidSection";
import { Link } from "react-router-dom";
import Category from "../../components/SidebarFilters/Category";
import Size from "../../components/SidebarFilters/Size";
import PriceRange from "../../components/SidebarFilters/PriceRange";
import Colors from "../../components/SidebarFilters/Colors";
import Sleeves from "../../components/SidebarFilters/Sleeves";
import Brand from "../../components/SidebarFilters/Brand";
import Discount from "../../components/SidebarFilters/Discount";
import Rating from "../../components/SidebarFilters/Rating";
import { ContextData } from "../../contextAPI/context";
import ProductSection from "../../components/ProductShowcase/MainSection/ProductSection";

const Product = () => {
  const { getData1 } = ContextData();
  useEffect(() => {
    getData1();
  }, []);
  const icons = {toggle:"fa-chevron-down", type:"checkbox"}
  return (
    <>
      <ToTop />
      <MidSection page={"home"} />
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm col-md-4 col-lg-3">
              <Link to="#" id="show-filter">
                <span className="filter-tab">
                  <i className="fa fa-bars" aria-hidden="true"></i> Filter
                  Siderbar-1
                </span>
              </Link>
              <div className="white wrapper-lft">
                <div className="midbox" id="sidebar">
                  <Category
                    toggleIcon={icons.toggle}
                    icon={"fa-chevron-left"}
                  />
                  <PriceRange toggleIcon={icons.toggle}/>
                  <Size toggleIcon={icons.toggle} inputType={icons.type} />
                  <Colors
                    toggleIcon={icons.toggle}
                    inputType={icons.type}
                  />
                  <Sleeves
                    toggleIcon={icons.toggle}
                    inputType={icons.type}
                  />
                  <Brand
                    toggleIcon={icons.toggle}
                    inputType={icons.type}
                  />
                  <Discount
                    toggleIcon={icons.toggle}
                    inputType={icons.type}
                  />
                  <Rating
                    toggleIcon={icons.toggle}
                    inputType={icons.type}
                  />
                </div>
              </div>
            </div>
            <ProductSection/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
