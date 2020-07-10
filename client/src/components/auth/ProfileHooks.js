import React from 'react'
import UserInfoHooks from './UserInfoHooks'
import AuthContextProvider from '../../contexts/AuthContext';


const ProfileHooks = () => {
    return ( 
        <div>
        {/* <h1>ProfileHooks</h1> */}
         <AuthContextProvider>
         <UserInfoHooks />
         </AuthContextProvider>
         
        </div>
       
     );
}
 
export default ProfileHooks;