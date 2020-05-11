// global modules
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
// styles
import "./app.scss";

function App() {
  return (
    <div className="container">
      <Header />
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
export default App;
