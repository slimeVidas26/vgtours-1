import React , {createContext , useState} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
export const AuthContext = createContext();
const isEmpty = require("is-empty");

const GOOGLE = "google-auth"
const TWITTER = "twitter-auth"
const FACEBOOK = "facebook-auth"
const SPOTIFY = "spotify-auth"
const INSTAGRAM = "instagram-auth"
const GITHUB = "github-auth"
const AMAZON = "amazon-auth"



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


    const [socialUser , setSocialUser] = useState([
      {
         //isAuthenticated : false,
         //errors : {}
        
      }]);

  // const setCurrentUser = (decoded)=>{
  //   return {
  //     socialUser[0].isAuthenticated = !isEmpty(decoded),
  //     isAuthenticated: !isEmpty(decoded),
  //     user: decoded
  //   };
  // }

    

    const registerUser = (userData, history) => {
        axios
          .post("/auth/register", userData)
          .then(res => history.push("/?login=true")) // re-direct to login on successful register
          .catch(err => {
              const registerErrors = err.response.data;
              //console.log("registerErrors",registerErrors)
               
             setUser([...User ,Object.assign(User[0].errors , registerErrors)])
            //console.log("User",User[0].errors) 
          }
     
          );
      };

    

    

    const logoutUser = ()=>{
        console.log("User is logged out")

    }

    const formatUser = (obj)=>{
    console.log("obj from formatUser" , obj)
      const userEntries = Object.entries(obj);
      console.log("userEntries" , userEntries)
     const result = userEntries
    //  .filter((item , i , arr)=>{
    //    return arr[i][0] !== "__v" && arr[i][0] !== "isAuthenticated"
    //  })
     .map(([ key, value ])=>{
        switch (key) {
          case "thumbnail":
            return <div><img src={value} alt=""/></div>
           
           case "name":
             return <b>Hey there, {value} <br/></b>
             case "date":
             return <b> Date is, {value} <br/></b>
             case "screenName":
             return <b>Hey there, {value} <br/></b>
             case "_id":
               return <b> your  ID is : {value}<br/> </b>
               default:
           return <b> your  {key} is : {value}<br/> </b>
        }
     })

     return result;

    }

    const getProfileSocialUser = (user) =>{
      const {handle} = props.match.params
      console.log("handle",{handle})
      setSocialUser(user);
      console.log("user from getprofile" , user)
      switch (handle) {
        
        case GOOGLE:
          case AMAZON:
            case TWITTER:
              case FACEBOOK:
                case SPOTIFY:
                  case INSTAGRAM:
                    case GITHUB:
          return (
            formatUser(user) 
            
            

         );
        default:
          return "toto";
      }
    }

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
           window.location.href = "/profile" :
          console.log(false)
      })
        .catch(err =>{
           const signInErrors = err.response.data;
          //  console.log("signInErrors",signInErrors)
         setUser([...User ,Object.assign(User[0].errors , signInErrors)])
        });
      
    };

    const socialLoginUser = ()=>{
      //console.log("social user is logged , isAuthenticTED = TRUE")
        axios.get("/auth/login/success", {
         method: "GET",
         credentials: "include",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
           "Access-Control-Allow-Credentials": true
         }
       })
         .then(response => {
           console.log("response" , response)
           if (response.status === 200) return response;
           console.log("response.json" , response.json())
           throw new Error("failed to authenticate user");
         })
         .then(responseJson => {
          //  console.log("responseJson from  social login" , responseJson)
           console.log("responseJson.data.user",responseJson.data.user)
          //  console.log(typeof(responseJson.data.user) )
           //setSocialUser([...socialUser ,Object.assign(socialUser[0].toto , responseJson.data.user)])
           socialUser[0]._id = responseJson.data.user._id
           socialUser[0].twitterId = responseJson.data.user.twitterId
           socialUser[0].name = responseJson.data.user.name
           socialUser[0].screenName = responseJson.data.user.screenName
           socialUser[0].thumbnail = responseJson.data.user.thumbnail
           socialUser[0].date = responseJson.data.user.date
           socialUser[0].isAuthenticated = true
           //socialUser[0].errors = {}

           //setSocialUser([...socialUser[0] ,...responseJson.data.user ])
           //setSocialUser([...socialUser[0] ,Object.assign(responseJson.data.user,socialUser[0].toto  )])
          //socialUser[0]  = responseJson.data.user 
          console.log("socialUser[0]a" ,socialUser[0]  )
          //console.log("socialUser[0]b" ,socialUser[0]  )

           //setSocialUser([...socialUser ,Object.assign(User[0].errors , "tototototto")])

           console.log("socialUser in login" , socialUser)

         getProfileSocialUser(socialUser)
         //  const decoded = responseJson.user;
            
          //  console.log("decoded from social" , decoded)
          //  socialUser[0].errors = !isEmpty(decoded)
           socialUser[0].isAuthenticated &&  !Object.keys(socialUser[0].errors).length
           ?
           window.location.href = "/profile" :
          console.log(false)
           // Set current user
           //dispatch(setCurrentUser(decoded));
         
         })
         .catch(err =>{
          //const signInErrors = err.response.data;
         //  console.log("signInErrors",signInErrors)
        //setSocialUser([...socialUser ,Object.assign(socialUser[0].errors , signInErrors)])
        console.log(err)
       });
     
    }

     const socialLogoutUser = (history) =>{
      //dispatch(setCurrentUser({}));
      window.open("http://localhost:5000/auth/logout", "_self");
      history.push("./");
    }
    

    return ( 
        <AuthContext.Provider value = {{User ,socialUser ,  registerUser , signInUser , logoutUser , socialLoginUser , getProfileSocialUser , formatUser , socialLogoutUser }}>
         {props.children}
        </AuthContext.Provider>
     );
}
 
export default withRouter(AuthContextProvider) ;