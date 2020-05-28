// global modules
import React from "react";
import { connect } from "react-redux";
import { array } from "prop-types";
// components
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
// styles
import "./cartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button> Go to checkout</Button>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: array
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
