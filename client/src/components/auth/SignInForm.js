import React, { useContext , useState , useEffect } from 'react'
import classnames from "classnames";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { loginUser } from "../../actions/authActions";
import { withRouter} from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';




 const SignInForm  = (props)=> {

  const {signInUser , User , error} = useContext(AuthContext);

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

 
useEffect(()=>{
  props.history.push("/dashboard"); 
} , User)
  

   
 
      // componentDidMount() {

      //   if (this.props.auth.isAuthenticated) {
      //     this.props.history.push("/dashboard");
          
      //   }
      // }
    
    //   componentWillReceiveProps(nextProps) {
    //     if (nextProps.auth.isAuthenticated) {
    //       console.log("nextProps.auth.isAuthenticated" , nextProps.auth.isAuthenticated)
    //       this.props.history.push("/dashboard"); // push user to dashboard when they login
    //     }
    // if (nextProps.errors) {
    //       this.setState({
    //         errors: nextProps.errors
    //       });
    //     }
    //   }
    
    
    
    const onSubmit = e => {
        e.preventDefault();
    const userData = {
          email,
          password
        };
    console.log("userData",userData);
    signInUser(userData);
      }
  
        return (
             <div className="content">
          <form noValidate onSubmit={onSubmit}>
          <div className="div-c">
           <div className="divided-column">
               {/* <input type="text" placeholder="E-mail Adress"/> */}

               <input
               onChange={(e)=>setEmail(e.target.value)}
                 value={email}
                 error={error.email}
                 id="email"
                 type="email"
                 placeholder="E-mail Adress"
                 className={classnames("", {
                   invalid: error.email || error.emailnotfound
                 })}
               />
               {/* <label htmlFor="email">Email</label> */}
               <span className="red-text">
                 {error.email}
                 {error.emailnotfound}
               </span>
           </div>
           <div className="divided-column">
               {/* <input type="text" placeholder="Password"/> */}

               <input
               onChange={(e)=>setPassword(e.target.value)}
                 value={password}
                 error={error.password}
                 id="password"
                 type="password"
                 placeholder="Password"
                 className={classnames("", {
                   invalid: error.password || error.passwordincorrect
                 })}
               />
               {/* <label htmlFor="password">Password</label> */}
               <span className="red-text">
                 {error.password}
                 {error.passwordincorrect}
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

        )
    }


// SignInForm.propTypes = {
//     loginUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
//   };
//   const mapStateToProps = state => ({
//     auth: state.auth,
//     errors: state.errors
//   });
  export default 
  (withRouter(SignInForm));
