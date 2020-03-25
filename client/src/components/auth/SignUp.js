import React from 'react'
import { Link } from "react-router-dom";


//import images
import modal_background_001 from '../../assets/images/modal/modal_background_001.jpg';
import icon_google_plus from '../../assets/images/icon-google-plus.svg';


function signUp() {
    return (
<div className="ui full modal" data-for="modal01">
<div className="modal-full-background">
    <img src={modal_background_001} alt="modal_background_001.jpg"/>
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
        <img src={icon_google_plus} alt=""/>
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

    )
}

export default signUp
