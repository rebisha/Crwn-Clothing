// global modules
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { object, bool } from "prop-types";
// components
import Crown from "../Icons/Crown";
import Cart from "../Cart/Cart";
import CartDropdown from "../CartDropdown/CartDropdown";
import { auth } from "../../Firebase/FirebaseUtil";
// style
import "./header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Crown />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
        <Cart />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

Header.propTypes = {
  currentUser: object,
  hidden: bool
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
