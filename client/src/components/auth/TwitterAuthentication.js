import React, { Component } from 'react'
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginTwitterUser } from "../../actions/authActions";
import { withRouter} from "react-router-dom";
import { logoutUser } from "../../actions/authActions";



export class TwitterAuthentication extends Component {
    constructor() {
        super();
        this.state = {
          isAuthenticated:false,
          user: {},
          errors: {}
        }; 
      }
   
   
   
   
   
    componentDidMount() {
        this.props.loginTwitterUser()  
        }

        onLogoutClick = e => {
            e.preventDefault();
            this.props.logoutUser();
          };

    render() {
        const { isAuthenticated } = this.props.auth;
        const {user} = this.props.auth
       

          return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
              
              <div className="row">
                <div className="col s12 center-align">
                  {!isAuthenticated ? (
                  <h1>Welcome!</h1>
                ) : (
                  <div>
                  <h4>
                    <b>Hey there,</b> {user.name}
                    <p className="flow-text grey-text text-darken-1">
                      You are logged into vg-tours{" "}
                      <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                    </p>
                  </h4>
                  </div>
                )}
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          
          );
    }
}

TwitterAuthentication.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    loginTwitterUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { loginTwitterUser , logoutUser }
  )(withRouter(TwitterAuthentication));
