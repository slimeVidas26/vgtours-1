import React , {createContext , useReducer} from 'react'
import axios from 'axios'
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {withRouter} from 'react-router-dom'

export const AuthContext = createContext();
const isEmpty = require("is-empty");

const GOOGLE = "google-auth"
const TWITTER = "twitter-auth"
const FACEBOOK = "facebook-auth"
const SPOTIFY = "spotify-auth"
const INSTAGRAM = "instagram-auth"
const GITHUB = "github-auth"
const AMAZON = "amazon-auth"

const initialStateError = {};
//EROR REDUCER
const errorReducer = (state = initialStateError, action)=> {
  switch (action.type) {
    case "GET_ERRORS":
      return  action.payload;
      case "GET_NETWORK_ERRORS":
        return  "Unable to connect";
    default:
      return state;
  }
}

//AUTH REDUCER
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false ,
  url : ''
};
const authReducer = (state = initialState, action) =>{
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
     
    case "USER_LOADING":
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

const AuthContextProvider  = (props) => {
    
    const [User , dispatchUser] = useReducer(authReducer , initialState);
    const [error , dispatchError ] = useReducer(errorReducer , initialStateError)
    const [networkError , dispatchNetworkError ] = useReducer(errorReducer , initialStateError)

    const registerUser = (userData, history) => {
     axios
       .post("/auth/register", userData)
       .then(res => history.push("/?signin=true")) // re-direct to login on successful register
       .catch(err => {
         dispatchError({type: "GET_ERRORS" , payload :err.response.data})
       }
    
       );
    };        

  
     const signInUser = (userData  ) => {
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
        
             dispatchUser({
              type : "SET_CURRENT_USER" ,
              payload : decoded 
            })
               window.location.href = `/dashboardHook/${token}` ;
          })
        .catch(err => {
        dispatchError({type: "GET_ERRORS" , payload :err.response.data})
      });
        };


   const socialLoginUser = () =>{
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
             const decoded = responseJson.user;
             dispatchUser({
              type : "SET_CURRENT_USER" ,
              payload : decoded 
            })
            .then(User=>{
              const {handle} = props.match.params
            switch (handle) {
              
              case GOOGLE:
                case AMAZON:
                  case TWITTER:
                    case FACEBOOK:
                      case SPOTIFY:
                        case INSTAGRAM:
                          case GITHUB:
                return (
                  
                  User

                  );
               default:
                 return "toto";
            }})})
           .catch(err => {
            dispatchNetworkError({type: "GET_NETWORK_ERRORS"})
          });
       }

    
   const socialLogoutUser = () =>{
    dispatchUser({
      type : "SET_CURRENT_USER" ,
      payload : {} 
    })
    window.open("http://localhost:5000/auth/logout", "_self");
    props.history.push("./");
  }

     const logoutUser = () => {
      console.log("user is logged out")
      // Remove token from local storage
      localStorage.removeItem("jwtToken");
      // Remove auth header for future requests
      setAuthToken(false);
      // Set current user to empty object {} which will set isAuthenticated to false
      // dispatch(setCurrentUser({}));
      dispatchUser({
        type : "SET_CURRENT_USER" ,
        payload : {} 
      })
      window.location.href = "./?login=true";
    };
    

    return ( 
        <AuthContext.Provider value = {{dispatchUser  ,socialLoginUser ,socialLogoutUser ,  dispatchError ,dispatchNetworkError ,   User  , signInUser , logoutUser , registerUser , error , networkError }}>
         {props.children}
        </AuthContext.Provider>
     );
}
 
export default withRouter(AuthContextProvider) ;