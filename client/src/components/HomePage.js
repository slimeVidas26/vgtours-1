import React, { Component , Fragment  } from 'react'


import '../assets/images/ico/favicon.ico'
//import components
import Header from "./Header";
import HeroSearchFullPage from './HeroSearchFullPage'
import UiLayoutTop from './UiLayoutTop'
import Wishlist from './Wishlist'

import Footer from "./Footer";
import JsContextProvider from '../contexts/JsContext';
import HeroSearchContextProvider from '../contexts/HeroSearchContext';
import RegisterFormHooks from './auth/RegisterFormHooks';
import AuthContextProvider from '../contexts/AuthContext';

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
    <JsContextProvider>
      <Header/>
      <HeroSearchContextProvider>
        <HeroSearchFullPage/>
      </HeroSearchContextProvider>
      <UiLayoutTop/>
      <Wishlist/>           
      <Footer/>
    </JsContextProvider>
     

      </Fragment>
          )
    }
   

}

export default HomePage
