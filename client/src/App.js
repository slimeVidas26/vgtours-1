import React, { Component , Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
// import './App.css';
import './assets/less/base.css'
import './assets/less/header.css'
import './assets/less/theme.css'
import './assets/icon/style.css'

// import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing";
import BecomeAvendor from './components/BecomeAvendor'
 import LoginPage from "./components/auth/LoginPage";
import SignUpPage from './components/auth/SignUpPage';
import TwitterAuth from './components/TwitterAuth'
import TwitterHomePage from "./components/TwitterHomePage";
import FacebookAuth from './components/FacebookAuth'
import GoogleAuth from './components/GoogleAuth'
import AmazonAuth from './components/AmazonAuth'



import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import HomePage from "./components/HomePage";
import DefaultGrid from "./components/features/DefaultGrid";
import DividedContainer from "./components/features/assets/dividedContainer/DividedContainer";
import MagicGrid from "./components/features/assets/magicGrid/MagicGrid";
import UrlParameters from "./components/features/assets/router/UrlParameters";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}



class App extends Component {

  


  render() {
    return (
       <Provider store={store}>
      <Router>
      <Fragment>
        
         
          <Route exact path="/becomeavendor" component={BecomeAvendor} /> 
          <Route exact path="/features/fts_default_grid.html" component={DefaultGrid}/>
          <Route exact path="/features/fts_divided_container.html" component={DividedContainer} />
          <Route exact path="/features/fts_magic_grid.html" component={MagicGrid} />

    <Switch>
      <Route exact path="/" component={HomePage} />

      {/*1. CLICK ON THE "SignUp" BUTTON ON THE HEADER MENU
      WILL REDIRECT TO THE SIGNUP PAGE FOR REGISTER OR SOCIAL CONNECT
      AND 
      2. THEN CLICK ON "SIGN UP WITH MAIL" */}
      <Route  path="/signup" component={SignUpPage} />
      <Route  path="/url-parameters" component={UrlParameters} />
       <Route  path="/twitter-auth" component={TwitterAuth} /> 
       <Route exact path="/twitter-home-page" component={TwitterHomePage} />
      <Route  path="/facebook-auth" component={FacebookAuth} />
      <Route  path="/google-auth" component={GoogleAuth} />
      <Route  path="/amazon-auth" component={AmazonAuth} />



      <PrivateRoute  path="/dashboard" component={Dashboard} />
      <PrivateRoute  path="/twitter-auth" component={TwitterAuth} />
      <PrivateRoute  path="/facebook-auth" component={FacebookAuth} />
      <PrivateRoute  path="/google-auth" component={GoogleAuth} />
      <PrivateRoute  path="/amazon-auth" component={AmazonAuth} />

    </Switch>

    <Route exact path="/" component={LoginPage} />
  
            </Fragment>
      </Router>
      </Provider>
    );
  }
}
export default App;