// global modules
import React from "react";
import { string } from "prop-types";
// styles
import "./button.scss";

const Button = ({ children, ...buttonProps }) => {
  return (
    <button className="custom-button" {...buttonProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: string.isRequired
};

export default Button;
