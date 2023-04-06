import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//jsx is syntax entension ojf JS
// it allows us to write something that looks like HTNL inside JS
class App extends Component {
  constructor(){
    super();
    this.state= {
      usersData: [],
   
    }
   //console.log(" I am one :)")
  }
      /* mount - firsttime a component gets placed onto the DOM */
  componentDidMount() {
   // console.log("I am three :)")
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((users) => this.setState(()=>{
      return {usersData : users}
    }))

   }

 
  render(){
    //console.log("I am two :)")
     //key props
    return (
      <div className="App">
           <input 
           className="searchBox"
           type="search"
           placeholder='search users here'
           onChange={(event)=>{
            //console.log("event.target.value",event.target.value)
            const searchVal= event.target.value.toLocaleLowerCase()
            const filteredUsers= this.state.usersData.filter((user)=>{ // 10
              return user.name.toLocaleLowerCase().includes(searchVal)
            }) 
            console.log("filteredUsers",filteredUsers)

            this.setState(()=>{
              return {usersData : filteredUsers}// 2
            },
            ()=>{
              console.log("this.state.userData",this.state.usersData)
            })
           }}
           
           />

        {
        
          this.state.usersData.map((user,id)=>{
            return <h1 key={user.id}>{user.name}</h1>

          })


        }
      


    
      </div>
      
    
    );
  }
 
}

export default App;
