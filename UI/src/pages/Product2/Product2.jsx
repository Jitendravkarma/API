import React, { useEffect } from "react";
import ToTop from "../../components/ToTop";
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
  const { getData2 } = ContextData();
  useEffect(()=>{
    getData2();
  }, []);
  const icons = {toggle:"fa-chevron-down", type:"radio", text:true, bg:'cat-top'}
  return (
    <>
      <ToTop />
      <div className="mid-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="pb-10">Shop Online with Best Offers‎</h1>
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
              <br />
            </div>
          </div>
        </div>
      </div>
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
                    icon={"fa-long-arrow-right"}
                    bg={icons.bg}
                  />
                  <PriceRange bg={icons.bg} />
                  <Size
                    toggleIcon={icons.toggle}
                    inputType={icons.type}
                    bg={icons.bg}
                  />
                  <Colors
                    toggleIcon={icons.toggle}
                    inputType={icons.type}
                    bg={icons.bg}
                    text={true}
                  />
                  <Sleeves
                    toggleIcon={icons.toggle}
                    inputType={icons.type}
                    bg={icons.bg}
                  />
                  <Brand
                    toggleIcon={icons.toggle}
                    inputType={icons.type}
                    bg={icons.bg}
                  />
                  <Discount
                    toggleIcon={icons.toggle}
                    inputType={icons.type}
                    bg={icons.bg}
                  />
                  <Rating
                    toggleIcon={icons.toggle}
                    inputType={icons.type}
                    bg={icons.bg}
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
