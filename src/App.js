// global modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { func, object } from "prop-types";
// components
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
// firebase
import { auth, createUserProfileDocument } from "./Firebase/FirebaseUtil";
// redux
import { setCurrentUser } from "./Redux/User/action";
// styles
import "./app.scss";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <LoginPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  setCurrentUser: func,
  currentUser: object
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
