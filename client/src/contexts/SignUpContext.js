import React , {createContext , useReducer , useState} from 'react'
export const SignUpContext = createContext();

const SignUpContextProvider = (props) => {
    

    const _twitterSignIn = () => {
        // Authenticate using via passport api in the backend
        // Open Twitter login page
        window.open("http://localhost:5000/auth/twitter", "_self");
      };

      const _googleSignIn = () => {
        // Authenticate using via passport api in the backend
        // Open google login page
        window.open("http://localhost:5000/auth/google", "_self");
      };
     const _facebookSignIn = () => {
        // Authenticate using via passport api in the backend
        // Open facebook login page
        window.open("http://localhost:5000/auth/facebook", "_self");
      };
     const _amazonSignIn = () => {
        // Authenticate using via passport api in the backend
        // Open facebook login page
        window.open("http://localhost:5000/auth/amazon", "_self");
      };
     const _spotifySignIn = () => {
        // Authenticate using via passport api in the backend
        // Open facebook login page
        window.open("http://localhost:5000/auth/spotify", "_self");
      };
     const _instagramSignIn = () => {
        // Authenticate using via passport api in the backend
        // Open facebook login page
        window.open("http://localhost:5000/auth/instagram", "_self");
      };
     const _githubSignIn = () => {
        // Authenticate using via passport api in the backend
        // Open facebook login page
        window.open("http://localhost:5000/auth/github", "_self");
      };

    const [network , setNetwork] =  useState([
        {   
          socialNetwork : "Email",
          linkTo : {
              pathName : "/register",
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
            func : _twitterSignIn
        },
        {   
          socialNetwork : "google",
          className : "button-sq fullwidth-sq google-button",
          icon : "icon icon-logo-circle-google-plus-22",
          Text : "Sign Up With Google",
          func : _googleSignIn

      },
      {   
          socialNetwork : "facebook",
          className : "button-sq fullwidth-sq facebook-button",
          icon : "icon icon-logo-facebook2",
          Text : "Sign Up With Facebook",
          func : _facebookSignIn

      },
      {   
        socialNetwork : "amazon",
        className : "button-sq fullwidth-sq amazon-button",
        icon : "icon icon-logo-amazon",
        Text : "Sign Up With Amazon",
        func : _amazonSignIn

    },
    {   
      socialNetwork : "spotify",
      className : "button-sq fullwidth-sq amazon-button",
      icon : "icon icon-logo-amazon",
      Text : "Sign Up With Spotify",
      func : _spotifySignIn

  },
  {   
    socialNetwork : "instagram",
    className : "button-sq fullwidth-sq amazon-button",
    icon : "icon icon-logo-amazon",
    Text : "Sign Up With Instagram",
    func : _instagramSignIn

},
{   
  socialNetwork : "github",
  className : "button-sq fullwidth-sq amazon-button",
  icon : "icon icon-logo-amazon",
  Text : "Sign Up With Github",
  func : _githubSignIn

}
       ])

    
    return ( 
        <SignUpContext.Provider value = {
            {network }}>
         {props.children}
        </SignUpContext.Provider>
     );
}
 
export default SignUpContextProvider;