import TwitterHeader from "./TwitterHeader";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { googleLogoutUser } from "../actions/authActions";



 class GoogleAuth extends Component {

  constructor(props) {
    super(props)
  console.log(this.props + ' from googleAuth')
    this.state = {
       
    }
  }

  // static propTypes = {
  //   authenticated: PropTypes.bool.isRequired
  // };

  state = {
    user: {},
    error: null,
    authenticated: false
  };

  componentDidMount() {
    fetch("http://localhost:3000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user
        });
        console.log(this.state)
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div>
        {/* <TwitterHeader
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
        /> */}
        <div>
          {!authenticated ? (
            ""
          ) : (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b>  {this.state.user.displayName}
              <p><b>Authenticated,</b>  {this.state.authenticated}</p>
              <p className="flow-text grey-text text-darken-1">
                You are logged into vg-tours{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>

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
          )}
        </div>

      
      </div>
    );
  }

  // _handleNotAuthenticated = () => {
  //   this.setState({ authenticated: false });
  // };

  // _handleLogoutClick = () => {
  //   // Logout using Twitter passport api
  //   // Set authenticated state to false in the HomePage component
  //   window.open("http://localhost:5000/auth/logout", "_self");
  //   this.props.handleNotAuthenticated();
  // };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.googleLogoutUser();
    this.setState({ authenticated: false });
  };
}

GoogleAuth.propTypes = {
  googleLogoutUser: PropTypes.func.isRequired,
  //auth: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  //auth: state.auth,
  authenticated: state.authenticated
});
export default connect(
  mapStateToProps,
  {googleLogoutUser}
)(GoogleAuth)