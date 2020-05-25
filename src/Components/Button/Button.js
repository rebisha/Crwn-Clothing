// global modules
import React from "react";
import { string, bool } from "prop-types";
// styles
import "./button.scss";

const Button = ({ children, isGoogleSignIn, ...buttonProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: string.isRequired,
  isGoogleSignIn: bool
};

Button.defaultProps = {
  isGoogleSignIn: false
};

export default Button;
