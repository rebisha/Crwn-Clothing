// global modules
import React from "react";
import { connect } from "react-redux";
import { array, object, func } from "prop-types";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
// components
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
// redux
import { selectCartItems } from "../../Redux/Cart/selectors";
import { toggleCartHidden } from "../../Redux/Cart/action";
// styles
import "./cartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </Button>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: array,
  history: object,
  dispatch: func
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
