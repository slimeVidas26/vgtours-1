import React from 'react'
import {withRouter} from 'react-router-dom'

function FormActions(props) {
    return (
       <div className="actions">
         <div className="border-container">
             <div className="button-sq link-sq modal-ui-trigger">Don’t have an account?</div>
    
             <div  onClick={() => {props.history.push("signup") }} 
                 className="button-sq link-sq login-sq modal-ui-trigger">
                 {/* Sign Up */}
                 {props.children}
                 <i className="icon icon-person-add-1"></i>
             </div>
         </div>
     </div>
    )
}

export default withRouter(FormActions)
