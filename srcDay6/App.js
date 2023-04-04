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

  }
      /* mount - firsttime a component gets placed onto the DOM */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((users) => this.setState(()=>{
      return {usersData : users}
    }))

   }

 
  render(){
     //key props
    return (
      <div className="App">

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
