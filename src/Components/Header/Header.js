// global modules
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { object } from "prop-types";
// components
import Crown from "../Icons/Crown";
import { auth } from "../../Firebase/FirebaseUtil";
// style
import "./header.scss";

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

Header.propTypes = {
  currentUser: object
};

Header.defaultProps = {
  currentUser: {}
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
