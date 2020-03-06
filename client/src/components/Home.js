import React from 'react';
// import "../assets/less/app.less"
import { Grid } from 'semantic-ui-react';


function Home() {
    return (
        <div id ="page-wrapper">
        <div class="footer-bottom">
       <div class="ui grid container">
           <div class="row">
               <div class="ui twelve wide mobile eight wide computer column">
                   <a href="" class="footer-logo">
	                   <img src="assets/images/logo-mybnb-transparent.png" srcset="assets/images/logo-mybnb-transparent.png 1x, assets/images/logo-mybnb-transparent@2x.png 2x" alt="mybnb logo" />
                       © SeventhQueen 2018                   </a>
               </div>
               <div class="ui twelve wide mobile four wide computer column">
                   <ul class="social-links-sq list-style-inline-sq list-default-sq">
                        <li><a href="" class="fb"><i class="icon icon-logo-facebook2"></i></a></li>

                        <li><a href="" class="tw"><i class="icon icon-logo-twitter-bird2"></i></a></li>

                        <li><a href="" class="gp"><i class="icon icon-logo-circle-google-plus-22"></i></a></li>
                    </ul>
               </div>
           </div>
       </div>    
   </div>


    <Grid>
    <Grid.Column>
      <p>Content lives here</p>
      <p>Content lives here</p>
      <p>Content lives here</p>
      <p>Content lives here</p>
    </Grid.Column>
  </Grid>
        </div>
    )
}

export default Home
