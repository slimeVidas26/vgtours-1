import React , {Component} from 'react'
import { Link , withRouter} from "react-router-dom";
import HeaderMenu from './HeaderMenu'
//   import '../assets/less/header.css'

//import images
 import logo_mybnb_transparent from '../assets/images/logo-mybnb-transparent.png';
 import logo_mybnb_transparent2x from '../assets/images/logo-mybnb-transparent@2x.png';
import logo_mybnb from '../assets/images/logo-mybnb.png';
import logo_mybnb2x from '../assets/images/logo-mybnb@2x.png';
import { JsContext } from '../contexts/JsContext';


class Header extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            // headerTransparent : "header-transparent" ,
            // isTransparent : "is-transparent"
        }
    }

    componentDidMount(){
        switch (this.props.location.pathname) {
            case "/becomeavendor":
                const header = document.getElementsByClassName('header');
                      header.classList.add(...this.state)
                      //header.classList.add(this.state.isTransparent)
                break;
            default:
                break;
        }  
    }
    
   render(){
    return (
        <JsContext.Consumer>{(context)=>{
        context.scriptsArray.map((item , index)=>{
       if(index === 0){
        return context.loadScriptHead(`/assets/library/${item}`)
       }
       else { 
        return context.loadScriptBody(`/assets/library/${item}`)
       }
    })
    
            return (
                <header className="header-section ths header-shadow header-sticky header-slide-up equal-tablet-header-items equal-mobile-header-items header-transparent is-transparent">
        <div className="header-content">
        
        
        <div className="ui container grid">
            <div className="header-item header-left flex-order-tablet-second flex-order-mobile-second flex-grow-tablet-true flex-grow-mobile-true">
                 
        <Link to="homepage.html" className="logo item">
        <img  src={logo_mybnb_transparent} srcSet={`${logo_mybnb_transparent} 1x ,${logo_mybnb_transparent2x} 2x `} alt="mybnb logo" className="logo-transparent"/>
        <img   src={logo_mybnb} srcSet= {`${logo_mybnb} 1x , ${logo_mybnb2x} 2x`} alt="mybnb logo"/>
        
        </Link>
        
        
            </div>
        
            <div className="header-item header-center flex-align-left flex-order-tablet-first flex-order-mobile-first flex-grow-large-desktop-true flex-grow-desktop-true flex-grow-tablet-false flex-grow-mobile-false">
               
            </div>
            
            <div className="header-item header-right flex-order-tablet-third flex-order-mobile-third flex-shrink-true flex-align-right">
                
                {/* <!-- Sidemenu Trigger --> */}
                <a className="sidemenu-trigger close-sq hamburger hamburger-spin item hidden-desktop hidden-large-desktop" data-trigger-for="menu01">
                   
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                </a>      
        <HeaderMenu/>    
            </div>
        </div>
        </div>   
        </header>
            )
            }}

        </JsContext.Consumer>

       
            )
   }
   
}

export default withRouter(Header)



