import React, { Component , Fragment  } from 'react'


import ButtonExampleButton from './elements/Btn.js'
import '../assets/images/ico/favicon.ico'
//import components
import Header from "./Header";
import HeroSearchFullPage from './HeroSearchFullPage'
import UiLayoutTop from './UiLayoutTop'
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
      
      <ButtonExampleButton />
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
      
      {/* <SignUpWithMail/> */}
      {/* <!-- Wishlist --> */}
      
      <Wishlist/>           
      
      {/* <!--FOOTER--> */}
      
      <Footer/>
      </Fragment>
          )
    }
   

}

export default HomePage
