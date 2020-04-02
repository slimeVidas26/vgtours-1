import React, { Component , Fragment  } from 'react'
// import {withRouter} from 'react-router-dom'
import '../assets/less/base.css'
import '../assets/less/header.css'
import '../assets/less/theme.css'
import '../assets/icon/style.css'


import '../assets/images/ico/favicon.ico'
//import components
import Header from "./Header";
import HeroSearchFullPage from './HeroSearchFullPage'
import UiLayoutTop from './UiLayoutTop'
import SignUp from './auth/SignUp'
import Login2 from './auth/_Login2'
import SignUpWithMail from './auth/SignUpWithMail'
import Wishlist from './Wishlist'

import Footer from "./Footer";

class HomePage extends Component {

    constructor(props) {
        super(props)
    console.log(this.props)
        this.state = {
             
        }
    }
    

    render(){
        return (
            <Fragment>
            {/* <!-- Header menu --> */}

      <Header/>
      
      
      {/* <!-- Hero Full Page --> */}
      <HeroSearchFullPage/>
      
      {/* <!-- ui layout top --> */}
      <UiLayoutTop/>
      {/* <!-- Modals --> */}
      
      {/* <!-- Sign Up --> */}
      
      {/* <SignUp/> */}
      {/* <!-- Log In --> */}
      
      {/* <Login2/> */}
      
      {/* <!-- Sign Up with mail --> */}
      
      <SignUpWithMail/>
      {/* <!-- Wishlist --> */}
      
      <Wishlist/>           
      
      {/* <!--FOOTER--> */}
      
      <Footer/>
      </Fragment>
          )
    }
   

}

export default HomePage
