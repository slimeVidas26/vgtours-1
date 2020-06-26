import React, { useContext , useState , useEffect } from 'react'
import classnames from "classnames";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { loginUser } from "../../actions/authActions";
import { withRouter} from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';




 const SignInForm  = (props)=> {

  const {signInUser , User} = useContext(AuthContext);

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

 

  

   
 
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
                 error={User[0].errors.email}
                 id="email"
                 type="email"
                 placeholder="E-mail Adress"
                 className={classnames("", {
                   invalid: User[0].errors.email || User[0].errors.emailnotfound
                 })}
               />
               {/* <label htmlFor="email">Email</label> */}
               <span className="red-text">
                 {User[0].errors.email}
                 {User[0].errors.emailnotfound}
               </span>
           </div>
           <div className="divided-column">
               {/* <input type="text" placeholder="Password"/> */}

               <input
               onChange={(e)=>setPassword(e.target.value)}
                 value={password}
                 error={User[0].errors.password}
                 id="password"
                 type="password"
                 placeholder="Password"
                 className={classnames("", {
                   invalid: User[0].errors.password || User[0].errors.passwordincorrect
                 })}
               />
               {/* <label htmlFor="password">Password</label> */}
               <span className="red-text">
                 {User[0].errors.password}
                 {User[0].errors.passwordincorrect}
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
