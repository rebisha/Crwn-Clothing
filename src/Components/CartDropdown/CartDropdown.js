// global modules
import React from "react";
// components
import Button from "../Button/Button";
// styles
import "./cartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Button> Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
