import React, { useEffect } from "react";
import img from "../../assets/images/image-1.jpg";
import ToTop from "../../components/ToTop";
import Card from "../../components/Card/Card";
import { NavLink } from "react-router-dom";
import { sizes } from "../../staticData/data";
import { useSelector } from "react-redux";
import { ContextData } from "../../contextAPI/context";
import Pagination from "../../components/Pagination/Pagination";

const Three = () => {
  const products = useSelector((state) => state.products);
  const { getData1 } = ContextData();
  useEffect(() => {
    getData1();
  }, []);
  return (
    <>
      <ToTop />
      <div className="mid-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="pb-10">Shop Online with Best Offers‎</h1>
              <p className="light text-left">
                <NavLink to="https://designcollection.in/codecanyon/prolist-bootstrap-4-and-materialize-framework-layout/">
                  Home
                </NavLink>
                &nbsp;/&nbsp; Product Fullwidth Column-3
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm col-md-12 col-lg-12">
              <div className="white wrapper-rgt">
                <div className="row">
                  {products.map((pro, ind) => {
                    const { id, images, title, description, sizePrice } = pro;
                    return (
                      <div className="col col-sm col-md-6 col-lg-4" key={ind}>
                        <Card
                          id={id}
                          image={images.red}
                          title={title}
                          description={description}
                          sizePrice={sizePrice}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Three;
