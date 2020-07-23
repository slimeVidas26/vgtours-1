import React, {useContext , useEffect , Fragment } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
// image
import host_01 from '../assets/images/host/host_01.jpg'
import SocialHeaderWhite from './SocialHeaderWhite'
import Footer from './layout/Footer'
import AuthContextProvider from '../contexts/AuthContext';

import '../assets/less/base.css'
import '../assets/less/header.css'
import '../assets/less/theme.css'
import '../assets/icon/style.css'


 const BecomeASocialVendor = ()=> {
    const {User ,socialLoginUser } = useContext(AuthContext)

    useEffect(()=>{
        User.status = "social"
        console.log("User from useEffect" , User)
        socialLoginUser()
    } , [])

    const formatUser = (obj)=>{
        
        const userEntries = Object.entries(obj);
        console.log("userEntries" , userEntries)
       const result = userEntries
       .filter((item , i , arr)=>{
         return arr[i][0] !== "__v" && arr[i][0] !== "isAuthenticated"
         && arr[i][0] !== "date" && arr[i][0] !== "_id" && arr[i][0] !== "googleId"
         && arr[i][0] !== "thumbnail" && arr[i][0] !== "provider" && arr[i][0] !== "location"
         && arr[i][0] !== "twitterId" && arr[i][0] !== "screenName"
         && arr[i][0] !== "facebookId" && arr[i][0] !== "amazonId"
          && arr[i][0] !== "email"
         && arr[i][0] !== "spotifyId" && arr[i][0] !== "userName"
         && arr[i][0] !== "githubId" 


       })
       .map(([ key, value ])=>{
          switch (key) {
            case "thumbnail":
              return <div><img src={value} alt=""/></div>
             
             case "username":
               return <b>Hey there, {value} <br/></b>
               case "date":
               return <b> Date is, {value} <br/></b>
               case "displayName":
               return <b>Hey there, {value} <br/></b>
               case "name":
                return <b>Hey there, {value} <br/></b>
               case "_id":
                 return <b> your  ID is : {value}<br/> </b>
                 default:
             return <b> your  {key} is : {value}<br/> </b>
          }
       })

       return result;

                         }

  
   
        return (
            <Fragment>
             <AuthContextProvider >
             <SocialHeaderWhite isAuthenticated = {User.isAuthenticated}/>
             </AuthContextProvider>
   
        <div className="ui layout">
            <div className="ui centered grid container">
                <div className="row">
                    <div className="ui twelve wide tablet six wide computer six wide widescreen six wide large screen column">
                     
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        {!User.isAuthenticated ? (
                        <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                        />
                ) : ( 
                  <div>
                    <h4 style={{ 'textAlign': 'center' }} >
                  <b >
                  {formatUser(User.user)}
                  
                    </b>
                  {/* <b>Hey there, {User.user.username} <br/></b> 
                  <b>Hey there, {User.user.name} <br/></b> 
                  <b>Hey there, {User.user.displayName} <br/></b>  */}



                 

                    </h4>
                    </div>
                 )} 
                        
                      
                        <br/>
                        
                        <p className="text-align-center-sq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper. </p>
                        <br/>
                        <div className="text-align-center-sq">
                            <a className="button-sq font-weight-bold-sq">Confirm</a>
                        </div>
                        
                        
                        
                    </div>
                    
                </div>  
                
                <div className="row become-dashboard-description">
                    <div className="ui twelve wide tablet twelve wide computer six wide widescreen six wide large screen column">
                      
                      
                       <div className="become-dashboard-inner">
                           <h5>Why you’ll love becoming a host</h5>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
                       </div>
                       
                       
                    </div>
                    
                    <div className="ui twelve wide tablet twelve wide computer six wide widescreen six wide large screen column">
                      
                       <div className="image-full-height">
                           <div className="image-wrapper">
                                <div className="image-inner">
                                    <img src={host_01} alt="" className="image-sq"/>
                                </div>
                           </div>
                       </div>
                       
                    </div>
                    
                </div>
                
            </div>    
        </div>
        
        {/* <!-- Modals --> */}
    
        {/* <!-- Sign Up --> */}
        <div className="ui full modal" data-for="modal01">
            <div className="modal-full-background">
                <img src="assets/images/modal/modal_background_001.jpg" alt=""/>
            </div>

            <i className="icon icon-close close-modal"></i>

            <div className="header center">
                Sign Up Now
            </div>

            <div className="content">
                <Link to ="" className="button-sq fullwidth-sq modal-ui-trigger" data-trigger-for="modal03">
                    <i className="icon icon-email-2"></i>
                    Sign Up with Email
                </Link>

                <Link to ="" className="button-sq fullwidth-sq facebook-button">
                    <i className="icon icon-logo-facebook2"></i>
                    <span>Sign Up with Facebook</span>
                </Link>

                <Link to ="" className="button-sq fullwidth-sq google-button">
                    <img src="assets/images/icon-google-plus.svg" alt=""/>
                    Sign Up with Google
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
            </div>

            <div className="actions">
                <div className="border-container">
                    <div className="button-sq link-sq modal-ui-trigger" data-trigger-for="modal02">Already a member?</div>

                    <div className="button-sq link-sq login-sq modal-ui-trigger" data-trigger-for="modal02">
                        Log In
                        <i className="icon icon-person-lock-2"></i>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Log In --> */}
        <div className="ui full modal" data-for="modal02">
            <div className="modal-full-background">
                <img src="assets/images/modal/modal_background_001.jpg" alt=""/>
            </div>

            <i className="icon icon-close close-modal"></i>

            <div className="header center">
                Log In
            </div>

            <div className="content">
                <div className="div-c">
                    <div className="divided-column">
                        <input type="text" placeholder="E-mail Adress"/>
                    </div>
                    <div className="divided-column">
                        <input type="text" placeholder="Password"/>
                    </div>
                </div>

                <div className="button-sq fullwidth-sq">Sign Up</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
            </div>

            <div className="actions">
                <div className="border-container">
                    <div className="button-sq link-sq modal-ui-trigger" data-trigger-for="modal01">Don’t have an account?</div>

                    <div className="button-sq link-sq login-sq modal-ui-trigger" data-trigger-for="modal01">
                        Sign Up
                        <i className="icon icon-person-add-1"></i>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Sign Up with mail --> */}
        <div className="ui full modal" data-for="modal03">
            <div className="modal-full-background">
                <img src="assets/images/modal/modal_background_001.jpg" alt=""/>
            </div>

            <i className="icon icon-close close-modal"></i>

            <div className="header center">
                Sign Up Now
            </div>

            <div className="content">

               <div className="div-c inline-2">
                    <div className="divided-column">
                       <input type="text" placeholder="First Name"/>
                    </div>
                    <div className="divided-column">
                       <input type="text" placeholder="Last Name"/>
                    </div>
                </div>

                <div className="div-c">
                    <div className="divided-column">
                        <input type="text" placeholder="E-mail Adress"/>
                    </div>
                    <div className="divided-column">
                        <input type="text" placeholder="Password"/>
                    </div>
                </div>

                <div className="div-c inline-3 one-label">
                    <label>Birthday</label>
                    <div className="divided-column">
                        <select name="dropdown"  className="dropdown">
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">...</option>
                        </select>
                    </div>
                    <div className="divided-column">
                        <select name="dropdown"  className="dropdown">
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">...</option>
                        </select>
                    </div>  
                    <div className="divided-column">
                        <select name="dropdown"  className="dropdown">
                            <option value="1">1985</option>
                            <option value="2">1986</option>
                            <option value="3">1987</option>
                            <option value="4">1988</option>
                            <option value="5">1989</option>
                            <option value="6">...</option>
                        </select>
                    </div>     
                </div>

                <div className="button-sq fullwidth-sq">Sign Up</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>  

            </div>

            <div className="actions">
                <div className="border-container">
                    <div className="button-sq link-sq"></div>

                    <div className="button-sq link-sq login-sq modal-ui-trigger" data-trigger-for="modal01">
                        Log In
                        <i className="icon icon-person-lock-2"></i>
                    </div>
                </div>
            </div>
        </div>
    
        
    {/* <!--FOOTER--> */}
<Footer/>
</Fragment>       
        
        )
    }


export default withRouter(BecomeASocialVendor)
