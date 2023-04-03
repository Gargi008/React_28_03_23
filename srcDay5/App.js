import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//jsx is syntax entension ojf JS
// it allows us to write something that looks like HTNL inside JS
class App extends Component {
  constructor(){
    super();
    this.state= {
      cars: [
        { id:1,
          name: "Skoda"
        },
        { 
          id:2,
          name: "supra"
        },
        { 
          id:3,
          name: "rolls-royce"
        },
        {
          id:4,
          name: "Kia"
        },
        {
          id:5,
          name: "Mustang"
        },

      ]
    /*   car1:{
        name:"Skoda"
      },
      car2:{
        name:"supra"
      },
      car3:{
        name:"rolls-royce"
      },
      car4:{
        name: "Kia"

      },
      car5:{
        name:"mustang"

      }
 */
    }
  }
  render(){
     //key props
    return (
      <div className="App">
        { this.state.cars.filter((val,id)=>val.id%2===0).map(filteredCars=>{
          console.log("filteredCars",filteredCars)
          return <h1 key={filteredCars.name}>{filteredCars.name}</h1>
        })

        }


    
      </div>
      
    
    );
  }
 
}

export default App;
