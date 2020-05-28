import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/auth/register", userData)
    .then(res => history.push("/?login=true")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/auth/login", userData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//login with twitter
export const loginTwitterUser = () => dispatch => {
console.log("from loginTwitter");
fetch("/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        console.log("responseJson" , responseJson)
        // this.setState({
        //   authenticated: true,
        //   user: responseJson.user
        // });
         // Save to localStorage
// Set token to localStorage
      // const token = responseJson.cookies.session;
      // console.log("token" , token)
      // localStorage.setItem("jwtToken", token);
      const decoded = responseJson.user;
      decoded.isAuthenticated = true
      console.log("decoded" , decoded)
        // Set current user
        dispatch(setCurrentTwitterUser(decoded));
      
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      });

}
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Set logged in twitterUser
export const setCurrentTwitterUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  console.log("user is logged out")
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  window.location.href = "./?login=true";
};

//log twitter user out
export const twitterLogoutUser = () => dispatch =>{
  console.log("twitter user is logged out")
  window.open("http://localhost:5000/auth/logout", "_self");
}

//log facebook user out
export const facebookLogoutUser = () => dispatch =>{
  console.log("facebook user is logged out")
  window.open("http://localhost:5000/auth/logout", "_self");
}

//log google user out
export const googleLogoutUser = () => dispatch =>{
  console.log("google user is logged out")
  window.open("http://localhost:5000/auth/logout", "_self");
}
//log amazon user out
export const amazonLogoutUser = () => dispatch =>{
  console.log("amazon user is logged out")
  window.open("http://localhost:5000/auth/logout", "_self");
}