// global modules
import React from "react";
import { string, boolean } from "prop-types";
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
  isGoogleSignIn: boolean
};

Button.defaultProps = {
  isGoogleSignIn: false
};

export default Button;
