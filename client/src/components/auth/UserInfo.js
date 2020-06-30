import React , {useContext , useEffect} from 'react';
import Loader from 'react-loader-spinner'
import { AuthContext } from '../../contexts/AuthContext';


const UserInfo  = () => {

    const {getProfileSocialUser ,  socialLoginUser ,socialLogoutUser ,  socialUser} = useContext(AuthContext);

    

        useEffect(()=>{
        socialLoginUser();   
        } , [])
    
    return ( 
         <div style={{ height: "75vh" }} className="container valign-wrapper">
              
              <div className="row">
                <div className="col s12 center-align">
                   {socialUser[0].isAuthenticated ? (
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
         />
                ) : ( 
                  <div>
                    <h4>
                        
                  {getProfileSocialUser}
                  
                  <p className="flow-text grey-text text-darken-1">
                      You are logged into vg1-tours{" "}
                      <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                    </p>

                    </h4>
                    </div>
                 )} 
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    onClick={socialLogoutUser}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
     );
}
 
export default UserInfo;