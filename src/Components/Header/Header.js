// global modules
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { object, bool } from "prop-types";
import { createStructuredSelector } from "reselect";
// components
import Crown from "../Icons/Crown";
import Cart from "../Cart/Cart";
import CartDropdown from "../CartDropdown/CartDropdown";
// firebase
import { auth } from "../../Firebase/FirebaseUtil";
// redux
import { selectCurrentUser } from "../../Redux/User/selectors";
import { selectCartHidden } from "../../Redux/Cart/selectors";
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
        <Link className="option" to="/contact">
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
