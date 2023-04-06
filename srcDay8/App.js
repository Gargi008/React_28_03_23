import {Component} from 'react';
import CardData from './components/card-data.jsx'
import './App.css';
//jsx is syntax entension ojf JS
// it allows us to write something that looks like HTNL inside JS
class App extends Component {
  constructor(){
    super();
    this.state= {
      usersData: [],
      searchText: '',
   
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
   onSearch=(event)=>{
    const searchText= event.target.value.toLocaleLowerCase()
    this.setState(()=>{
      return {searchText}// 2
    })
   }

 
  render(){
    //console.log("I am two :)")
     //key props

     


     const filteredUsers= this.state.usersData.filter((user)=>{ // 10
      return user.name.toLocaleLowerCase().includes(this.state.searchText)
    }) 
    return (
      <div className="App">
           <input 
           className="searchBox"
           type="search"
           placeholder='search users here'
           onChange={this.onSearch}
           />
           <CardData userinfo={filteredUsers}/>
        
          
        
      
      </div>
      
    
    );
  }
 
}

export default App;
