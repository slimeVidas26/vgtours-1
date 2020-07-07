import React from 'react';
import Modal from "./Modal";
import FormTitle from '../layout/FormTitle'
import FormActions from '../layout/FormActions'
import SignInForm from './SignInForm'
import AuthContextProvider from '../../contexts/AuthContext';

const SignInModal = () => {
    return ( 
        <Modal
        onClick={() => {
            this.props.history.push(this.props.location.pathname);
            
          }}>
         {/* FORM TITLE */}
         <FormTitle> Sign In </FormTitle>
          <AuthContextProvider>
          <SignInForm/>
          </AuthContextProvider>
     {/* FORM ACTION */}
      <FormActions>Sign Up</FormActions>
        </Modal>
     );
}
 
export default SignInModal;
