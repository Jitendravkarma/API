import React from "react";
import Card from "../Card";
import img1 from "../../assets/images/image-1.jpg";
import img2 from "../../assets/images/image-2.jpg";
import img3 from "../../assets/images/image-3.jpg";
import img4 from "../../assets/images/image-4.jpg";

const RelatedItem = () => {
  const size = ['L', 'M', 'SM', 'XS', 'XXS', '3XS'];
  return (
    <div className="container">
      <div className="col">
        <div className="white wrapper-rgt">
          <h1 className="h1 mtb-32">
            <b>Sponsored product related to this item</b>
          </h1>
          <div className="row">
            <div className="col col-sm col-md-6 col-lg-3">
                <Card image={img1} title={"Evelas"} price={449} originalPrice={1500} discount={68} description={"Solid Men's White T-shirts"} sizes={size}/>
            </div>
            <div className="col col-sm col-md-6 col-lg-3">
                <Card image={img2} title={"Evelas"} price={449} originalPrice={1500} discount={68} description={"Solid Men's White T-shirts"} sizes={size}/>
            </div>
            <div className="col col-sm col-md-6 col-lg-3">
                <Card image={img3} title={"Evelas"} price={449} originalPrice={1500} discount={68} description={"Solid Men's White T-shirts"} sizes={size}/>
            </div>
            <div className="col col-sm col-md-6 col-lg-3">
                <Card image={img4} title={"Evelas"} price={449} originalPrice={1500} discount={68} description={"Solid Men's White T-shirts"} sizes={size}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedItem;
