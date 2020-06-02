// global modules
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { number, array } from "prop-types";
// component
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
// redux
import { selectCartItems, selectCartTotal } from "../../Redux/Cart/selectors";
// styles
import "./checkout.scss";

const Checkout = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

Checkout.propTypes = {
  cartTotal: number,
  cartItems: array
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps, null)(Checkout);
