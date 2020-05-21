// global modules
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { defaultAuth } from "./Firebase/FirebaseUtil";
// styles
import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = defaultAuth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log("@@user", user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="container">
        <Header currentUser={this.state.currentUser} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
