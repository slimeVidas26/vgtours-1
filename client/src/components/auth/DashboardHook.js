import React from 'react';
import AuthContextProvider from '../../contexts/AuthContext';
import Welcome from './Welcome'


const DashboardHook = () => {

    return ( 
        
    <AuthContextProvider>
        <Welcome/>
    </AuthContextProvider>
     );
}
 
export default DashboardHook;