import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { githubLoginUser , githubLogoutUser } from "../../actions/authActions";
import { withRouter} from "react-router-dom";
import Loader from 'react-loader-spinner'


export class GithubAuth extends Component {
    constructor() {
        super();
        this.state = {
         
        };
        
      }
   
    componentDidMount() {
        this.props.githubLoginUser()


        }


        onLogoutClick = e => {
            e.preventDefault();
            this.props.githubLogoutUser();
            console.log("this.props.auth",this.props.auth)

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
                    <b>Hey there,</b> {user.displayName} <br/>
                    <b>Your userName is : </b> {user.userName} <br/>
                    <b>Your ID is : </b> {user._id} <br/>
                    <b>Your githubId  is : </b> {user.githubId} <br/>
                    <b>Your name  is : </b> {user.name} <br/>
                    <b>Your email  is : </b> {user.email} <br/>
                    <b>Date  is : </b> {user.date} <br/>
                    <b>provider  is : </b> {user.provider} <br/>
                    <img src={user.thumbnail} width = "100" alt=""/>
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

GithubAuth.propTypes = {
    githubLogoutUser: PropTypes.func.isRequired,
    githubLoginUser: PropTypes.func.isRequired,

    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
  });
  export default connect(
    mapStateToProps,
    { githubLoginUser , githubLogoutUser }
  )(withRouter(GithubAuth));
