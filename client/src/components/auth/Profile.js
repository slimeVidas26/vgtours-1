import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { socialLoginUser , socialLogoutUser } from "../../actions/authActions";
import { withRouter, Switch} from "react-router-dom";
import Loader from 'react-loader-spinner'

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
        
      }

    

      formatUser(obj){
         //const obj = {a:1 , b:2 , c:3}
        // for (const [ key, value ] of Object.entries(x)) {
        //   // do something with `key` and `value`
        //   console.log(key , value)
        //   console.log("length" , Object.length)
        //   return `${key} ${value}`
          // const k = Object.keys(obj);
          // console.log("k" , k)
          // const v = Object.values(obj);
          // console.log("v" , v)
           const userEntries = Object.entries(obj);
           console.log("userEntries" , userEntries)
           
          // console.log("e" , e)
          // console.log(typeof(e))
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

          
            
      

     

      // 
       getProfileNetworkUser() {

        const {handle} = this.props.match.params
        console.log("handle",{handle})
        const { user } = this.props.auth;
        console.log("user" , user)
        switch (handle) {
          
          case GOOGLE:
            return (
              this.formatUser(user)  
           );

           case AMAZON:
            return (
              this.formatUser(user)  
           );

            case TWITTER:
              return (
                this.formatUser(user)  
             );
            // return (
              
            //  <div>
            //       <h4>
            //         <b>Hey there,</b> {user.name} <br/>
            //         <b>Your ID is : ,</b> {user._id} <br/>
            //         <b>Your TwitterId  is : ,</b> {user.twitterId} <br/>
            //         <b>Your screenName  is : ,</b> {user.screenName} <br/>
            //         <b>Date  is : ,</b> {user.date} <br/>
            //         <img src={user.thumbnail} alt=""/>

            //         <p className="flow-text grey-text text-darken-1">
            //           You are logged into vg-tours{" "}
            //           <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
            //         </p>
            //       </h4>
            //       </div>
            // );

            case FACEBOOK:
              return (
                this.formatUser(user)  
             );
            // return (
            //  <div>
            //       <h4>
            //         <b>Your displayName : </b> {user.displayName} <br/>
            //         <b>Your ID is :</b> {user._id} <br/>
            //         <b>Your facebookId  is :</b> {user.facebookId} <br/>
            //         <b>Your location  is :</b> {user.location} <br/>
            //         <b>Date  is :</b> {user.date} <br/>
            //         <b>provider  is : </b> {user.provider} <br/>
            //         <img src={user.thumbnail} width = "100" alt="facebook thumbnail"/>


            //         <p className="flow-text grey-text text-darken-1">
            //           You are logged into vg-tours{" "}
            //           <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
            //         </p>
            //       </h4>
            //       </div>
            // );

            case SPOTIFY:
              return (
                this.formatUser(user)  
             );
            // return (
            //  <div>
                    
            //         <h4>
            //           <b>Hey there,</b> {user.displayName} <br/>
            //           <b>Your userName is : </b> {user.userName} <br/>
            //           <b>Your ID is : </b> {user._id} <br/>
            //           <b>Your spotifyId  is : </b> {user.spotifyId} <br/>
            //           <b>Your country  is : </b> {user.country} <br/>
            //           <b>Date  is : </b> {user.date} <br/>
            //           <b>provider  is : </b> {user.provider} <br/>
            //           <img src={user.thumbnail} width = "100" alt=""/>
            //           <p className="flow-text grey-text text-darken-1">
            //             You are logged into vg-tours{" "}
            //             <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
            //           </p>
            //         </h4>
            //         </div>
            // );
            case INSTAGRAM:
              return (
                this.formatUser(user)  
             );
            // return (
            // <div>
                    
            //         <h4>
            //           <b>Hey there,</b> {user.displayName} <br/>
            //           <b>Your userName is : </b> {user.userName} <br/>
            //           <b>Your ID is : </b> {user._id} <br/>
            //           <b>Your instagramId  is : </b> {user.instagramId} <br/>
            //           <b>Your country  is : </b> {user.country} <br/>
            //           <b>Date  is : </b> {user.date} <br/>
            //           <b>provider  is : </b> {user.provider} <br/>
            //           <img src={user.thumbnail} width = "100" alt=""/>
            //           <p className="flow-text grey-text text-darken-1">
            //             You are logged into vg-tours{" "}
            //             <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
            //           </p>
            //         </h4>
            //         </div>
            // );
            case GITHUB:
              return (
                this.formatUser(user)  
             );
            // return (
            //         <div>
            //         <h4>
            //           <b>Hey there,</b> {user.displayName} <br/>
            //           <b>Your userName is : </b> {user.userName} <br/>
            //           <b>Your ID is : </b> {user._id} <br/>
            //           <b>Your githubId  is : </b> {user.githubId} <br/>
            //           <b>Your name  is : </b> {user.name} <br/>
            //           <b>Your email  is : </b> {user.email} <br/>
            //           <b>Date  is : </b> {user.date} <br/>
            //           <b>provider  is : </b> {user.provider} <br/>
            //           <img src={user.thumbnail} width = "100" alt=""/>
            //           <p className="flow-text grey-text text-darken-1">
            //             You are logged into vg-tours{" "}
            //             <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
            //           </p>
            //         </h4>
            //         </div>
            // );
         
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
        const { isAuthenticated  } = this.props.auth;

          return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
              
              <div className="row">
                <div className="col s12 center-align">
                   {!isAuthenticated ? (
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
                  {this.getProfileNetworkUser()}
                  <p className="flow-text grey-text text-darken-1">
                      You are logged into vg-tours{" "}
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
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          
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
