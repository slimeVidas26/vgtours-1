import React, { Component } from 'react'
import { Link } from "react-router-dom";


class SignUpWith extends Component { 

    constructor(props) {
        super(props)
    
        this.state = [
            {   
                socialNetwork : "Email",
                linkTo : {
                    pathName : "/signup",
                    search : "mail=true"
                },
                className : "button-sq fullwidth-sq ",
                icon : "icon icon-email-2",
                Text : "Sign Up With Mail",
                func: null
            },
              {   
                  socialNetwork : "twitter",
                  className : "button-sq fullwidth-sq google-button",
                  icon : "icon icon-logo-twitter-bird2",
                  Text : "Sign Up With Twitter",
                  func : this._twitterSignIn
              },
              {   
                socialNetwork : "google",
                className : "button-sq fullwidth-sq google-button",
                icon : "icon icon-logo-circle-google-plus-22",
                Text : "Sign Up With Google",
                func : this._googleSignIn

            },
            {   
                socialNetwork : "facebook",
                className : "button-sq fullwidth-sq facebook-button",
                icon : "icon icon-logo-facebook2",
                Text : "Sign Up With Facebook",
                func : this._facebookSignIn

            },
            {   
              socialNetwork : "amazon",
              className : "button-sq fullwidth-sq amazon-button",
              icon : "icon icon-logo-amazon",
              Text : "Sign Up With Amazon",
              func : this._amazonSignIn

          }
        ]   
    }

    _twitterSignIn = () => {
        // Authenticate using via passport api in the backend
        // Open Twitter login page
        window.open("http://localhost:5000/auth/twitter", "_self");
      };

      _googleSignIn = () => {
        // Authenticate using via passport api in the backend
        // Open google login page
        window.open("http://localhost:5000/auth/google", "_self");
      };
      _facebookSignIn = () => {
        // Authenticate using via passport api in the backend
        // Open facebook login page
        window.open("http://localhost:5000/auth/facebook", "_self");
      };
      _amazonSignIn = () => {
        // Authenticate using via passport api in the backend
        // Open facebook login page
        window.open("http://localhost:5000/auth/amazon", "_self");
      };


    render(){
        const socialNetwork = this.state.map((item , index)=>{
      //  WILL REDIRECT TO THE SignUpForm COMPONENT   
             return item.socialNetwork === "Email" ?
                 <Link to= {{ pathname:item.linkTo.pathName, search: item.linkTo.search }}
                    onClick={item.func}
                    key = {index}
                     className={item.className}>
                   <i className={item.icon}></i>
                   <span>{item.Text}</span>
               </Link>
            :
                 <div
                   onClick={item.func}
                    key = {index}
                     className={item.className}>
                   <i className={item.icon}></i>
                   <span>{item.Text}</span>
               </div>   
        })

        
        return socialNetwork
        
        
    }
}

    


export default SignUpWith


 {/* <Link to="" onClick={this._twitterSignInClick} className="button-sq fullwidth-sq facebook-button">
            <i className="icon icon-logo-twitter-bird2"></i>
            <span>Sign Up with Twitter</span>
        </Link> */}

// {{ pathname: "/signup", search: "mail=true" }}
