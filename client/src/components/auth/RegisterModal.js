    import React , {useState , useContext} from 'react'; 
    import classnames from "classnames";
    import Modal from './Modal'
    import FormTitle from '../layout/FormTitle';
    import { AuthContext } from '../../contexts/AuthContext';
    import { withRouter} from "react-router-dom";

     
  const RegisterModal = (props) => {
    const {registerUser , User} = useContext(AuthContext);

    const [firstName , setFirstName] = useState("")
    const  [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [password2 , setPassword2] = useState("")
    const [errors , setErrors] = useState("");

    

    const onSubmit = e => {
        e.preventDefault();
    const newUser = {
          firstName,
          lastName,
          email,
          password,
          password2
        };
    console.log("newUser" , newUser);
    console.log("props.history",props.history)
    // registerUser function will fired in actions/authAction.js
    registerUser(newUser,props.history); 
      };
      return ( 
          <Modal
                onClick={() => {
                  props.history.push(props.match.url);
                }}>
                
               {/* FORM REGISTER */}
               <FormTitle>  Connect Now </FormTitle>
<div className="content">
<form noValidate onSubmit={onSubmit}>

  
       <div className="div-c inline-2">
        <div className="divided-column">
           <input
             onChange={(e)=>setFirstName(e.target.value)}
             value={firstName}
             error={User[0].errors.firstName}
             id="firstName"
             type="text"
             placeholder=" firstName"
             className={classnames("", {
               invalid: User[0].errors.firstName
             })}
           />
           <span className="red-text">{User[0].errors.firstName}</span>

        </div>
        <div className="divided-column">
           {/* <input type="text" placeholder=" Name"/> */}
           <input
             onChange={(e)=>setLastName(e.target.value)}
             value={lastName}
             error={User[0].errors.lastName}
             id="lastName"
             type="text"
             placeholder=" lastName"
             className={classnames("", {
               invalid: User[0].errors.lastName
             })}
           />
           <span className="red-text">{User[0].errors.lastName}</span>

        </div>
       
    </div>

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
               invalid: User[0].errors.email
             })}
           />
           <span className="red-text">{User[0].errors.email}</span>
        </div>
        <div className="divided-column">

            <input
             onChange={(e)=>setPassword(e.target.value)}
             value={password}
             error={User[0].errors.password}
             id="password"
             type="password"
             placeholder="Password"
             className={classnames("", {
               invalid: User[0].errors.password
             })}
           />
           {/* <label htmlFor="password">Password</label> */}
           <span className="red-text">{User[0].errors.password}</span>
        </div>
    </div>

    <div className="div-c">
        {/* <div className="divided-column">
            <input type="text" placeholder="E-mail Adress"/>
        </div> */}
        <div className="divided-column">
            {/* <input type="text" placeholder="Password2"/> */}

            <input
            onChange={(e)=>setPassword2(e.target.value)}
             value={password2}
             error={User[0].errors.password2}
             id="password2"
             type="password"
             placeholder="Password2"
             className={classnames("", {
               invalid: User[0].errors.password2
             })}
           />
           {/* <label htmlFor="password2">Confirm Password</label> */}
           <span className="red-text">{User[0].errors.password2}</span>
        </div>
    </div>

   
    
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
</Modal>
       );
  }
   
  export default withRouter(RegisterModal);   
     
     
     
     