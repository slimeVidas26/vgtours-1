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
  loading: false 
};
const authReducer = (state = initialState, action) =>{
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log("action payload set current" , action.payload);
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

    // useEffect(()=>{
    //   console.log(User)
    // } , [User])
    
    const registerUser = (userData, history) => {
     axios
       .post("/auth/register", userData)
       .then(res => history.push("/?signin=true")) // re-direct to login on successful register
       .catch(err => {
         dispatchError({type: "GET_ERRORS" , payload :err.response.data})
       }
    
       );
    };        

  
     const signInUser = (userData , ) => {
       
        axios
          .post("/auth/login", userData)
           // {email: "test28@gmail.com",
            // password: "123456"}
          .then(res => {
            console.log("res" , res)
           

            // Save to localStorage
      // Set token to localStorage
            const { token } = res.data;
            console.log("token" ,{ token})
            // {token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZC…AxMX0.l5xUU23I5UiFuU2RnhCf4vE1Q7GldKzlxGNfiJOLOUU"}
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
             const decoded = jwt_decode(token);
             console.log("decoded in signinuser before dispatch" , decoded)
            //  {id: "5ef220cf6e721445282a3da9",
            //   name: "test28",
            //    iat: 1594747722,
            //     exp: 1626304648} 
             
            console.log("decoded.name" , decoded.name)

             //decoded.isAuthenticated = true
             dispatchUser({
              type : "SET_CURRENT_USER" ,
              payload :  decoded 
            }) 

    console.log("User after dispatch" , User)


            props.history.push(`/dashboardHook/${token}`) ;

          })
          
        .catch(err => {
        dispatchError({type: "GET_ERRORS" ,payload :err.response.data})
      })
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
           
              console.log("decoded from authContext" , User)
              const {handle} = props.match.params
              console.log("handle" , handle)
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
            }})
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
      window.location.href = "./?signin=true";
    };

    

    return ( 
        <AuthContext.Provider value = {{logoutUser , dispatchUser  ,socialLoginUser ,socialLogoutUser ,  dispatchError ,dispatchNetworkError ,   User  , signInUser ,  registerUser , error , networkError }}>
         {/* {console.log("User in return before child" , User)} */}
         {props.children}
         {/* {console.log("User in return after child" , User)} */}

        </AuthContext.Provider>
     );

}
 
export default withRouter(AuthContextProvider) ;