import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage";

import "./app.scss";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
