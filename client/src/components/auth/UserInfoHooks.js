import React , {useContext , useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {AuthContext} from '../../contexts/AuthContext'

const UserInfoHooks = () => {
    const {User ,socialLoginUser ,socialLogoutUser ,    onLogoutClick} = useContext(AuthContext)
    console.log("User from userInfoHooks" , User)
    
    useEffect(()=>{
        console.log("toto from useEffect")
        socialLoginUser()
    } , [])
    
    const formatUser = (obj)=>{
        
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
    
    
    return (

        <div style={{ height: "75vh" }} className="container valign-wrapper">
              
              <div className="row">
                <div className="col s12 center-align">
                   {!User.isAuthenticated ? (
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
                  <b>
                  {formatUser(User.user)}
                    </b>
                  <b>Hey there, {User.user.username} <br/></b> 

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
 
export default UserInfoHooks;