import React, {Component} from 'react';
import axios from 'axios';
//as far as order of imports, it's nice to organize similar imports. like here, above is all of the dependencies/packages imports. below are the internal imports from other components in the project. 
//organization improves readability!!
import Form from './Components/Form';
import VehicleDisplay from './Components/VehicleDisplay';
import './App.css';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      vehicles: []
    }

    this.addVehicle = this.addVehicle.bind(this);
  }

  //componentDidMount will fire as soon as the JSX has been mounted on the screen
  componentDidMount(){
    axios.get("https://joes-autos.herokuapp.com/api/vehicles")
    .then(res => {
      // console.log(res)
      this.setState({vehicles: res.data})
    })
    //response is often abbreviated to res
    //console.log res to see what you get back; what is the response the api is giving back
    .catch(err => console.log(err))
  }

//the only way to get data back up to app.js is through an event
//because this is going between components, this method must be bound
//if you wrote addVehicle as an arrow function, you wouldn't need to use bind method, but just use bind method because it keeps things clearly demarcated as to what is going on
addVehicle(newCar){
  axios.post("https://joes-autos.herokuapp.com/api/vehicles", newCar)
    .then(res => {
      this.setState({vehicles: res.data.vehicles})
    })
    .catch(err => console.log(err))
}

  render(){
    console.log(this.state.vehicles)
    //this console.log will show us if things are being set in state properly; in the console, after the axios request is set up and assigned correctly, it will show the data assigned to the vehicles array in state
    const mappedVehicles = this.state.vehicles.map((vehicle, i) => (
      <VehicleDisplay key={i} vehicle={vehicle}/>
      //key is used when mapping over items because you're making duplicate jsx so react needs to know which one you mean>> eh?
    ))
    return (
      <div className="App">
        WR1 HTTP/Axios Review
        <Form addVehicle={this.addVehicle}/>
        {mappedVehicles}
      </div>
    )
  }
}

export default App;


// https://joes-autos.herokuapp.com/api/
//this is the base url to use in axios requests

