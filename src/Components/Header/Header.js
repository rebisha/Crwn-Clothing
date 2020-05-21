// global modules
import React from "react";
import { Link } from "react-router-dom";
import { object } from "prop-types";
// components
import Crown from "../Icons/Crown";
import { defaultAuth } from "../../Firebase/FirebaseUtil";
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
          <div className="option" onClick={() => defaultAuth.signOut()}>
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

export default Header;
