import React, { Component , Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
//import { setCurrentUser, logoutUser } from "./actions/authActions";
//import { Provider } from "react-redux";
//import store from "./store";
 import './App.css';

  import './assets/less/base.css'
  import './assets/less/header.css'
  import './assets/less/theme.css'
  import './assets/icon/style.css'


// import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing";
import BecomeAvendor from './components/BecomeAvendor'
import SignUpPage from './components/auth/SignUpPage';
import ConnectPage from './components/auth/ConnectPage';
import SignInPage from './components/auth/SignInPage'
// import TwitterAuth from './components/auth/TwitterAuth';
import DashboardHook from "./components/auth/DashboardHook";
import Listing1 from "./components/auth/Listing1";

// import FacebookAuth from './components/auth/FacebookAuth'
// import GoogleAuth from './components/auth/GoogleAuth'
// import AmazonAuth from './components/auth/AmazonAuth'
// import SpotifyAuth from './components/auth/SpotifyAuth'
// import InstagramAuth from './components/auth/InstagramAuth'
// import GithubAuth from './components/auth/GithubAuth'
import HomePage from "./components/HomePage";
import DefaultGrid from "./components/features/DefaultGrid";
import DividedContainer from "./components/features/assets/dividedContainer/DividedContainer";
import MagicGrid from "./components/features/assets/magicGrid/MagicGrid";
import UrlParameters from "./components/features/assets/router/UrlParameters";
import ListingPage from "./components/AddListing";
import RegisterFormHooks from "./components/auth/RegisterFormHooks"
import AuthContextProvider from "./contexts/AuthContext";

// Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
// // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
// }

class App extends Component {

  componentDidMount(){
  }

  render() {
    return (

     
      
      <Router>
      <Fragment>

          <Route  exact path="/becomeavendor" component={DashboardHook} /> 
          <Route exact path="/add-listing" component={Listing1} />

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
    
      <Route   path="/connect" component={ConnectPage} />
 
    

      <Route  path="/register" component={RegisterFormHooks} />
      {/* <Route  path="/signin" component={SignInPage} /> */}

      <Route  path="/url-parameters" component={UrlParameters} />

         {/* <Route  path="/twitter-auth" component={TwitterAuth} /> */}

      {/* <Route  path="/facebook-auth" component={FacebookAuth} /> */}
      {/* <Route  path="/google-auth" component={GoogleAuth} /> */}
      {/* <Route  path="/amazon-auth" component={AmazonAuth} />
      <Route  path="/spotify-auth" component={SpotifyAuth} />
      <Route  path="/instagram-auth" component={InstagramAuth} />
      <Route  path="/github-auth" component={GithubAuth} /> */}
      {/* <Route path='/net/:handle' component={Profile} /> */}

      {/* <PrivateRoute  path="/dashboard" component={Dashboard} /> */}
      {/* <PrivateRoute  path="/twitter-authentication" component={TwitterAuthentication} /> */}

      {/* <PrivateRoute  path="/twitter-auth" component={TwitterAuth} /> */}
      {/* <PrivateRoute  path="/facebook-auth" component={FacebookAuth} /> */}
      {/* <PrivateRoute  path="/google-auth" component={GoogleAuth} /> */}
      {/* <PrivateRoute  path="/amazon-auth" component={AmazonAuth} /> */}

    </Switch>
    <Route  path="/" component={SignInPage} />
    {/* <Route  exact path="/dashboardHook" component={DashboardHook} /> */}
    <Route path='/net/:handle' component={HomePage} />
    <Route exact path="/dashboardHook" component={HomePage} />


    {/* <Route  path="/" component={LoginPage} /> */}

  
            </Fragment>
      </Router>
    
    );
  }
}
export default App;