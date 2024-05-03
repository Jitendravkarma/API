import React from "react";
import ToTop from '../../components/ToTop';
import { Link } from "react-router-dom";
import Category from "../../components/ProductShowcase/SideSection/SidebarFilters/Category";
import PriceRange from "../../components/ProductShowcase/SideSection/SidebarFilters/PriceRange";
import Size from "../../components/ProductShowcase/SideSection/SidebarFilters/Size";
import Colors from "../../components/ProductShowcase/SideSection/SidebarFilters/Colors";
import Sleeves from "../../components/ProductShowcase/SideSection/SidebarFilters/Sleeves";
import Brand from "../../components/ProductShowcase/SideSection/SidebarFilters/Brand";
import Discount from "../../components/ProductShowcase/SideSection/SidebarFilters/Discount";
import Rating from "../../components/ProductShowcase/SideSection/SidebarFilters/Rating";

const Sidebar = () => {
  return (
    <>
      <ToTop/>
      <div className="mid-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="pb-10">Shop Online with Best Offers‎</h1>
              <p className="light text-left">
                <Link to="https://designcollection.in/codecanyon/prolist-bootstrap-4-and-materialize-framework-layout/">
                  Home
                </Link>
                &nbsp;/&nbsp;Products With All Sidebar
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm col-md-1 col-lg-1"></div>
            <div className="col-sm col-md-3 col-lg-3">
              <div className="white wrapper-lft">
                <h2 className="h1 mtb-32">SIDEBAR-1</h2>
                <Category toggleIcon={"fa-chevron-down"} icon={"fa-chevron-left"}/>
                <PriceRange toggleIcon={"fa-chevron-down"}/>
                <Size toggleIcon={"fa-chevron-down"} inputType={"checkbox"}/>
                <Colors toggleIcon={"fa-chevron-down"} inputType={"checkbox"}/>
                <Sleeves toggleIcon={"fa-chevron-down"} inputType={"checkbox"}/>
                <Brand toggleIcon={"fa-chevron-down"} inputType={"checkbox"}/>
                <Discount toggleIcon={"fa-chevron-down"} inputType={"checkbox"}/>
                <Rating toggleIcon={"fa-chevron-down"} inputType={"checkbox"}/>
              </div>
            </div>

            <div className="col-sm col-md-3 col-lg-3">
              <div className="white wrapper-lft">
                <h2 className="h1 mtb-32">SIDEBAR-1</h2>
                <Category toggleIcon={"fa-chevron-down"} icon={"fa-long-arrow-right"} bg={"cat-top"}/>
                <PriceRange toggleIcon={"fa-chevron-down"} bg={"cat-top"}/>
                <Size toggleIcon={"fa-chevron-down"} inputType={"radio"} bg={"cat-top"}/>
                <Colors toggleIcon={"fa-chevron-down"} inputType={"radio"} text={true} bg={"cat-top"}/>
                <Sleeves toggleIcon={"fa-chevron-down"} inputType={"radio"} bg={"cat-top"}/>
                <Brand toggleIcon={"fa-chevron-down"} inputType={"radio"} bg={"cat-top"}/>
                <Discount toggleIcon={"fa-chevron-down"} inputType={"radio"} bg={"cat-top"}/>
                <Rating toggleIcon={"fa-chevron-down"} inputType={"radio"} bg={"cat-top"}/>
              </div>
            </div>

            <div className="col-sm col-md-3 col-lg-3">
              <div className="white wrapper-lft">
                <h2 className="h1 mtb-32">SIDEBAR-3</h2>
                <div className="sidebar-new">
                  <Category toggleIcon={"fa-chevron-down"} textWhite={true} icon={"fa-circle"} bg={"cat-side"}/>
                  <PriceRange toggleIcon={"fa-chevron-down"} textWhite={true} bg={"cat-side"}/>
                </div>

                <div className="sidebar-new">
                  <div className="collection-header expand-icon cat-side">
                    <h4 className="text-white">Price Range</h4>
                    <Link to="#" id="sb-2">
                      <i
                        className="fa fa-chevron-down float-end mt-15"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                  <ul className="collection with-header header-top range list-unstyled">
                    <li className="collection-item with-item">
                      <p>
                        <input
                          type="text"
                          id="amount-2"
                          readOnly
                          className="s-range b-range"
                        />
                      </p>
                      <div id="slider-range-2"></div>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-new">
                  <div className="collection-header expand-icon cat-side">
                    <h4 className="text-white">Size</h4>
                    <Link to="#" id="sb-3">
                      <i
                        className="fa fa-chevron-down float-end mt-15"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                  <ul className="collection with-header header-top size list-unstyled">
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                          L
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck2"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck2">
                          XXS
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck3"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck3">
                          3XS
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck4"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck4">
                          XS
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck5"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck5">
                          S
                        </label>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-new">
                  <div className="collection-header expand-icon cat-side">
                    <h4 className="text-white">Color</h4>
                    <Link to="#" id="sb-4">
                      <i
                        className="fa fa-chevron-down float-end mt-15"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                  <ul className="collection with-header header-top color list-unstyled">
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck6"
                          name="example1"
                        />
                        <label
                          className="custom-control-label d-flex"
                          htmlFor="customCheck6"
                        >
                          <span className="badge bg-primary left bge-cat"></span>
                          Blue
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck7"
                          name="example1"
                        />
                        <label
                          className="custom-control-label d-flex"
                          htmlFor="customCheck7"
                        >
                          <span className="badge bg-danger bge-cat"></span>Red
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck8"
                          name="example1"
                        />
                        <label
                          className="custom-control-label d-flex"
                          htmlFor="customCheck8"
                        >
                          <span className="badge bg-success bge-cat"></span>Green
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck9"
                          name="example1"
                        />
                        <label
                          className="custom-control-label d-flex"
                          htmlFor="customCheck9"
                        >
                          <span className="badge bg-warning bge-cat"></span>Yellow
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck10"
                          name="example1"
                        />
                        <label
                          className="custom-control-label d-flex"
                          htmlFor="customCheck10"
                        >
                          <span className="badge bg-dark bge-cat"></span>Black
                        </label>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-new">
                  <div className="collection-header expand-icon cat-side">
                    <h4 className="text-white">Sleeves</h4>
                    <Link to="#" id="sb-5">
                      <i
                        className="fa fa-chevron-down float-end mt-15"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                  <ul className="collection with-header header-top sleeves list-unstyled">
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck11"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck11">
                          Full Sleeves
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck12"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck12">
                          Half Sleeves
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck13"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck13">
                          Short Sleeves
                        </label>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-new">
                  <div className="collection-header expand-icon cat-side">
                    <h4 className="text-white">Brand</h4>
                    <Link to="#" id="sb-6">
                      <i
                        className="fa fa-chevron-down float-end mt-15"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                  <ul className="collection with-header header-top brand list-unstyled">
                    <li className="collection-item with-item">
                      <form className="frm-srch">
                        <input
                          type="text"
                          name="search"
                          placeholder="Search.."
                        />
                      </form>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck14"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck14">
                          Levi's
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck15"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck15">
                          U.S Polo Assn
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck16"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck16">
                          Addidas
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck17"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck17">
                          Lee
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck18"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck18">
                          Metronaut
                        </label>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-new">
                  <div className="collection-header expand-icon cat-side">
                    <h4 className="text-white">Discount</h4>
                    <Link to="#" id="sb-7">
                      <i
                        className="fa fa-chevron-down float-end mt-15"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                  <ul className="collection with-header header-top discount list-unstyled">
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck19"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck19">
                          10% or More
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck20"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck20">
                          20% or More
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck21"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck21">
                          30% or More
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck22"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck22">
                          40% or More
                        </label>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-new">
                  <div className="collection-header expand-icon cat-side">
                    <h4 className="text-white">Customer Ratings</h4>
                    <Link to="#" id="sb-8">
                      <i
                        className="fa fa-chevron-down float-end mt-15"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                  <ul className="collection with-header header-top rating list-unstyled">
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck76"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck76">
                          <span>
                            4
                            <i
                              className="fa fa-star icon-star"
                              aria-hidden="true"
                            ></i>
                            & Above
                          </span>
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck77"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck77">
                          <span>
                            3
                            <i
                              className="fa fa-star icon-star"
                              aria-hidden="true"
                            ></i>
                            & Above
                          </span>
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck78"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck78">
                          <span>
                            2
                            <i
                              className="fa fa-star icon-star"
                              aria-hidden="true"
                            ></i>
                            & Above
                          </span>
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck79"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck79">
                          <span>
                            1
                            <i
                              className="fa fa-star icon-star"
                              aria-hidden="true"
                            ></i>
                            & Above
                          </span>
                        </label>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
