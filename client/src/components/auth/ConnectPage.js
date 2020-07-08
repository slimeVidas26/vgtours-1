import React, { Component } from 'react'
import Modal from './Modal'
import FormActions from '../layout/FormActions'
import FormTitle from '../layout/FormTitle'
import SignUpWith from '../layout/SignUpWith'
import RegisterForm from './SignUpForm'
import icon_google_plus from '../../assets/images/icon-google-plus.svg';
import SignUpContextProvider  from '../../contexts/SignUpContext'



 class ConnectPage extends Component {

    constructor(props) {
        super(props);
        // console.log(this.props.history + ' from signUpWithMail') 
      }

    render(){
        return (
             <Modal
             onClick={() => {
            window.location.href = "/";
          }} >

            {/* FORM TITLE */}
              <FormTitle> Connect Now </FormTitle>

        <div className="content">
      <SignUpContextProvider>
      <SignUpWith/>
      </SignUpContextProvider>
     
      
       
      
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
    </div>  
               {/* FORM REGISTER */}
            <RegisterForm/>
            <FormActions>Log In</FormActions>
            </Modal>
            
            )
    }   
}
export default ConnectPage

