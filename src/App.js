import React, { Component, Fragment } from "react";
import Signup from "./components/SliderComponents/AuthComponenet/Signup";
import SpotifyNavbar from "./HeaderComponents/SpotifyNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/HomeComponents/Home";
import SignIn from "./components/SliderComponents/AuthComponenet/Signin";
import PageNotFound from "./components/PageNotFoun/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "./firebase";
import PasswordReset from "./components/SliderComponents/AuthComponenet/PasswordReset";
import PhoneAuth from "./components/SliderComponents/AuthComponenet/PhoneAuth";
class App extends Component {
  state = {
    userInfo: "",
  };

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ userInfo: user });
      } else {
        this.setState({ userInfo: "" });
      }
    });
  }

  render() {
    console.log(this.state.userInfo);
    return (
      <Fragment>
        <Router>
          <header>
            <SpotifyNavbar user={this.state.userInfo} />
          </header>
          <ToastContainer />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/PasswordRest" exact component={PasswordReset} />
            <Route path="/PhoneAuth" exact component={PhoneAuth} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
