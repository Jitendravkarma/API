import React from "react";
import img1 from "../../assets/images/image-1.jpg";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div className="col col-sm-12 col-md-6 col-lg-7">
      <div className="white wrapper-rgt">
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
        <h3 className="text-secondary">Hero &amp; piyush</h3>
        <h2 className="mtb-12">Solid Men's Hooded Black T-Shirt</h2>
        <ul className="list-sec list-unstyled">
          <li>
            {" "}
            <span className="font-listing">
              <i className="fa fa-usd"></i>&nbsp;474
            </span>{" "}
          </li>
          <li className="pt-1">
            {" "}
            <span className="currency">
              <i className="fa fa-usd currency"></i>&nbsp;1,499
            </span>
          </li>
          <li className="pt-1">
            <span className="text-success">68% off</span>
          </li>
        </ul>
        <div className="breadcrumb-sec">
          <span className="badge bg-success">
            3.9 <i className="fa fa-star" aria-hidden="true"></i>
          </span>
          <p className="font-size-16 breadcrumb-title">
            5,094 ratings and 777 reviews
          </p>
        </div>
        <div className="clearfix"></div>
        <ul className="list-sec list-unstyled">
          <li>
            {" "}
            <i className="fa fa-tags text-success" aria-hidden="true"></i>
          </li>
          <li>
            <p>
              <b>Special Price</b>
            </p>
          </li>
          <li>
            <p>Get extra 5% off (price inclusive of discount)</p>
          </li>
        </ul>
        <div className="clearfix"></div>
        <div className="breadcrumb-sec mtb-12">
          <h3 className="text-secondary pt-10">Size</h3>
          <Link
            to="#"
            className="btn  btn-tool"
            data-bs-toggle="tooltip"
            data-placement="top"
            title="Length 28 inches"
          >
            {" "}
            M{" "}
          </Link>{" "}
          <Link
            to="#"
            className="btn  btn-tool"
            data-bs-toggle="tooltip"
            data-placement="top"
            title="Length 32 inches"
          >
            {" "}
            L{" "}
          </Link>{" "}
          <Link
            to="#"
            className="btn  btn-tool"
            data-bs-toggle="tooltip"
            data-placement="top"
            title="Length 36 inches"
          >
            {" "}
            XL{" "}
          </Link>{" "}
          <Link
            to="#"
            className="btn  btn-tool"
            data-bs-toggle="tooltip"
            data-placement="top"
            title="Length 20 inches"
          >
            {" "}
            XS{" "}
          </Link>{" "}
          <Link
            to="#"
            className="btn  btn-tool"
            data-bs-toggle="tooltip"
            data-placement="top"
            title="Length 20 inches"
          >
            {" "}
            S{" "}
          </Link>
        </div>
        <div id="accordion">
          <div className="card">
            <div className="card-header accordion-header" id="heading-1">
              <div className="mb-0">
                <Link
                  className="collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  to="#collapse-1"
                  aria-expanded="false"
                  aria-controls="collapse-1"
                >
                  <h2 className="h1">Details & Description</h2>
                </Link>
              </div>
            </div>
            <div
              id="collapse-1"
              className="collapse"
              data-parent="#accordion"
              aria-labelledby="heading-1"
            >
              <div className="card-body">
                <div className="row">
                  <div className="col col-sm-4 col-md-4 col-lg-4">
                    <p className="text-secondary">
                      <b>Style Code</b>
                    </p>
                  </div>
                  <div className="col col-sm-8 col-md-8 col-lg-8">
                    <p>HLSH010203</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-sm-4 col-md-4 col-lg-4">
                    <p className="text-secondary">
                      <b>Fit</b>
                    </p>
                  </div>
                  <div className="col col-sm-8 col-md-8 col-lg-8">
                    <p>Slim</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-sm-4 col-md-4 col-lg-4">
                    <p className="text-secondary">
                      <b>Fabric</b>
                    </p>
                  </div>
                  <div className="col col-sm-8 col-md-8 col-lg-8">
                    <p>Cotton</p>
                  </div>
                </div>
                <div id="text">
                  <div className="row">
                    <div className="col col-sm-4 col-md-4 col-lg-4">
                      <p className="text-secondary">
                        <b>Sleeve</b>
                      </p>
                    </div>
                    <div className="col col-sm-8 col-md-8 col-lg-8">
                      <p>Full Sleeve</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-sm-4 col-md-4 col-lg-4">
                      <p className="text-secondary">
                        <b>Pattern</b>
                      </p>
                    </div>
                    <div className="col col-sm-8 col-md-8 col-lg-8">
                      <p>Checkered</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-sm-4 col-md-4 col-lg-4">
                      <p className="text-secondary">
                        <b>Pack of</b>
                      </p>
                    </div>
                    <div className="col col-sm-8 col-md-8 col-lg-8">
                      <p>1</p>
                    </div>
                  </div>
                </div>
                <div></div>
                <button className="btn btn-primary" id="toggle" type="submit">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header accordion-header" id="heading-2">
              <div className="mb-0">
                <Link
                  className="collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  to="#collapse-2"
                  aria-expanded="false"
                  aria-controls="collapse-2"
                >
                  <div className="r-view">
                    <h2 className="h1">Ratings & Reviews</h2>
                    <p className="pro-txt ps-2">
                      3,510 ratings and 430 reviews
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              id="collapse-2"
              className="collapse"
              data-parent="#accordion"
              aria-labelledby="heading-2"
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <img
                      src={img1}
                      title="images"
                      className="img-fluid img-pannel"
                    />
                    <ul className="pannel-bx list-unstyled">
                      <li>
                        <span
                          className="d-inline-block text-truncate"
                          style={{ maxWidth: "70px" }}
                        >
                          John Smith
                        </span>
                      </li>
                      <li>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                      </li>
                      <li>18-Nov-2018</li>
                      <li>
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                        120{" "}
                        <i
                          className="fa fa-thumbs-down ml-10"
                          aria-hidden="true"
                        ></i>
                        12
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-8 col-md-8">
                    <p className="txt-scroll">
                      {" "}
                      Hello, I am Andrew Smith in this websites I purchased a
                      product which is T-shirts.{" "}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <img
                      src="images/image-2.jpg"
                      className="img-fluid img-pannel"
                      alt="images"
                      title="images"
                    />
                    <ul className="pannel-bx list-unstyled">
                      <li>
                        <span
                          className="d-inline-block text-truncate"
                          style={{ maxWidth: "70px" }}
                        >
                          Mike Smith
                        </span>
                      </li>
                      <li>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star-o icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star-o icon-star"
                          aria-hidden="true"
                        ></i>
                      </li>
                      <li>18-Nov-2018</li>
                      <li>
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                        120{" "}
                        <i
                          className="fa fa-thumbs-down ml-10"
                          aria-hidden="true"
                        ></i>
                        12
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-8 col-md-8">
                    <p className="txt-scroll">
                      {" "}
                      my online shopping experience is very good.Here I found my
                      favorite brand T-shirts which is my favorite.{" "}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <img
                      src="images/image-3.jpg"
                      className="img-fluid img-pannel"
                      alt="images"
                      title="images"
                    />
                    <ul className="pannel-bx list-unstyled">
                      <li>
                        <span
                          className="d-inline-block text-truncate"
                          style={{ maxWidth: "70px" }}
                        >
                          John Doe
                        </span>
                      </li>
                      <li>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-star-half-o icon-star"
                          aria-hidden="true"
                        ></i>
                      </li>
                      <li>18-Nov-2018</li>
                      <li>
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                        120{" "}
                        <i
                          className="fa fa-thumbs-down ml-10"
                          aria-hidden="true"
                        ></i>
                        12
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-8 col-md-8">
                    <p className="txt-scroll">
                      {" "}
                      Here I found it my favorite t-shirts and here delivery
                      system is too good and transition mode is too easy and
                      simple.{" "}
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary btn-rate mt-32"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Rate Product
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-rate mt-32"
                    >
                      View More
                    </button>
                    <div
                      className="modal fade w-100"
                      id="exampleModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              RATE OF PRODUCT
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">
                                  Type your message
                                </label>
                                <textarea
                                  className="form-control modal-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                ></textarea>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">
                                  Rating
                                </label>
                                <i
                                  className="icon-star fa fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="icon-star fa fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="icon-star fa fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="icon-star fa fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="icon-star fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-rate"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-rate"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
