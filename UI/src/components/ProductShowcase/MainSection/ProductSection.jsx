import React from "react";
import MainHeading from "./MainHeading";
import Card from "../../Card/Card";
import Pagination from "../../Pagination/Pagination";
import { useSelector } from "react-redux";

const ProductSection = ({page}) => { 
  let products = useSelector(state=>state.products);
  return (
    <div className="col-sm col-md-8 col-lg-9">
      <div className="white wrapper-rgt wrapper-bx">
        <MainHeading page={page}/>
        <div className="row">
          {products.map((pro, ind) => {
            const { id, images, title, description, sizePrice } = pro;
            return (
              <div className="col col-sm col-md-6 col-lg-4" key={ind}>
                <Card id={id} image={images.red} title={title} description={description} sizePrice={sizePrice}/>
              </div>
            );
          })}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ProductSection;
