import { Component } from 'react';

class CardData extends Component {

    render(){
       console.log("this.props----------",this.props)
        const {userinfo} = this.props
        console.log("userinfo",userinfo)
        return(
            <div>
                {
                    userinfo.map((user)=>(<h1>{user.name}</h1>))

                }
                
            </div>
        )
    }
}
export default CardData