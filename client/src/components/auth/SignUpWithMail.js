import React from 'react'

//import images
import modal_background_001 from '../../assets/images/modal/modal_background_001.jpg';

function SignUpWithMail() {
    return (
       <div className="ui full modal" data-for="modal03">
<div className="modal-full-background">
    <img src={modal_background_001} alt="modal_background_001.jpg"/>
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

    )
}

export default SignUpWithMail
