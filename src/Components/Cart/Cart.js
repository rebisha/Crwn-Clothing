// global modules
import React from "react";
import { connect } from "react-redux";
import { func, object } from "prop-types";
// components
import CartIcon from "../Icons/CartIcon";
import { toggleCartHidden } from "../../Redux/Cart/action";
// styles
import "./cart.scss";

const Cart = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-wrapper" onClick={toggleCartHidden}>
      <CartIcon />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

Cart.propTypes = {
  toggleCartHidden: func,
  itemCount: object
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
