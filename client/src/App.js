import React, { Component , Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
// import './App.css';

// import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing";
import BecomeAvendor from './components/BecomeAvendor'
import Register from "./components/auth/Register";
 import Login from "./components/auth/Login";
// import Login2 from "./components/auth/Login2";
import ProfilePage from "./components/auth//profile";
import SignUpPage from './components/auth/SignUpPage'


import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
// import ModalExample from "./components/semantic-ui-tests/ModalExample";
//import Footer from "./components/layout/Footer";
import HomePage from "./components/HomePage";
import DefaultGrid from "./components/features/DefaultGrid";
import DividedContainer from "./components/features/assets/dividedContainer/DividedContainer";
import MagicGrid from "./components/features/assets/magicGrid/MagicGrid";
import SignUpWithMail from "./components/auth/SignUpWithMail";


// import ButtonExampleEmphasisShorthand from "./components/ButtonExampleEmphasisShorthand";
//  import ThemingLayout from "./components/ThemingLayout";
// import Home from './components/Home'
// import HeaderMenu from './components/layout/HeaderMenu'






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

  

//   componentWillMount() {
//     console.log('componentWillMount is called');
//     const script = document.createElement('script');
//     script.src = 'assets/library/jquery-2.2.0.min.js';
//     document.body.appendChild(script);
// }
  render() {
    return (
       <Provider store={store}>
      <Router>
      <Fragment>
        
          {/* <Navbar /> */}
          {/* <ModalExample/> */}
          {/* <Route exact path="/" component={Landing} /> */}
          {/* <Route exact path="/" component={HomePage} /> */}
           {/* <Route exact path="/" component={ButtonExampleEmphasisShorthand} /> */}
            {/* <Route exact path="/" component={ThemingLayout} />  */}
             {/* <Route exact path="/" component={Home} /> */}


          <Route exact path="/becomeavendor" component={BecomeAvendor} /> 
          {/* <Route exact path="/register" component={Register} /> */}
          <Route exact path="/register" component={SignUpWithMail} />

          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/login" component={Login2} /> */}



          <Route exact path="/features/fts_default_grid.html" component={DefaultGrid}/>
          <Route exact path="/features/fts_divided_container.html" component={DividedContainer} />
          <Route exact path="/features/fts_magic_grid.html" component={MagicGrid} />




         

    <Switch>
      <Route exact path="/" component={HomePage} />
     
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>

    <Route exact path="/login" component={Login} />
    <Route path="/" component={SignUpPage} />
            {/* <Footer/> */}
            </Fragment>
        
      
      </Router>
      </Provider>
    );
  }
}
export default App;