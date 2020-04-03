import React, { Component } from "react";
import Modal from "./Modal";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";







 class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    
  }

  componentDidMount() {
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


onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
console.log(userData);
this.props.loginUser(userData);
 // since we handle the redirect within our component,
 // we don't need to pass in this.props.history as
 // a parameter
  };
  render() {
    //  let params = new URLSearchParams(this.props.location.search);
    const { errors } = this.state;

    return (
      //  params.get("login") && (
        <Modal>
          <div className="header center">
         Log In
        </div>
          <div className="content">
          <form noValidate onSubmit={this.onSubmit}>
          <div className="div-c">
           <div className="divided-column">
               {/* <input type="text" placeholder="E-mail Adress"/> */}

               <input
                 onChange={this.onChange}
                 value={this.state.email}
                 error={errors.email}
                 id="email"
                 type="email"
                 placeholder="E-mail Adress"
                 className={classnames("", {
                   invalid: errors.email || errors.emailnotfound
                 })}
               />
               {/* <label htmlFor="email">Email</label> */}
               <span className="red-text">
                 {errors.email}
                 {errors.emailnotfound}
               </span>
           </div>
           <div className="divided-column">
               {/* <input type="text" placeholder="Password"/> */}

               <input
                 onChange={this.onChange}
                 value={this.state.password}
                 error={errors.password}
                 id="password"
                 type="password"
                 placeholder="Password"
                 className={classnames("", {
                   invalid: errors.password || errors.passwordincorrect
                 })}
               />
               {/* <label htmlFor="password">Password</label> */}
               <span className="red-text">
                 {errors.password}
                 {errors.passwordincorrect}
               </span>
           </div>
       </div>



          <div className="button-sq fullwidth-sq">
          <button type="submit"
         className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                 >
                   Login
                 </button>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
          </form>
          </div>
           <div className="actions">
         <div className="border-container">
             <div className="button-sq link-sq modal-ui-trigger" data-trigger-for="modal01">Don’t have an account?</div>
    
             <div className="button-sq link-sq login-sq modal-ui-trigger" data-trigger-for="modal01">
                 Sign Up
                 <i className="icon icon-person-add-1"></i>
             </div>
         </div>
     </div>
     
        
        </Modal>
      )
    //  );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
