import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({id, image, title, price, description, sizePrice, setPrice}) => {
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
      {(id === 1 || id === 5) && (
        <div className="ribbon">
          <span
            className={`${id === 5 && "ribbon-sale"}`}
          >
            {id === 5 ? "Sale" : "New"}
          </span>
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title text-secondary">{title}</h3>
        <p className="card-text">
          <Link to="/detail-page" title={description}>{description}</Link>
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
              <i className="fa fa-usd"></i>&nbsp;
              {
                sizePrice.map((data)=>{
                  let price;
                  if(data.size === 'L'){
                    price = data.price;
                  }
                  return price;
                })
              }
            </span>
          </li>
          <li>
            <span className="currency">
              <i className="fa fa-usd currency"></i>&nbsp;
              {sizePrice[0].originalPrice}
            </span>
          </li>
          <li>
            <span className="text-success">{sizePrice[0].discount}% off</span>
          </li>
        </ul>
        <div className="my-2 card-text d-flex align-items-center justify-content-between" style={{fontSize:'15px'}}>
          <div className="d-flex gap-2">
            <span>Size</span>
            <select className="d-flex list-unstyled" style={{fontSize:'13px'}} onChange={()=>setPrice(event.target.value, id)}>
              {
                sizePrice.map((size, ind)=>(
                  <option className="fa-border px-2 mx-1" key={ind} value={size.size}>{size.size}</option>
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
