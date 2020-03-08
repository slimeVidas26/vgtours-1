import React from 'react'
import { Link } from "react-router-dom";
import '../assets/less/base.min.css'
import '../assets/less/header.min.css'
import '../assets/less/theme.min.css'
import '../assets/icon/style.css'

import '../assets/images/ico/favicon.ico'
//import components
import Header from "./Header";
import HeroSearchFullPage from './HeroSearchFullPage'
import UiLayoutTop from './UiLayoutTop'


import Footer from "./Footer";

//import images


















function HomePage() {
    return (
       <div id="page-wrapper">

<Header/>


{/* <!-- Hero Full Page --> */}
<HeroSearchFullPage/>

{/* <!-- ui layout top --> */}
<UiLayoutTop/>
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
    <Link to="" className="button-sq fullwidth-sq modal-ui-trigger" data-trigger-for="modal03">
        <i className="icon icon-email-2"></i>
        <span>Sign Up with Email</span>
    </Link>

    <Link to="" className="button-sq fullwidth-sq facebook-button">
        <i className="icon icon-logo-facebook2"></i>
        <span>Sign Up with Facebook</span>
    </Link>

    <Link to="" className="button-sq fullwidth-sq google-button">
        <img src="assets/images/icon-google-plus.svg" alt=""/>
        <span>Sign Up with Google</span>
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

{/* <!-- Wishlist --> */}
<div className="ui modal small" data-for="wishlist">
<i className="icon icon-close close-modal"></i>

<div className="header center">
    <h4>Wishlist</h4>
</div>

<div className="content">
    <p>Mauris malesuada leo libero, vitae tempor ante sagittis vitae. Suspendisse consectetur facilisis enim.</p>
    <br/>
    <input type="checkbox" id="c01"/>
    <label htmlFor="c01">Beautiful Places</label>
    <input type="checkbox" id="c02"/>
    <label htmlFor="c02">For Summer</label>
    <input type="checkbox" id="c03"/>
    <label htmlFor="c03">Dream Houses</label>
</div>

<div className="actions">
    <div className="div-c inline-2">
        <div className="divided-column">
            <div className="button-sq cancel-sq fullwidth-sq">Cancel</div>
        </div>

        <div className="divided-column">
            <div className="button-sq fullwidth-sq">OK</div>
        </div>
    </div>
</div>

</div>
                 

{/* <!--FOOTER--> */}

<Footer/>
</div>

    )








}

export default HomePage
