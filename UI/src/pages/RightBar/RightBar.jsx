import React from "react";
import img4 from "../../assets/images/image-4.jpg";
import ToTop from '../../components/ToTop';
import { Link } from "react-router-dom";

const RightBar = () => {
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
                &nbsp;/&nbsp;Product Right Sidebar
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm col-md-8 col-lg-9">
              <div className="white wrapper-rgt wrapper-bx">
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
                    <li>
                      <Link to="#">popularity</Link>
                    </li>
                    <li>
                      <Link to="#">Price-Low to High</Link>
                    </li>
                    <li>
                      <Link to="#">Price-High to Low</Link>
                    </li>
                    <li>
                      <Link to="#">Newest First</Link>
                    </li>
                  </ul>
                </div>
                <div className="d-lg-none">
                  <ul className="list-sec list-unstyled unstyled-sec">
                    <li className="left mtb-12">
                      <h2 className="black-text text-darken-5">Short By</h2>
                    </li>
                    <li className="right mtb-12 list-sel">
                      <select className="form-control form-select">
                        <option defaultValue="">popularity</option>
                        <option>Price-Low to High</option>
                        <option>Price-High to Low</option>
                        <option>Newest First</option>
                      </select>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="ribbon">
                        <span>New</span>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">Elepants</h3>
                        <p className="card-text">
                          <Link to="/detail-page">
                            Solid Men's White T-shirts
                          </Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">kay Dee</h3>
                        <p className="card-text">
                          <Link to="/detail-page">Self Design Men's Suit</Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">Aelo</h3>
                        <p
                          className="card-text"
                          title="Men's Rounded T-shirts with full sleeve and half sleeve"
                        >
                          <Link to="/detail-page">
                            Men's Rounded T-shirts with full sleeve and half
                            sleeve
                          </Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">Tripr</h3>
                        <p className="card-text">
                          <Link to="/detail-page">
                            Solid Men's White T-shirts
                          </Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">Top Notch</h3>
                        <p className="card-text">
                          <Link to="/detail-page">
                            Solid Men's White T-shirts
                          </Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">Seven Rocks</h3>
                        <p className="card-text">
                          <Link to="/detail-page">
                            Solid Men's White T-shirts
                          </Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">Maniac</h3>
                        <p className="card-text">
                          <Link to="/detail-page">
                            Solid Men's White T-shirts
                          </Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="ribbon">
                        <span className="ribbon-sale">Sale</span>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">Jangoboy</h3>
                        <p
                          className="card-text"
                          title="Multi Solid Color Range Men's White T-shirts"
                        >
                          <Link to="/detail-page">
                            Multi Solid Color Range Men's White T-shirts
                          </Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">Hero & piyush</h3>
                        <p className="card-text">
                          <Link to="/detail-page">
                            Solid Men's White T-shirts
                          </Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">Kay Dee</h3>
                        <p className="card-text">
                          <Link to="/detail-page">
                            Solid Men's White T-shirts
                          </Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">Maniac</h3>
                        <p className="card-text">
                          <Link to="/detail-page">
                            Solid Men's White T-shirts
                          </Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm col-md-6 col-lg-4">
                    <div className="card card-bx mb-4">
                      <Link to="/detail-page">
                        <img
                          src={img4}
                          className="card-img-top img-fluid"
                          alt="images"
                          title="images"
                        />
                      </Link>
                      <div className="card-body">
                        <h3 className="card-title text-secondary">Zebu</h3>
                        <p className="card-text">
                          <Link to="/detail-page">
                            Solid Men's White T-shirts
                          </Link>
                        </p>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <Link to="#" title="like">
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/detail-page" title="view">
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="share">
                              <i className="fa fa-share-alt" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list-sec list-unstyled">
                          <li>
                            <span>
                              <i className="fa fa-usd"></i>&nbsp;474
                            </span>
                          </li>
                          <li>
                            <span className="currency">
                              <i className="fa fa-usd currency"></i>&nbsp;1,499
                            </span>
                          </li>
                          <li>
                            <span className="text-success">68% off</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination-b justify-content-center">
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      5
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-sm col-md-4 col-lg-3">
              <Link to="#" id="show-filter">
                <span className="filter-tab">
                  <i className="fa fa-bars" aria-hidden="true"></i> Filter Right
                  Sidebar
                </span>
              </Link>
              <div className="white wrapper-lft">
                <div className="midbox" id="sidebar">
                  <div className="collection-header expand-icon">
                    <h4>Categories</h4>
                    <Link to="#" id="sb-1">
                      <i
                        className="fa fa-chevron-down float-end mt-15"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                  <ul
                    className="collection with-header header-top categories list-unstyled"
                    id="scroll"
                  >
                    <li className="collection-item with-item">
                      <i
                        className="fa fa-chevron-left icons-cat"
                        aria-hidden="true"
                      ></i>
                      <Link to="#">Clothing</Link>
                    </li>
                    <li className="collection-item with-item">
                      <i
                        className="fa fa-chevron-left icons-cat"
                        aria-hidden="true"
                      ></i>
                      <Link to="#">Men's clothings</Link>
                    </li>
                    <li className="collection-item with-item">
                      <i
                        className="fa fa-chevron-left icons-cat"
                        aria-hidden="true"
                      ></i>
                      <Link to="#">Shoes</Link>
                    </li>
                    <li className="collection-item with-item">
                      <i
                        className="fa fa-chevron-left icons-cat"
                        aria-hidden="true"
                      ></i>
                      <Link to="#">Sunglasses</Link>
                    </li>
                    <li className="collection-item with-item">
                      <i
                        className="fa fa-chevron-left icons-cat"
                        aria-hidden="true"
                      ></i>
                      <Link to="#">Accessories</Link>
                    </li>
                    <li className="collection-item with-item">
                      <i
                        className="fa fa-chevron-left icons-cat"
                        aria-hidden="true"
                      ></i>
                      <Link to="#">Lather jackets</Link>
                    </li>
                  </ul>

                  <div className="collection-header expand-icon">
                    <h4>Price Range</h4>
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
                          id="amount-3"
                          readOnly
                          className="s-range"
                        />
                      </p>
                      <div id="slider-range-3"></div>
                    </li>
                  </ul>

                  <div className="collection-header expand-icon">
                    <h4>Size</h4>
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

                  <div className="collection-header expand-icon">
                    <h4>Color</h4>
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
                          <span className="badge bg-primary left bge-clr"></span>
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
                          <span className="badge bg-danger bge-clr"></span>Red
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
                          <span className="badge bg-success bge-clr"></span>Green
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
                          <span className="badge bg-warning bge-clr"></span>Yellow
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
                          <span className="badge bg-dark bge-clr"></span>Black
                        </label>
                      </span>
                    </li>
                  </ul>

                  <div className="collection-header expand-icon">
                    <h4>Sleeves</h4>
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

                  <div className="collection-header expand-icon">
                    <h4>Brand</h4>
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

                  <div className="collection-header expand-icon">
                    <h4>Discount</h4>
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

                  <div className="collection-header expand-icon">
                    <h4>Customer Ratings</h4>
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
                          id="customCheck23"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck23">
                          <span>
                            4 <i className="fa fa-star" aria-hidden="true"></i> &
                            Above
                          </span>
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck24"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck24">
                          <span>
                            3 <i className="fa fa-star" aria-hidden="true"></i> &
                            Above
                          </span>
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck25"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck25">
                          <span>
                            2 <i className="fa fa-star" aria-hidden="true"></i> &
                            Above
                          </span>
                        </label>
                      </span>
                    </li>
                    <li className="collection-item with-item">
                      <span className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck26"
                          name="example1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck26">
                          <span>
                            1 <i className="fa fa-star" aria-hidden="true"></i> &
                            Above
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

export default RightBar;
