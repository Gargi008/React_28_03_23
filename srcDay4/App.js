import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//jsx is syntax entension ojf JS
// it allows us to write something that looks like HTNL inside JS
class App extends Component {
  constructor(){
    super();
    this.state= {
      name: {firstName:"Gargi",lastName:"Chakraborty"},
      place: "kolkata",
    }
  }
  render(){
    const clickHandler=()=>{
      this.setState({place:"Bangalore",name:{firstName: 'Surela'}})
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name.firstName} {this.state.name.lastName} is from {this.state.place}
          </p>
          <button onClick={()=>{
            clickHandler()
           // this.state.place="Bangalore" // object in the memory is same although the values are different
           //this.setState({place:"Bangalore",name:"Surela"}) //shallow merge
           //setState updates state into an entirely diffrent object

           /* const obj1= {name :"Gargi"}
undefined
console.log(obj1)
VM238:1 {name: 'Gargi'}
undefined
const obj2=obj1
undefined
console.log(obj2)
VM344:1 {name: 'Gargi'}
undefined
console.log(obj1===obj2)
VM441:1 true
undefined
obj1.name="Gargiii"
'Gargiii'
obj1
{name: 'Gargiii'}
obj2
{name: 'Gargiii'}
const obj3= Object.ass
undefined
const obj3= Object.assign({},obj1)
undefined
obj3
{name: 'Gargiii'}
obj1===obj3
false */
          }}>Change</button>

        </header>
      </div>
    );
  }
 
}

export default App;
