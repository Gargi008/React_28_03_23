import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import UserInfo from './components/userInfo';
import SearchBar from './components/searchBar';

class App extends Component {
  constructor(){
    super()
    this.state={
      userDetails : [],
      searchText: "" 

    }
  }

  componentDidMount(){
    fetch("https://reqres.in/api/users/")
    .then(res=>res.json())
    .then(users=>this.setState(()=>{
      return {userDetails:users.data}
    }))
  }

  onUserSearch=(event)=>{
    const searchKey= event.target.value.toLocaleLowerCase()
    console.log("searchKey---",searchKey)
    this.setState(()=>{
      return {searchText:searchKey}
    })

  }

  render(){
    console.log("this.state.userDetails",this.state.userDetails)
    const filteredUserData= this.state.userDetails.filter((user)=>{
      return user.first_name.toLocaleLowerCase().includes(this.state.searchText) ||
      user.last_name.toLocaleLowerCase().includes(this.state.searchText)

      

    })
   
    const newText="SearchBar"
    return (
      <div className="App">

        <h1 className="title" style={{fontSize: '40px'}}>My User App</h1>
      
        <SearchBar onSearchHandler={this.onUserSearch} className={newText} placeHolder="Search for your user"/>
     
        <UserInfo userData={filteredUserData}/>
       



       
        
       
      </div>
    );

  }
 
}

export default App;
