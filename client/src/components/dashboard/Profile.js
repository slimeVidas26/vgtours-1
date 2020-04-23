import React, { Component } from 'react'

 class Profile extends Component {
    render() {
        return (
            <div>
               <img src="<% = user.thumbnail  %>" />
            </div>
        )
    }
}

export default Profile
