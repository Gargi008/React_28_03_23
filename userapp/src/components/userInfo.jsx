import { Component } from "react";


class UserInfo extends Component{
  
    
    render(){
        const {userData}= this.props
        return (
            <div>
                <h1> {userData.map((user)=>{
                    return (
                        <div style={{backgroundColor:"#F08187", padding: 20,margin: 25,width: 450}}>
                            <p>{user.first_name} {user.last_name}</p>
                           
                            <p>{user.email}</p>
                            <img src={user.avatar}/>
                        </div>
                    )
                })}
                </h1>
            </div>
        )
    }
}

export default UserInfo;