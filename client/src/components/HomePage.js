import React from 'react'
import '../assets/less/base.min.css'
import '../assets/less/header.min.css'
import '../assets/less/theme.min.css'
import '../assets/icon/style.css'

import '../assets/images/ico/favicon.ico'
//import components
import Header from "./Header";
import HeroSearchFullPage from './HeroSearchFullPage'
import UiLayoutTop from './UiLayoutTop'
import SignUp from './auth/SignUp'
import Login2 from './auth/Login2'
import SignUpWithMail from './auth/SignUpWithMail'
import Wishlist from './Wishlist'

import Footer from "./Footer";

function HomePage() {
    return (
      <React.Fragment>

<Header/>


{/* <!-- Hero Full Page --> */}
<HeroSearchFullPage/>

{/* <!-- ui layout top --> */}
<UiLayoutTop/>
{/* <!-- Modals --> */}

{/* <!-- Sign Up --> */}

<SignUp/>
{/* <!-- Log In --> */}

<Login2/>

{/* <!-- Sign Up with mail --> */}

<SignUpWithMail/>
{/* <!-- Wishlist --> */}

<Wishlist/>           

{/* <!--FOOTER--> */}

<Footer/>
</React.Fragment>
    )








}

export default HomePage
