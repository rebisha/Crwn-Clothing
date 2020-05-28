// global modules
import React from "react";
import { string, bool } from "prop-types";
// styles
import "./button.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...buttonProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: string.isRequired,
  isGoogleSignIn: bool,
  inverted: bool
};

export default Button;
