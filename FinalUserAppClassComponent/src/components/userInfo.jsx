import { Component } from "react";


import './userInfo.css'
class UserInfo extends Component{
  
    
    render(){
        const {userData}= this.props
        return (
            <div className="cardContainer">
                {userData.map((user)=>{
                    return (
                        <div className="cardContent"> 
                            <p>{user.first_name} {user.last_name}</p>
                            <p>{user.email}</p>
                            <img alt="user" lassName="userPic" src={user.avatar}/>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default UserInfo;