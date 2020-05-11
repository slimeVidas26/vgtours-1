import React, { Component } from 'react'
import Modal from './Modal'
import { Link , Route  , useLocation} from "react-router-dom";

import FormTitle from '../layout/FormTitle'
import FormActions from '../layout/FormActions'
import SignUpWith from '../layout/SignUpWith'
import RegisterForm from './RegisterForm'



//import images
import icon_google_plus from '../../assets/images/icon-google-plus.svg';


 class SignUpPage extends Component {

    constructor(props) {
        super(props);
    
        // console.log(this.props.history + ' from signUpWithMail')
    
        
      }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open("http://localhost:5000/auth/twitter", "_self");
  };

    render(){
        let params = new URLSearchParams(this.props.location.search);

        console.log(this.props.match.url)
        //let params = new URLSearchParams(this.props.location.search);
        return (
            //  params.get("signup") && (
             <Modal
             onClick={() => {
            {/* this.props.history.push(this.props.location.pathname); */}
            window.location.href = "/";
              {/* location.pathname.split('/').slice(0,-1); */}
            
            
          }} >

            
            {/* FORM TITLE */}
              <FormTitle> Sign Up Now </FormTitle>

             
    
               <div className="content">
               <Link to={{ pathname: "/signup", search: "mail=true" }} className="button-sq fullwidth-sq">
            <i className="icon icon-email-2"></i>
            <span>Sign Up with Email</span>
        </Link>

        <Link to="" onClick={this._handleSignInClick} className="button-sq fullwidth-sq twitter-button">
            <img src={icon_google_plus} alt=""/>
            <span>Sign Up with Twitter</span>
        </Link>
    
        <Link to="" className="button-sq fullwidth-sq facebook-button">
            {/* <i className="icon icon-logo-facebook2"></i>
            <span>Sign Up with Facebook</span> */}
            <SignUpWith>Sign Up with Facebook</SignUpWith>
        </Link>
    
        <Link to="" className="button-sq fullwidth-sq google-button">
            <img src={icon_google_plus} alt=""/>
            <span>Sign Up with Google</span>
        </Link>

        
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
    </div>

    

    <Route  
          render={() => {
            return (
                params.get("mail") && (
              <Modal
                onClick={() => {
                  this.props.history.push(this.props.match.url);
                }}
              >
               
               
               <FormTitle>  Sign Up Now </FormTitle>

               {/* FORM REGISTER */}
                 <RegisterForm/>

      {/* form actions */}
      <FormActions>Log In</FormActions>
     
    
              </Modal>
                )
            );
          }}
        />


    <FormActions>Log In</FormActions>
    
    
            </Modal>
            )
    
        // )
    }
    
}

export default SignUpPage

