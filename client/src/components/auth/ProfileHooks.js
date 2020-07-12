import React from 'react'
import AuthContextProvider from '../../contexts/AuthContext';
import BecomeASocialVendor from '../BecomeASocialVendor'

const ProfileHooks = () => {
    return ( 
        <div>
         <AuthContextProvider>
         <BecomeASocialVendor />
         </AuthContextProvider>
         
        </div>
       
     );
}
 
export default ProfileHooks;