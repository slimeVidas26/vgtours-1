import React, { Component } from "react";
import { connect } from "react-redux";
import { loginGoogleUser } from "../../actions/authActions";





 class GoogleUser extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      name : "isaac dahan"
    };

    
  }



  componentDidMount() {
    // console.log(this.props.history)
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
      
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }



  render() {
    

    return (
       <h1>dashboard</h1> 
     );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginGoogleUser }
)(GoogleUser);
