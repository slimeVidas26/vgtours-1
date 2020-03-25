import React, { Component , Fragment } from 'react'

// image
import host_01 from '../assets/images/host/host_01.jpg'
import Header from './Header'

import '../assets/less/base.css'
import '../assets/less/header.css'
import '../assets/less/theme.css'
import '../assets/icon/style.css'


 class BecomeAvendor extends Component {
    render() {
        return (
            <Fragment>

                <Header/>

             <div className="ui layout">
            <div className="ui centered grid container">
                <div className="row">
                    <div className="ui twelve wide tablet six wide computer six wide widescreen six wide large screen column">
                     
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h3 className="text-align-center-sq">
                            Become a Vendor
                        </h3>
                        <br/>
                        
                        <p className="text-align-center-sq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper. </p>
                        <br/>
                        <div className="text-align-center-sq">
                            <a className="button-sq font-weight-bold-sq" href="add_listing.html">Confirm</a>
                        </div>
                        
                        
                        
                    </div>
                    
                </div>  
                
                <div className="row become-dashboard-description">
                    <div className="ui twelve wide tablet twelve wide computer six wide widescreen six wide large screen column">
                      
                      
                       <div className="become-dashboard-inner">
                           <h5>Why you’ll love becoming a host</h5>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
                       </div>
                       
                       
                    </div>
                    
                    <div className="ui twelve wide tablet twelve wide computer six wide widescreen six wide large screen column">
                      
                       <div className="image-full-height">
                           <div className="image-wrapper">
                                <div className="image-inner">
                                    <img src={host_01} alt="" className="image-sq"/>
                                </div>
                           </div>
                       </div>
                       
                    </div>
                    
                </div>
                
            </div>    
        </div>
        
  {/* FOOTER */}
<div id="footer">

   <div className="footer-top">
       
       <div className="ui grid container">
           <div className="row">
               <div className="ui six wide tablet four wide computer column">
                   <h5>Hosting</h5>
                   
                   <ul className="list-default-sq">
                       <li><a href="">Etiam consequat</a></li>
                       <li><a href="">Phasellus sed neque </a></li>
                       <li><a href="">Morbi suscipit convallis</a></li>
                       <li><a href="">Praesent diam</a></li>
                   </ul>
                   
               </div>
               <div className="ui six wide tablet four wide computer column">
                   <h5>Useful Links</h5>
                   
                   <ul className="list-default-sq">
                       <li><a href="">Aenean sit amet ipsum</a></li>
                       <li><a href="">Sed mollis</a></li>
                       <li><a href="">Aliquam porttitor</a></li>
                       <li><a href="">Nulla vitae</a></li>
                   </ul>
               </div>
               <div className="ui twelve wide tablet four wide computer column">
                   <h5>Title</h5>
                   
                   <p><em>In hac habitasse platea dictumst. Integer quis tortor enim. Integer et elit nec magna ultricies convallis. In venenatis eu erat et facilisis. Vestibulum congue enim nisl. Fusce arcu enim, porta a auctor vel, hendrerit a libero. Vivamus vel dapibus sem.</em></p>
               </div>
           </div>
       </div>
       
       
   </div>
   
   <div className="footer-bottom">
       <div className="ui grid container">
           <div className="row">
               <div className="ui twelve wide mobile eight wide computer column">
                   <a href="" className="footer-logo">
	                   <img src="assets/images/logo-mybnb-transparent.png" srcset="assets/images/logo-mybnb-transparent.png 1x, assets/images/logo-mybnb-transparent@2x.png 2x" alt="mybnb logo" />
                       © SeventhQueen 2018</a>
               </div>
               <div className="ui twelve wide mobile four wide computer column">
                   <ul className="social-links-sq list-style-inline-sq list-default-sq">
                        <li><a href="" className="fb"><i className="icon icon-logo-facebook2"></i></a></li>

                        <li><a href="" className="tw"><i className="icon icon-logo-twitter-bird2"></i></a></li>

                        <li><a href="" className="gp"><i className="icon icon-logo-circle-google-plus-22"></i></a></li>
                    </ul>
               </div>
           </div>
       </div>    
   </div>
    
</div> 
</Fragment>       
        
        )
    }
}

export default BecomeAvendor
