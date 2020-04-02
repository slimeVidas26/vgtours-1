import React, { Component } from "react";
import Modal from "./Modal";
import classnames from "classnames";




export default class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  render() {
    let params = new URLSearchParams(this.props.location.search);
    const { errors } = this.state;

    return (
      params.get("login") && (
        <Modal
          onClick={() => {
            this.props.history.push(this.props.location.pathname);
          }}
        >

        <i className="icon icon-close close-modal"></i>
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
    );
  }
}
