import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";

import icon_google_plus from '../../assets/images/icon-google-plus.svg';


export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Link to={`${this.props.match.url}/edit`}>Edit Profile</Link>
        <Link to={{ pathname: this.props.match.url, search: "?login=true" }}>Login</Link>

        <Route
          path={`${this.props.match.url}/edit`}
          render={() => {
            return (
              <SignUpModal
                onClick={() => {
                  this.props.history.push(this.props.match.url);
                }}
              >
               
                
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

              </SignUpModal>
            );
          }}
        />
      </div>
    
    );
  }
}
