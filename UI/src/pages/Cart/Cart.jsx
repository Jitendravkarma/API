import React from "react";
import ToTop from '../../components/ToTop';
import AddToCart from "../../components/AddToCart/AddToCart";
import PriceDetail from "../../components/AddToCart/PriceDetail";

const Cart = () => {
  return (
    <>
      <ToTop/>
      <div className="container">
        <div className="row">
          <AddToCart/>
          <PriceDetail/>
        </div>
      </div>
    </>
  );
};

export default Cart;
