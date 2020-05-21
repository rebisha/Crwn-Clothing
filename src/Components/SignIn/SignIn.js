// global modules
import React, { Component } from "react";
// components
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { signInWithGoogle } from "../../Firebase/FirebaseUtil";
// styles
import "./signIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            value={email}
            type="email"
            handleChange={this.handleChange}
          />
          <FormInput
            label="Password"
            name="password"
            value={password}
            type="password"
            handleChange={this.handleChange}
          />

          <div className="button-wrapper">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
