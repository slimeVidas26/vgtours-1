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
         
        };
        
      }
   
    componentDidMount() {
        this.props.loginTwitterUser()
        console.log("this.props.loginTwitterUser()" , this.props.loginTwitterUser)
 
        console.log("this.props from twitterAuthentication" , this.props)
 
        }

        onLogoutClick = e => {
            e.preventDefault();
            this.props.logoutUser();
          };

    render() {
        console.log("render this.props.auth from twitterAuthentication" , this.props)

        const { isAuthenticated , user } = this.props.auth;
       

          return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
              
              <div className="row">
                <div className="col s12 center-align">
                  {!isAuthenticated ? (
                  <h1>Welcome!</h1>
                ) : (
                  <div>
                  <h4>
                    <b>Hey there,</b> {user.name} <br/>
                    <b>Your ID is : ,</b> {user._id} <br/>
                    <b>Your TwitterId  is : ,</b> {user.twitterId} <br/>
                    <b>Your screenName  is : ,</b> {user.screenName} <br/>
                    <b>Date  is : ,</b> {user.date} <br/>

                    <img src={user.thumbnail} alt=""/>
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
    errors: PropTypes.object.isRequired,
    // user: PropTypes.shape({
    //     name: PropTypes.string,
    //     profileImageUrl: PropTypes.string,
    //     twitterId: PropTypes.string,
    //     screenName: PropTypes.string,
    //     _id: PropTypes.string
    //   })
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
  });
  export default connect(
    mapStateToProps,
    { loginTwitterUser , logoutUser }
  )(withRouter(TwitterAuthentication));
