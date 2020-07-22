import  {useContext} from 'react';
import axios from 'axios'
import setAuthToken from "../../../utils/setAuthToken";
import { AuthContext } from '../../../contexts/AuthContext';



export  const signInUser = (userData ) => {
    axios.post("/auth/login", userData)
          .then(res => {
            // Save to localStorage
      // Set token to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            window.location.href = "./";
          })
        .catch(err => {
        const {  dispatchError } = useContext(AuthContext);
        dispatchError({type: "GET_ERRORS" ,payload :err.response.data})
      })
        };


export   const registerUser = (userData, history) => {
    axios
      .post("/auth/register", userData)
      .then(res => history.push("/?signin=true")) // re-direct to login on successful register
      .catch(err => {
        const {  dispatchError } = useContext(AuthContext);
        dispatchError({type: "GET_ERRORS" , payload :err.response.data})
      }
   
      );
   };

   
   
   