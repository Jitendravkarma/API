import React from "react";
import img1 from "../../assets/images/image-1.jpg";
import img2 from "../../assets/images/image-2.jpg";
import img3 from "../../assets/images/image-3.jpg";
import img4 from "../../assets/images/image-4.jpg";
import img5 from "../../assets/images/image-5.jpg";
import { Link } from "react-router-dom";

const ProductBrief = () => {
  return (
    <div className="col col-sm-12 col-md-6 col-lg-5">
      <div className="white wrapper-lft wr-cart">
        <div className="card card-store">
          <div className="card-body store-body product-cart">
            <div className="product-info">
              <div className="product-gallery">
                <div className="product-gallery-thumbnails">
                  <ul className="thumbnails-list list-unstyled">
                    <li>
                      <img
                        src={img1}
                        className="img-fluid"
                        alt="store"
                        title="store"
                      />
                    </li>
                    <li>
                      <img
                        src={img2}
                        className="img-fluid"
                        alt="store"
                        title="store"
                      />
                    </li>
                    <li>
                      <img
                        src={img3}
                        className="img-fluid"
                        alt="store"
                        title="store"
                      />
                    </li>
                    <li>
                      <img
                        src={img4}
                        className="img-fluid"
                        alt="store"
                        title="store"
                      />
                    </li>
                    <li>
                      <img
                        src={img5}
                        className="img-fluid"
                        alt="store"
                        title="store"
                      />
                    </li>
                  </ul>
                </div>
                <div className="product-gallery-featured ">
                  {" "}
                  <img
                    src={img1}
                    className="img-fluid"
                    alt="images"
                    title="images"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add-crd">
        <Link to="/add-to-cart" className="btn btn-card ">
          <i className="fa fa-shopping-cart pe-2" aria-hidden="true"></i>
          ADD TO CARD
        </Link>
        <Link to="#" className="btn btn-card btn-wish">
          <i className="fa fa-shopping-bag pe-2" aria-hidden="true"></i>
          ADD TO WISH LIST
        </Link>
      </div>
    </div>
  );
};

export default ProductBrief;
