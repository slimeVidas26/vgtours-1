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
    default:
      return state;
  }
}

//AUTH REDUCER
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false 
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
              console.log("res.data" , res)
            // Save to localStorage
      // Set token to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
             const decoded = jwt_decode(token);
             console.log("decoded from token" , decoded)
        
             dispatchUser({
              type : "SET_CURRENT_USER" ,
              payload : decoded 
            })
            console.log("decoded from token2" , decoded)

               window.location.href = `/dashboardHook/${token}` ;
          })
          
         
        .catch(err => {
        dispatchError({type: "GET_ERRORS" , payload :err.response.data})
      });
        };


     


   const socialLoginUser = () =>{
     console.log("from social login user")
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
             console.log("responseJson from socialLoginUser" , responseJson)
           
             const decoded = responseJson.user;
            
             console.log("decoded from socialLoginUser" , decoded)
             dispatchUser({
              type : "SET_CURRENT_USER" ,
              payload : decoded 
            })
            .then(User=>{
              console.log("User..." , User)
              const {handle} = props.match.params
            console.log("handle",{handle})
            // const { user } = this.props.auth;
            // console.log("user" , user)
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
              // default:
              //   return "toto";
            }
           
           })
            }

            )
            
           .catch(err => {
            //dispatchError({type: "GET_ERRORS" , payload :err.response.data})
          });
       }

     


  // const  getProfileNetworkUser = () =>{
  //       const {handle} = props.match.params
  //       console.log("handle",{handle})
  //       // const { user } = this.props.auth;
  //       // console.log("user" , user)
  //       switch (handle) {
          
  //         case GOOGLE:
  //           case AMAZON:
  //             case TWITTER:
  //               case FACEBOOK:
  //                 case SPOTIFY:
  //                   case INSTAGRAM:
  //                     case GITHUB:
  //           return (
  //             formatUser(User) 
  //          );
  //         default:
  //           return "toto";
  //       }
  //     }

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
        <AuthContext.Provider value = {{dispatchUser  ,socialLoginUser ,socialLogoutUser ,  dispatchError ,  User  , signInUser , logoutUser , registerUser , error }}>
         {props.children}
        </AuthContext.Provider>
     );
}
 
export default withRouter(AuthContextProvider) ;