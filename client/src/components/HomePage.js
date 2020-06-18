import React, { Component , Fragment  } from 'react'


import '../assets/images/ico/favicon.ico'
//import components
import Header from "./Header";
import HeroSearchFullPage from './HeroSearchFullPage'
import UiLayoutTop from './UiLayoutTop'
import Wishlist from './Wishlist'

import Footer from "./Footer";
import JsContextProvider from '../contexts/JsContext';

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
      <HeroSearchFullPage/>
      <UiLayoutTop/>
      <Wishlist/>           
      <Footer/>
    </JsContextProvider>
     

      </Fragment>
          )
    }
   

}

export default HomePage
