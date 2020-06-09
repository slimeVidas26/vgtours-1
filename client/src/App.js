import React, { Component , Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Script from 'react-load-script'
// import { $ } from "jquery";
// import './App.css';
import './assets/less/base.css'
import './assets/less/header.css'
import './assets/less/theme.css'
import './assets/icon/style.css'

//javascript
import {
   //modernizrCustomFunc,
  //jqueryFunc,
  //flexmenuFunc,
  //nouisliderFunc,
  //wNumbFunc,
  //jrespondFunc,
  //scrollspyFunc,
  //visibilityFunc,
   //accordionFunc,
  //stickyFunc,
  //pageTransitionFunc ,
  //checkboxFunc ,
  //transitionFunc ,
  //sidebarFunc ,
  //modalFunc ,
  //dimmerFunc ,
  //popupFunc ,
  //calendarFunc ,
  //slickFunc ,
  //jqueryFancyboxFunc ,
  //highlightPackFunc ,
  //hljsFunc,
  //clipboardFunc ,
  //headerFunc ,
  //functionsFunc ,
//dividedContainerFunc,
//magicGridFunc
 } from './scriptsJS'



// import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing";
import BecomeAvendor from './components/BecomeAvendor'
 import LoginPage from "./components/auth/LoginPage";
import SignUpPage from './components/auth/SignUpPage';
// import TwitterAuth from './components/auth/TwitterAuth';

// import FacebookAuth from './components/auth/FacebookAuth'
// import GoogleAuth from './components/auth/GoogleAuth'
// import AmazonAuth from './components/auth/AmazonAuth'
// import SpotifyAuth from './components/auth/SpotifyAuth'
// import InstagramAuth from './components/auth/InstagramAuth'
// import GithubAuth from './components/auth/GithubAuth'
import Profile from './components/auth/Profile'



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

  // getJsScripts = (scripts , callback)=>{

  // }

  

  componentDidMount(){
    //modernizrCustomFunc()
    //jqueryFunc()
    //flexmenuFunc()
    //nouisliderFunc()
    //wNumbFunc()
    //jrespondFunc()
    //scrollspyFunc()
    //visibilityFunc()
    //accordionFunc()
    //stickyFunc()
    //pageTransitionFunc()
    //checkboxFunc()
    //transitionFunc()
    //sidebarFunc()
    //modalFunc()
    //dimmerFunc()
    //popupFunc()
    //calendarFunc()
    //slickFunc()
    //jqueryFancyboxFunc()
    //highlightPackFunc()
    //hljsFunc()
    //clipboardFunc()
    //headerFunc()
    //functionsFunc()
     //dividedContainerFunc()
     //magicGridFunc()

  }

  

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }
   
  handleScriptError() {
    this.setState({ scriptError: true })
  }
   
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }


  render() {
    return (

     
       <Provider store={store}>
      <Router>
      <Fragment>
      <Script
      url="./assets/library/modernizr-custom.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/jquery-2.2.0.min.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/flexmenu.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/nouislider.min.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/wNumb.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/jrespond.min.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/scrollspy.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/visibility.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/accordion.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/dropdown-custom.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/sticky.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/page-transition.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/checkbox.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/transition.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/sidebar.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/sidebar.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/modal.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/dimmer.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/popup.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/calendar.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/slick.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/jquery.fancybox.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/highlight.pack.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />

    <Script
      url="./assets/library/initHighlightingOnLoad.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      
      <Script
      url="./assets/library/clipboard.min.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <Script
      url="./assets/library/header.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
       
      <Script
      url="./assets/library/functions.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />

    <Script
      url="./assets/library/dividedContainer.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
    <Script
      url="./assets/library/magicGrid.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
   
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
         {/* <Route  path="/twitter-auth" component={TwitterAuth} /> */}

      {/* <Route  path="/facebook-auth" component={FacebookAuth} /> */}
      {/* <Route  path="/google-auth" component={GoogleAuth} /> */}
      {/* <Route  path="/amazon-auth" component={AmazonAuth} />
      <Route  path="/spotify-auth" component={SpotifyAuth} />
      <Route  path="/instagram-auth" component={InstagramAuth} />
      <Route  path="/github-auth" component={GithubAuth} /> */}
      <Route path='/:handle' component={Profile} />
      <PrivateRoute  path="/dashboard" component={Dashboard} />
      {/* <PrivateRoute  path="/twitter-authentication" component={TwitterAuthentication} /> */}

      {/* <PrivateRoute  path="/twitter-auth" component={TwitterAuth} /> */}
      {/* <PrivateRoute  path="/facebook-auth" component={FacebookAuth} /> */}
      {/* <PrivateRoute  path="/google-auth" component={GoogleAuth} /> */}
      {/* <PrivateRoute  path="/amazon-auth" component={AmazonAuth} /> */}

    </Switch>

    <Route exact path="/" component={LoginPage} />
  
            </Fragment>
      </Router>
      </Provider>
    );
  }
}
export default App;