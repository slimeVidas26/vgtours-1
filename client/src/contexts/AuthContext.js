import React , {createContext , useState , useEffect} from 'react'
import axios from 'axios'
export const AuthContext = createContext();

const AuthContextProvider  = (props) => {
    
    const [User , setUser] = useState([
        {firstName : null ,
         lastName : null ,
          email : null ,
          password : null ,
          password2 : null ,
           errors : {} }
        
    ]);

    

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

    const loginUser = ()=>{
        console.log("User is logged")

    }

    const logoutUser = ()=>{
        console.log("User is logged out")

    }
    

    return ( 
        <AuthContext.Provider value = {{User , registerUser , loginUser , logoutUser}}>
         {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider ;