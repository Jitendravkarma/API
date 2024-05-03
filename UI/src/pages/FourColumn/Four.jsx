import React, { useEffect } from "react";
import ToTop from "../../components/ToTop";
import { Link } from "react-router-dom";
import { sizes } from "../../staticData/data";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { ContextData } from "../../contextAPI/context";
import Pagination from "../../components/Pagination/Pagination";

const Four = () => {
  const products = useSelector((state) => state.products);
  const { getData2 } = ContextData();
  useEffect(() => {
    getData2();
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
                <Link to="https://designcollection.in/codecanyon/prolist-bootstrap-4-and-materialize-framework-layout/">
                  Home
                </Link>
                &nbsp;/&nbsp; Product Fullwidth Column-4
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
                      <div className="col col-sm col-md-3 col-lg-3" key={ind}>
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

export default Four;
