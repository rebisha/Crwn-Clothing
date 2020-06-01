// global modules
import React from "react";
import { connect } from "react-redux";
import { func, number } from "prop-types";
// components
import CartIcon from "../Icons/CartIcon";
// redux
import { selectCartItemsCount } from "../../Redux/Cart/selectors";
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
  itemCount: number
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
