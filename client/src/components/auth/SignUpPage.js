import React, { Component } from 'react'
import Modal from './Modal'
import classnames from "classnames";
import { Link, withRouter , Route  , useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import FormTitle from '../layout/FormTitle'
import FormActions from '../layout/FormActions'
import SignUpWith from '../layout/SignUpWith'



//import images
import icon_google_plus from '../../assets/images/icon-google-plus.svg';


 class SignUpPage extends Component {

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

        console.log(this.props.history + ' from signUpWithMail')

    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
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
this.props.registerUser(newUser, this.props.history); 
  };
    render(){
        const { errors } = this.state;
        let params = new URLSearchParams(this.props.location.search);

        console.log(this.props.match.url)
        //let params = new URLSearchParams(this.props.location.search);
        return (
            //  params.get("signup") && (
             <Modal
             onClick={() => {
            {/* this.props.history.push(this.props.location.pathname); */}
            window.location.href = "/";
              {/* location.pathname.split('/').slice(0,-1); */}
            
            
          }}
             >

            
            {/* FORM TITLE */}
              <FormTitle> Sign Up Now </FormTitle>

             
    
               <div className="content">
               <Link to={{ pathname: "/signup", search: "mail=true" }} className="button-sq fullwidth-sq">
            <i className="icon icon-email-2"></i>
            <span>Sign Up with Email</span>
        </Link>
    
        <Link to="" className="button-sq fullwidth-sq facebook-button">
            {/* <i className="icon icon-logo-facebook2"></i>
            <span>Sign Up with Facebook</span> */}
            <SignUpWith>Sign Up with Facebook</SignUpWith>
        </Link>
    
        <Link to="/api/users/google" className="button-sq fullwidth-sq google-button">
            <img src={icon_google_plus} alt=""/>
            <span>Sign Up with Google</span>
        </Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
    </div>

    

    <Route
    
          
          render={() => {
            return (
                params.get("mail") && (
              <Modal
                onClick={() => {
                  this.props.history.push(this.props.match.url);
                }}
              >
               
               
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
     
         {/* <div className="div-c inline-3 one-label">
             <label>Birthday</label>
             <div className="divided-column">
                 <select name="dropdown"  className="dropdown">
                     <option value="1">01</option>
                     <option value="2">02</option>
                     <option value="3">03</option>
                     <option value="4">04</option>
                     <option value="5">05</option>
                     <option value="6">...</option>
                 </select>
             </div>
             <div className="divided-column">
                 <select name="dropdown"  className="dropdown">
                     <option value="1">Jan</option>
                     <option value="2">Feb</option>
                     <option value="3">Mar</option>
                     <option value="4">Apr</option>
                     <option value="5">May</option>
                     <option value="6">...</option>
                 </select>
             </div>  
             <div className="divided-column">
                 <select name="dropdown"  className="dropdown">
                     <option value="1">1985</option>
                     <option value="2">1986</option>
                     <option value="3">1987</option>
                     <option value="4">1988</option>
                     <option value="5">1989</option>
                     <option value="6">...</option>
                 </select>
             </div>     
         </div>  */}
         
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

      {/* form actions */}
      <FormActions>Log In</FormActions>
     
    
              </Modal>
                )
            );
          }}
        />


    <FormActions>Log In</FormActions>
    
    
            </Modal>
            )
    
        // )
    }
    
}

SignUpPage.propTypes = {
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
  )(withRouter(SignUpPage));

