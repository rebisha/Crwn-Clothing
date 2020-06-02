// global modules
import React from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";
// redux
import { clearCartItem, addItem, removeItem } from "../../Redux/Cart/action";
// styles
import "./checkoutItem.scss";

const CheckoutItem = ({ cartItem, removeItem, addItem, clearCartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: object,
  removeItem: func,
  addItem: func,
  clearCartItem: func
};

const mapDispatchToProps = dispatch => ({
  clearCartItem: item => dispatch(clearCartItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
