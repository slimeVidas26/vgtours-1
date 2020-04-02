import React, { Component } from "react";
import { Link } from "react-router-dom";
// import DefaultGrid from '../features/DefaultGrid'
import FeaturesSubMenu from './FeaturesSubMenu'


class  HeaderMenu extends Component {
constructor(props) {
   

    super(props)
    console.log(this.props)
    // console.log('header menu')

    this.state = {
       
    }
    // this.handleClick = this.handleClick.bind(this);
}



       

    render(){
        return (
            <div className="item menu-default burger-mobile-sidemenu burger-tablet-sidemenu sidemenu-open-right icons-left profile-priority slide-out-sq dimmed flexMenu dropdown-open-right" data-burger="menu01">
    
    <ul className="main-menu">

   
    <li><Link to="/profile" className="item">Go To Profile</Link></li>
      
                    
        <li><Link to="/becomeavendor" className="item">
                <span>Become a Vendor</span>
            </Link>
        </li>
        
        <li className="has-submenu">
            <Link to="#" className="item" >
                <span>Features</span>
            </Link>

          {/* Features sub menu */}
          <FeaturesSubMenu/>
        </li>
        
        <li>
        <Link to="/signup" className="item">
            <span>Sign Up</span>
            </Link>
            </li> 
    
        
            <li>
            <Link to={{ pathname: "/login", search: "?login=true" }} className="item">
            <span>Log In</span>
            </Link>
            </li> 

    
    </ul>
    </div>
    
        )
    }
    
}

export default HeaderMenu


