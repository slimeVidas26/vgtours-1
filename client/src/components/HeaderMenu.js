import React, { Component } from "react";
import { Link } from "react-router-dom";
// import DefaultGrid from '../features/DefaultGrid'
import FeaturesSubMenu from './FeaturesSubMenu'
//   import '../assets/less/header.css'


const HeaderMenu = (props) =>{
    console.log("props in headerMenu" , props)

        return (
            <div className="item menu-default burger-mobile-sidemenu burger-tablet-sidemenu sidemenu-open-right icons-left profile-priority slide-out-sq dimmed flexMenu dropdown-open-right" data-burger="menu01">
    
    <ul className="main-menu">

              
        <li><Link to="/becomeavendor" className="item">
                <span>Become a Vendor</span>
            </Link>
        </li>
        
        {/* <li className="has-submenu">
            <Link to="#" className="item" >
                <span>Features</span>
            </Link>

          <FeaturesSubMenu/>
        </li> */}
        
        {/* <li>
        <Link to="/signup" className="item">
            <span>Sign Up</span>
            </Link>
            </li>  */}
    

            {/* <li>
            <Link to={{ pathname: "/", search: "signup=true" }} className="item">
            <span>Sign Up</span>
            </Link>
            </li>  */}

            {/* <li>
                 <Link to="/signup" className="item">
                <span>Sign Up</span>
            </Link>
           </li> */}

           <li>
 
                 <Link to="/connect" className="item">
                {/* <Link to={{ pathname: "/", search: "all=true" }} className="item"> */}
                <span>Connect</span>
            </Link>
           </li>
        
            {/* <li>
            <Link to="/login" className="item">
            <span>Log In</span>
            </Link>
            </li>  */}

            {/* <li>
            <Link to={{ pathname: "/", search: "login=true" }} className="item">
            <span>Log In</span>
            </Link>
            </li>  */}

             {props.isAuthenticated ? 
             ( <li>
            <Link to={{ pathname: "/", search: "signin=true" }} className="item">
            <span>Sign Out</span>
            </Link>
            </li> )
             :
             (
                <li>
            <Link to={{ pathname: "/", search: "signin=true" }} className="item">
            <span>Sign In</span>
            </Link>
            </li> 
             )
             } 
            

           
    </ul>
    </div>
    
        )
    }
    

export default HeaderMenu


