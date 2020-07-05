import React , {createContext , useState , useReducer} from 'react'
import axios from 'axios'
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
export const AuthContext = createContext();
const isEmpty = require("is-empty");

const initialStateError = {};
const errorReducer = (state = initialStateError, action)=> {
  switch (action.type) {
    case "GET_ERRORS":
      return  action.payload;
    default:
      return state;
  }
}






const AuthContextProvider  = (props) => {
    
    const [User , setUser] = useState([
        {
          firstName : null ,
          lastName : null ,
          email : null ,
          password : null ,
          password2 : null ,
          errors : {} ,
          isAuthenticated :false
           }
        
    ]);


    const [error , dispatch ] = useReducer(errorReducer , initialStateError)
    console.log("error" , error)
    
    const registerUser = (userData, history) => {
     axios
       .post("/auth/register", userData)
       .then(res => history.push("/?login=true")) // re-direct to login on successful register
       .catch(err => {
           // const registerErrors = err.response.data;
           //console.log("registerErrors",registerErrors)
            
          //setUser([...User ,Object.assign(count , registerErrors)])
         //console.log("User",count) 
    
         dispatch({type: "GET_ERRORS" , payload :err.response.data})
          //setUser([...User ,Object.assign(count , err.response.data)])
       }
    
       );
    };        

   

    

     const signInUser = (userData ) => {
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

            const {email , password} = userData;
            User[0].email = email
            User[0].password = password
            User[0].isAuthenticated = !isEmpty(decoded)
            User[0].errors = !isEmpty(decoded)
            Object.keys(User[0]).forEach((key) => (User[0][key] == null) && delete User[0][key]);
            //console.log("User[0]" , User[0])
            User[0].isAuthenticated &&  !Object.keys(User[0].errors).length
             ?
             window.location.href = "/dashboard" :
            console.log(false)
        })
          .catch(err =>{
             const signInErrors = err.response.data;
            //  console.log("signInErrors",signInErrors)
           setUser([...User ,Object.assign(User[0].errors , signInErrors)])
          }
           
          );
        
      };

    const logoutUser = ()=>{
        console.log("User is logged out")

    }
    

    return ( 
        <AuthContext.Provider value = {{dispatch , User  , signInUser , logoutUser , registerUser , error }}>
         {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider ;