// global modules
import React from "react";
import { string, func } from "prop-types";
// styles
import "./formInput.scss";

const FormInput = ({ handleChange, label, ...inputProps }) => {
  return (
    <div className="input-wrapper">
      <input className="form-input" onChange={handleChange} {...inputProps} />

      {label ? (
        <label
          className={`${
            inputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

FormInput.propTypes = {
  label: string.isRequired,
  handleChange: func
};

FormInput.defaultProps = {
  handleChange: {}
};

export default FormInput;
