import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//jsx is syntax entension ojf JS
// it allows us to write something that looks like HTNL inside JS
class App extends Component {
  constructor(){
    super();
    this.state= {
      name: "random"
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name}
          </p>
        </header>
      </div>
    );
  }
 
}

export default App;
