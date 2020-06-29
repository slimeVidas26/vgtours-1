import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { socialLoginUser , socialLogoutUser } from "../../actions/authActions";
import { withRouter, Switch} from "react-router-dom";
import UserInfo from './UserInfo'

const GOOGLE = "google-auth"
const TWITTER = "twitter-auth"
const FACEBOOK = "facebook-auth"
const SPOTIFY = "spotify-auth"
const INSTAGRAM = "instagram-auth"
const GITHUB = "github-auth"
const AMAZON = "amazon-auth"


export class Profile extends Component {
 
    constructor() {
        super();
        this.state = {
         
        };
        console.log(this.props)
        
      }

    

      formatUser(obj){
        
           const userEntries = Object.entries(obj);
           console.log("userEntries" , userEntries)
          const result = userEntries
          .filter((item , i , arr)=>{
            return arr[i][0] !== "__v" && arr[i][0] !== "isAuthenticated"
          })
          .map(([ key, value ])=>{
             switch (key) {
               case "thumbnail":
                 return <div><img src={value} alt=""/></div>
                
                case "username":
                  return <b>Hey there, {value} <br/></b>
                  case "date":
                  return <b> Date is, {value} <br/></b>
                  case "displayName":
                  return <b>Hey there, {value} <br/></b>
                  case "_id":
                    return <b> your  ID is : {value}<br/> </b>
                    default:
                return <b> your  {key} is : {value}<br/> </b>
             }
          })

          return result;

                            }

        
      
       getProfileNetworkUser = () =>{
        const {handle} = this.props.match.params
        console.log("handle",{handle})
        const { user } = this.props.auth;
        console.log("user" , user)
        switch (handle) {
          
          case GOOGLE:
            case AMAZON:
              case TWITTER:
                case FACEBOOK:
                  case SPOTIFY:
                    case INSTAGRAM:
                      case GITHUB:
            return (
              this.formatUser(user) 
              

           );
          default:
            return "toto";
        }
      }
   
    componentDidMount() {
        this.props.socialLoginUser();
        console.log("this.props.match.params from componentDidMount",this.props)

        }


        onLogoutClick = e => {
            e.preventDefault();
            this.props.socialLogoutUser();
            console.log("this.props.auth",this.props.auth)

          };

    render() {
        //const { isAuthenticated  } = this.props.auth;

          return (
          <UserInfo
          isAuthenticated = {this.props.auth} 
          getProfileNetworkUser = {this.getProfileNetworkUser()}
          onLogoutClick = {this.onLogoutClick} 
           
          />
          );
    }
}

Profile.propTypes = {
    socialLogoutUser: PropTypes.func.isRequired,
    socialLoginUser: PropTypes.func.isRequired,

    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
  });
  export default connect(
    mapStateToProps,
    { socialLoginUser , socialLogoutUser }
  )(withRouter(Profile));
