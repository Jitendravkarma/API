import React from "react";
import shop from "../../assets/images/shoping.png";

const PriceDetail = () => {
  return (
    <div className="col col-sm-12 col-md-4 col-lg-4">
      <div className="bg-white wrapper-lft">
        <ul className="collection with-header header-top categories list-unstyled">
          <li className="collection-header expand-icon">
            <h4>PRICE DETAILS</h4>
          </li>
          <li className="collection-item with-item pr-detail">
            <a href="#">Price (2 items) </a>
            <a href="#" className="secondary-content">
              <i className="fa fa-usd"> 1,125</i>
            </a>
          </li>
          <li className="collection-item with-item pr-detail">
            <a href="#">Delivery Charges </a>
            <a href="#" className="secondary-content">
              <i className="fa fa-usd"> 40</i>
            </a>
          </li>
          <li className="collection-item with-item pr-detail">
            <a href="#">Amount Payable </a>
            <a href="#" className="secondary-content">
              <i className="fa fa-usd"> 1,165</i>
            </a>
          </li>
          <li className="collection-item with-item pr-detail">
            <a href="#" className="green-text text-darken-1">
              Your Total Savings on this order
              <i className="fa fa-usd"> 2,431</i>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-white card-go">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <img src={shop} className="img-fluid img-shopping" title="images" />
          </div>
          <div className="col-sm-12 col-md-9 col-lg-9 pt-10 text-center">
            <h4>100% Purchase Protection</h4>
            <p className="text-product">
              <a href="#">Orignal Products|Secure Payments</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetail;
