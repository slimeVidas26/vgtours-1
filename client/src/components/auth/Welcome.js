import React , {useContext , useEffect} from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import {withRouter} from 'react-router-dom'
import jwt_decode from "jwt-decode";

function Welcome(props) {

    const { User} = useContext(AuthContext);
    const {handle} = props.match.params
    console.log("handle",{handle})
   const decoded = jwt_decode(handle);

useEffect(()=>{
    decoded.isAuthenticated = true
})
console.log("decodedIn Welcome" , decoded)

     console.log("User welcome ", User )
    return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
        
        <div className="row">
          <div className="col s12 center-align">
            <h4>
               <b>Hey there,</b> {decoded.name}

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
              //onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    )
}

export default withRouter(Welcome)
