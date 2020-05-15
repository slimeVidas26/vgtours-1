import React, { Component } from "react";
import Modal from "./Modal";
import FormTitle from '../layout/FormTitle'
import FormActions from '../layout/FormActions'
import LoginForm from "./LoginForm"

 class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
     
    };
  }

  
 
  render() {
    //  let params = new URLSearchParams(this.props.location.search);
    let params = new URLSearchParams(this.props.location.search);

    return (
        params.get("login") && (
        <Modal
        onClick={() => {
            this.props.history.push(this.props.location.pathname);
            
          }}>
         {/* FORM TITLE */}
         <FormTitle> Log In </FormTitle>

        <LoginForm/>
     {/* FORM ACTION */}
      <FormActions>Sign Up</FormActions>
     
        
        </Modal>
      )
     );
  }
}

export default LoginPage;


