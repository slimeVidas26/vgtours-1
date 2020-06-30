import React, { Component } from 'react'
import { withRouter} from "react-router-dom";
import UserInfo from './UserInfo'
import AuthContextProvider from '../../contexts/AuthContext';




export class Profile extends Component {
 
  
    render() {

          return (
            <AuthContextProvider>
            <UserInfo/>
            </AuthContextProvider>
          
          );
    }
}


  
  export default (withRouter(Profile));
