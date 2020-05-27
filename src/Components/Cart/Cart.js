// global modules
import React from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
// components
import CartIcon from "../Icons/CartIcon";
import { toggleCartHidden } from "../../Redux/Cart/action";
// styles
import "./cart.scss";

const Cart = ({ toggleCartHidden }) => {
  return (
    <div className="cart-wrapper" onClick={toggleCartHidden}>
      <CartIcon />
      <span className="item-count"> 0 </span>
    </div>
  );
};

Cart.propTypes = {
  toggleCartHidden: func
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(Cart);
