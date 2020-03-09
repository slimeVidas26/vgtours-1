import React from 'react'


//import images
import modal_background_001 from '../../assets/images/modal/modal_background_001.jpg';

function Login2() {
    return (
        <div className="ui full modal" data-for="modal02">
<div className="modal-full-background">
    <img src={modal_background_001} alt="modal_background_001.jpg"/>
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

    )
}

export default Login2
