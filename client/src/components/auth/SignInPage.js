import React, { Component } from "react";

import SignInModal from "./SignInModal"
import AuthContextProvider from "../../contexts/AuthContext";

 class SignInPage extends Component {

  constructor() {
    super();
    this.state = {
     
    };
  }

  render() {
    //  let params = new URLSearchParams(this.props.location.search);
    let params = new URLSearchParams(this.props.location.search);
    return (
        params.get("signin") && (
          <AuthContextProvider>
          <SignInModal />
          </AuthContextProvider>
      
      )
     );
  }
}

export default SignInPage;


