import React, { useEffect } from "react";
import MainHeading from "./MainHeading";
import Card from "./Card";
import Pagination from "./Pagination";

const ProductSection = ({page, products}) => { 
  return (
    <div className="col-sm col-md-8 col-lg-9">
      <div className="white wrapper-rgt wrapper-bx">
        <MainHeading page={page}/>
        <div className="row">
          {products.map((pro, ind) => {
            const { image, title, description, price, originalPrice, discount } = pro;
            return (
              <Card key={ind} image={image} title={title} description={description} price={price} originalPrice={originalPrice} discount={discount}/>
            );
          })}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ProductSection;
