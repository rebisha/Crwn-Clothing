// global modules
import React from "react";
import { Link } from "react-router-dom";
// components
import Crown from "../Icons/Crown";
// style
import "./header.scss";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
