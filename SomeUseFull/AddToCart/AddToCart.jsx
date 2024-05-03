import React from "react";
import img1 from "../../assets/images/image-1.jpg";

const AddToCart = () => {
  return (
    <div className="col col-sm-12 col-md-8 col-lg-8">
      <div className="bg-white card-go">
        <div className="row">
          <div className="col col-sm-6 col-md-8 col-lg-8">
            <div className="my-card">
              <h1 className="my-cart">MY CART(2)</h1>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-4">
            <ul className="my-card my-card-rgt list-unstyled">
              <li>
                <i className="fa fa-map-marker pe-2" aria-hidden="true"></i>
              </li>
              <li>
                <p>54862</p>
              </li>
              <li>
                <p className="blue-text text-darken-1 right-align">Check</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row save-cart">
          <div className="col col-sm-12 col-md-8 col-lg-8">
            <div className="my-card">
              <div className="product-lft">
                <img
                  src={img1}
                  className="img-fluid"
                  alt="images"
                  title="images"
                />
                <div className="clearfix"></div>
                <ul className="card-quality list-unstyled mt-2">
                  <li>
                    <a href="#" className="btn product-btn">
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <input
                      type="text"
                      value="1"
                      onChange={() => console.log(`error`)}
                      className="cart-plus-minus-box pt-2"
                    />
                  </li>
                  <li>
                    <a href="#" className="btn product-btn">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-rgt">
                <p className="mtb-12">
                  <a href="#">Rodid Men's White Shirt</a>
                </p>
                <p>Size: S</p>
                <p>Seller: RC</p>
                <ul className="list-sec card-quality mtb-12 list-unstyled">
                  <li>
                    <span className="font-listing">
                      <i className="fa fa-usd"> </i> 474
                    </span>
                  </li>
                  <li className="pt-1">
                    <span className="currency">
                      <i className="fa fa-usd"></i>1,499
                    </span>
                  </li>
                </ul>
                <div className="card-quality">
                  <h5>
                    <a href="#">SAVE FOR LATER</a>
                  </h5>
                  <h5>
                    <a href="#">Remove</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-4">
            <ul className="my-card list-unstyled">
              <li>
                <p className="mt-20">
                  Delivery in 3-4 days |
                  <i className="fa fa-usd font-listing"></i>&nbsp;40
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row save-cart">
          <div className="col col-sm-12 col-md-8 col-lg-8">
            <div className="my-card">
              <div className="product-lft">
                <img
                  src={img1}
                  className="img-fluid"
                  alt="images"
                  title="images"
                />
                <div className="clearfix"></div>
                <ul className="card-quality list-unstyled mt-2">
                  <li>
                    <a href="#" className="btn product-btn">
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <input
                      type="text"
                      value="1"
                      onChange={() => console.log(`error`)}
                      className="cart-plus-minus-box pt-2"
                    />
                  </li>
                  <li>
                    <a href="#" className="btn product-btn">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-rgt">
                <p className="mtb-12">
                  <a href="#">Rodid Men's White Shirt</a>
                </p>
                <p>Size: S</p>
                <p>Seller: RC</p>
                <ul className="list-sec card-quality mtb-12 list-unstyled">
                  <li>
                    <span className="font-listing">
                      <i className="fa fa-usd"> </i> 474
                    </span>
                  </li>
                  <li className="pt-1">
                    <span className="currency">
                      <i className="fa fa-usd"></i>1,499
                    </span>
                  </li>
                </ul>
                <div className="card-quality">
                  <h5>
                    <a href="#">SAVE FOR LATER</a>
                  </h5>
                  <h5>
                    <a href="#">Remove</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-4">
            <ul className="my-card list-unstyled">
              <li>
                <p className="mt-20">
                  Delivery in 3-4 days |
                  <i className="fa fa-usd font-listing"></i>&nbsp;40
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div id="accordion">
          <div className="card">
            <div className="card-header accordion-header" id="heading-1">
              <div className="mb-0">
                <a
                  className="collapsed"
                  data-bs-toggle="collapse"
                  href="#collapse-1"
                >
                  <div className="d-flex">
                    <h2 className="h1">Login</h2>
                    <p className="pro-txt ps-2">JOHN SMITH</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              id="collapse-1"
              className="collapse"
              data-parent="#accordion"
              aria-labelledby="heading-1"
            >
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                      <input
                        type="text"
                        className="form-control control-border mt-2"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                      <input
                        type="password"
                        className="form-control control-border mt-2 mb-4"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                      <a
                        href="add-to-cart.html"
                        target="_blank"
                        className="btn btn-login"
                      >
                        SIGNIN/SIGNUP
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header accordion-header" id="heading-2">
              <div className="mb-0">
                <a
                  className="collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  href="#collapse-2"
                  aria-expanded="false"
                  aria-controls="collapse-2"
                >
                  <div className="r-view">
                    <h2 className="h1">Delivery Adress</h2>
                  </div>
                </a>
              </div>
            </div>
            <div
              id="collapse-2"
              className="collapse"
              data-parent="#accordion"
              aria-labelledby="heading-2"
            >
              <div className="card-body">
                John Smith:
                <p className="adress-txt">
                  WASHINGTON D.C.. 1607 23rd Street NW, Washington, DC 20008.
                  ATLANTA. 664 Dickens Road, Lilburn, Georgia 30047. CHARLOTTE.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header accordion-header" id="heading-3">
              <div className="mb-0">
                <a
                  className="collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  href="#collapse-3"
                  aria-expanded="false"
                  aria-controls="collapse-3"
                >
                  <div className="r-view">
                    <h2 className="h1">Payment Option</h2>
                  </div>
                </a>
              </div>
            </div>
            <div
              id="collapse-3"
              className="collapse"
              data-parent="#accordion"
              aria-labelledby="heading-3"
            >
              <div className="card-body">
                <div className="accordion" id="accordionExample">
                  <div className="card sub-card">
                    <div
                      className="card-header card-sub-header"
                      id="headingOne"
                    >
                      <h2 className="mb-0">
                        <a
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span className="acc-head">
                            Credit / Debit / ATM Card
                          </span>
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body sub-card-body">
                        <div className="row">
                          <div className="mb-3 col-sm-12 col-lg-6 col-md-12">
                            <input
                              type="text"
                              className="form-control control-border mt-2"
                              placeholder="Enter Capicha Code"
                            />
                          </div>
                          <div className="col-sm-12 col-lg-6 col-md-12">
                            <div className="row mt-2">
                              <div className="form-group col-lg-4 col-sm-4 col-md-4">
                                <input
                                  type="text"
                                  className="form-control control-border"
                                  placeholder="Expiry"
                                />
                              </div>
                              <div className="form-group col-lg-4 col-sm-4 col-md-4">
                                <select
                                  id="inputmonth"
                                  className="form-select border-0 border-bottom control-border"
                                >
                                  <option defaultValue="">Month</option>
                                  <option value="01">01</option>
                                  <option value="02">02</option>
                                  <option value="03">03</option>
                                </select>
                              </div>
                              <div className="form-group col-lg-4 col-sm-4 col-md-4">
                                <select
                                  id="inputyear"
                                  className="form-select border-0 border-bottom control-border"
                                >
                                  <option defaultValue="">Year</option>
                                  <option value="Y">Year</option>
                                  <option value="19">19</option>
                                  <option value="20">20</option>
                                  <option value="21">21</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3 col-sm-12 col-lg-6 col-md-12">
                            <input
                              type="text"
                              className="form-control control-border mt-2"
                              placeholder="CCV"
                            />
                          </div>
                          <div className="col col-sm-12 col-lg-6 col-md-12">
                            <a
                              href="add-to-cart.html"
                              target="_blank"
                              className="btn btn-login"
                            >
                              PAY
                              <i className="text-white fa fa-usd"></i>11,357
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card sub-card">
                    <div
                      className="card-header card-sub-header"
                      id="headingTwo"
                    >
                      <h2 className="mb-0">
                        <a
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span className="acc-head">Net Banking</span>
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body sub-card-body">
                        <h2>Popular Banks</h2>
                        <div className="pop-bnk">
                          <div className="form-check bank">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              Citygroup inc.
                            </label>
                          </div>
                          <div className="form-check bank">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              Morgan Stanley
                            </label>
                          </div>
                          <div className="form-check bank">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios3"
                              value="option3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              U.S Bancorp
                            </label>
                          </div>
                          <div className="form-check bank">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios4"
                              value="option4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              BB&T Corp.
                            </label>
                          </div>
                          <div className="form-check bank">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios5"
                              value="option5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              HSBC USA Inc.
                            </label>
                          </div>
                          <div className="form-check bank">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios6"
                              value="option6"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              SunTrust Banks Inc.
                            </label>
                          </div>
                          <div className="form-check bank">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios7"
                              value="option7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              State Street Corp.
                            </label>
                          </div>
                          <div className="form-check bank">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios8"
                              value="option8"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              PNC BANK
                            </label>
                          </div>
                        </div>
                        <h2 className="mid-section">Other Banks</h2>
                        <select
                          id="inputbank"
                          className="form-select browser-default"
                        >
                          <option defaultValue="">--Select Bank--</option>
                          <option
                            value="1"
                            onChange={() => console.log(`error`)}
                          >
                            JPMorgan Chase &amp; Co.
                          </option>
                          <option value="2">Bank of America Corp.</option>
                          <option value="3">Wells Fargo &amp; Co.</option>
                          <option value="4">Citigroup Inc.</option>
                          <option value="5">Goldman Sachs Group Inc.</option>
                          <option value="6">Morgan Stanley.</option>
                          <option value="7">U.S. Bancorp.</option>
                          <option value="8">TD Group US Holdings LLC.</option>
                          <option value="9">
                            PNC Financial Services Group Inc.
                          </option>
                          <option value="10">
                            Bank of New York Mellon Corp.
                          </option>
                          <option value="11">
                            Capital One Financial Corp.
                          </option>
                          <option value="12">State Street Corp.</option>
                          <option value="13">BB&amp;T Corp.</option>
                          <option value="14">SunTrust Banks Inc.</option>
                          <option value="15">HSBC USA Inc.</option>
                        </select>
                        <a
                          href="add-to-cart.html"
                          target="_blank"
                          className="btn btn-login"
                        >
                          <i className="text-white fa fa-usd">PAY </i>11,357
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header card-sub-header"
                      id="headingThree"
                    >
                      <h2 className="mb-0">
                        <a
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span className="acc-head">Cash on Delivery</span>
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body sub-card-body">
                        <div className="row">
                          <div className="mb-3 col-sm-12 col-lg-6 col-md-12">
                            <img
                              src={img1}
                              className="img-fluid rcap-img"
                              alt="images"
                              title="images"
                            />
                          </div>
                          <div className="mb-3 col-sm-12 col-lg-6 col-md-12">
                            <input
                              type="text"
                              className="form-control control-border"
                              placeholder="Enter Card Number"
                            />
                          </div>
                          <div className="col-sm-12 col-lg-12 col-md-12">
                            <a
                              href="add-to-cart.html"
                              target="_blank"
                              className="btn btn-login float-end"
                            >
                              CONFIRM
                            </a>
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

export default AddToCart;
