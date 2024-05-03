import React from "react";
import ToTop from '../../components/ToTop';
import ProductBrief from "../../components/ProductDetails/ProductBrief";
import ProductDetail from "../../components/ProductDetails/ProductDetail";
import RelatedItem from "../../components/ProductDetails/RelatedItem";

const Details = () => {
  return (
    <>
      <ToTop/>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <ProductBrief/>
            <ProductDetail/>
          </div>
        </div>
      </div>
      <RelatedItem/>
    </>
  );
};

export default Details;
