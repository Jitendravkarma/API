import React, { memo } from "react";
import { Link } from "react-router-dom";

const Card = ({image, title, description, price, originalPrice, discount, sizes}) => {
  return (
    <div className="card card-bx mb-4">
      <Link to="/detail-page">
        <img
          src={image}
          className="card-img-top img-fluid"
          alt="images"
          title="images"
        />
      </Link>
      {(title === "Elepants" || title === "Jangoboy") && (
        <div className="ribbon">
          <span
            className={`${title === "Jangoboy" && "ribbon-sale"}`}
          >
            {title === "Jangoboy" ? "Sale" : "New"}
          </span>
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title text-secondary">{title}</h3>
        <p className="card-text">
          <Link to="/detail-page">{description}</Link>
        </p>
        <ul className="list-sec list-unstyled">
          <li>
            <Link to="#" title="like">
              <i className="fa fa-heart" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/detail-page" title="view">
              <i className="fa fa-eye" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="#" title="share">
              <i className="fa fa-share-alt" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
        <ul className="list-sec list-unstyled">
          <li>
            <span>
              <i className="fa fa-usd"></i>&nbsp;{price}
            </span>
          </li>
          <li>
            <span className="currency">
              <i className="fa fa-usd currency"></i>&nbsp;
              {originalPrice}
            </span>
          </li>
          <li>
            <span className="text-success">{discount}% off</span>
          </li>
        </ul>
        <div className="my-2 card-text d-flex align-items-center justify-content-between" style={{fontSize:'15px'}}>
          <div className="d-flex gap-2">
            <span>Size</span>
            <select className="d-flex list-unstyled" style={{fontSize:'13px'}}>
              {
                sizes.map((size, id)=>(
                  <option className="fa-border px-2 mx-1" key={id}>{size}</option>
                ))
              }
            </select>
          </div>
          <div className="rating" title="user ratings">
            4.5⭐⭐⭐⭐
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
