import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { twitterLoginUser , twitterLogoutUser } from "../../actions/authActions";
import { withRouter} from "react-router-dom";
import Loader from 'react-loader-spinner'


export class TwitterAuth extends Component {
    constructor() {
        super();
        this.state = {
         
        };
        
      }
   
    componentDidMount() {
        this.props.twitterLoginUser()


        }


        onLogoutClick = e => {
            e.preventDefault();
            this.props.twitterLogoutUser();
          };

    render() {
        const { isAuthenticated , user } = this.props.auth;
          return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
              
              <div className="row">
                <div className="col s12 center-align">
                   {!isAuthenticated ? (
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
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

TwitterAuth.propTypes = {
    twitterLogoutUser: PropTypes.func.isRequired,
    twitterLoginUser: PropTypes.func.isRequired,

    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
  });
  export default connect(
    mapStateToProps,
    { twitterLoginUser , twitterLogoutUser }
  )(withRouter(TwitterAuth));
