// global modules
import React from "react";
// components
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
// styles
import "./loginPage.scss";

const LoginPage = () => {
  return (
    <div className="login-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default LoginPage;
