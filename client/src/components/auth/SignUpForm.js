import React, { Component, Fragment } from 'react'
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { withRouter} from "react-router-dom";
import FormTitle from '../layout/FormTitle';
import FormActions from '../layout/FormActions'
import { Route } from "react-router-dom";
import Modal from './Modal'






 class RegisterForm extends Component {

    constructor(props) {
        super(props);
    
        // console.log(this.props.history + ' from signUpWithMail')
    
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          password2: "",
          errors: {}
        };
      }

      componentDidMount() {

        console.log(this.props.history + ' from RegisterForm')

    // If logged in and user navigates to Register page, should redirect them to dashboard
    
    if (this.props.auth.isAuthenticated) {
      console.log("this.props.auth",this.props.auth)
      this.props.history.push("/dashboard");
    }
    
  }

      componentWillReceiveProps(nextProps) {
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
    const newUser = {
          firstName: this.state.firstName,
          lastName : this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };
    console.log(newUser);
    // registerUser function will fired in actions/authAction.js
    this.props.registerUser(newUser, this.props.history); 
    console.log("this.state form register submit function" , this.state)
      };
    render() {
        const { errors } = this.state;
        let params = new URLSearchParams(this.props.location.search);

        return (
            <Fragment>
              <Route render={() => {
            return (
                params.get("mail") && (
              <Modal
                onClick={() => {
                  this.props.history.push(this.props.match.url);
                }}>
                
               {/* FORM REGISTER */}
               <FormTitle>  Sign Up Now </FormTitle>
<div className="content">
<form noValidate onSubmit={this.onSubmit}>

   {/* <div className="div-c inline-2">
        <div className="divided-column">
           <input type="text" placeholder="First Name"/>
        </div>
        <div className="divided-column">
           <input type="text" placeholder="Last Name"/>
        </div>
    </div>*/}
       <div className="div-c inline-2">
        <div className="divided-column">
           {/* <input type="text" placeholder=" Name"/> */}
           <input
             onChange={this.onChange}
             value={this.state.firstName}
             error={errors.firstName}
             id="firstName"
             type="text"
             placeholder=" firstName"
             className={classnames("", {
               invalid: errors.firstName
             })}
           />
           <span className="red-text">{errors.firstName}</span>

        </div>
        <div className="divided-column">
           {/* <input type="text" placeholder=" Name"/> */}
           <input
             onChange={this.onChange}
             value={this.state.lastName}
             error={errors.lastName}
             id="lastName"
             type="text"
             placeholder=" lastName"
             className={classnames("", {
               invalid: errors.lastName
             })}
           />
           <span className="red-text">{errors.lastName}</span>

        </div>
       
    </div>

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
               invalid: errors.email
             })}
           />
           {/* <label htmlFor="email">Email</label> */}
           <span className="red-text">{errors.email}</span>
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
               invalid: errors.password
             })}
           />
           {/* <label htmlFor="password">Password</label> */}
           <span className="red-text">{errors.password}</span>
        </div>
    </div>

    <div className="div-c">
        {/* <div className="divided-column">
            <input type="text" placeholder="E-mail Adress"/>
        </div> */}
        <div className="divided-column">
            {/* <input type="text" placeholder="Password2"/> */}

            <input
             onChange={this.onChange}
             value={this.state.password2}
             error={errors.password2}
             id="password2"
             type="password"
             placeholder="Password2"
             className={classnames("", {
               invalid: errors.password2
             })}
           />
           {/* <label htmlFor="password2">Confirm Password</label> */}
           <span className="red-text">{errors.password2}</span>
        </div>
    </div>

   
    
    <div className="button-sq fullwidth-sq">
    <button type="submit"
   className="btn btn-large waves-effect waves-light hoverable blue accent-3"
           >
             Sign up
           </button>
        </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>  
</form>
</div>
</Modal>
                )
            );
          }}
        />

 {/* form actions */}
 <FormActions>Log In</FormActions>
</Fragment>
        )
    }
}

//export default RegisterForm

RegisterForm.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });


export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(RegisterForm));
