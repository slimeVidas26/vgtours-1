import React from 'react'
import {Link } from 'react-router-dom'

//import images
import logo_mybnb_transparent from '../../assets/images/logo-mybnb-transparent.png';
import logo_mybnb_transparent2x from '../../assets/images/logo-mybnb-transparent@2x.png';
// import logo_mybnb from '../../assets/images/logo-mybnb.png';
// import logo_mybnb2x from '../../assets/images/logo-mybnb@2x.png';

function Footer() {
    return (
        <div id="footer">

<div class="footer-top">
    
    <div class="ui grid container">
        <div class="row">
            <div class="ui six wide tablet four wide computer column">
                <h5>Hosting</h5>
                
                <ul class="list-default-sq">
                    <li><Link to ="">Etiam consequat</Link></li>
                    <li><Link to ="">Phasellus sed neque </Link></li>
                    <li><Link to ="">Morbi suscipit convallis</Link></li>
                    <li><Link to ="">Praesent diam</Link></li>
                </ul>
                
            </div>
            <div class="ui six wide tablet four wide computer column">
                <h5>Useful Links</h5>
                
                <ul class="list-default-sq">
                    <li><Link to ="">Aenean sit amet ipsum</Link></li>
                    <li><Link to ="">Sed mollis</Link></li>
                    <li><Link to ="">Aliquam porttitor</Link></li>
                    <li><Link to ="">Nulla vitae</Link></li>
                </ul>
            </div>
            <div class="ui twelve wide tablet four wide computer column">
                <h5>Title</h5>
                
                <p><em>In hac habitasse platea dictumst. Integer quis tortor enim. Integer et elit nec magna ultricies convallis. In venenatis eu erat et facilisis. Vestibulum congue enim nisl. Fusce arcu enim, porta a auctor vel, hendrerit a libero. Vivamus vel dapibus sem.</em></p>
            </div>
        </div>
    </div>
    
    
</div>

<div class="footer-bottom">
    <div class="ui grid container">
        <div class="row">
            <div class="ui twelve wide mobile eight wide computer column">
                <Link to="" class="footer-logo">
                <img  src={logo_mybnb_transparent} srcSet={`${logo_mybnb_transparent} 1x ,${logo_mybnb_transparent2x} 2x `} alt="mybnb logo"/>

                    © SeventhQueen 2018 </Link>
            </div>
            <div class="ui twelve wide mobile four wide computer column">
                <ul class="social-links-sq list-style-inline-sq list-default-sq">
                     <li><Link to ="" class="fb"><i class="icon icon-logo-facebook2"></i></Link></li>

                     <li><Link to ="" class="tw"><i class="icon icon-logo-twitter-bird2"></i></Link></li>

                     <li><Link to ="" class="gp"><i class="icon icon-logo-circle-google-plus-22"></i></Link></li>
                 </ul>
            </div>
        </div>
    </div>    
</div>
 
</div>
    )
}

export default Footer
