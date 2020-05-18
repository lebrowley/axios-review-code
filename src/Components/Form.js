import React, {Component} from 'react';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            make: '',
            model: '',
            year: 0,
            color: '',
            price: 0
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

//public class field syntax aka arrow method
    addNewCar = () => {
        const {make, model, year, color, price} = this.state
        //destructure these keys off of this.state up above
        const newCar = {make, model, year, color, price};
        //the above is shorthand for the one below- when the key and value are the same, you can just write them once
        // const newCar ={make: make}
        //this is your body object
        this.props.addVehicle(newCar);
    }


    render(){
        const {make, model, year, color, price} = this.state
        return(
            <div>
                <input name='make' value={make} onChange={e => this.handleChange(e)} placeholder='make'/>
                <input name='model' value={model} onChange={e => this.handleChange(e)} placeholder='model'/>
                <input name='year' value={year} onChange={e => this.handleChange(e)} placeholder='year' type='number'/>
                <input name='color' value={color} onChange={e => this.handleChange(e)} placeholder='color'/>
                <input name='price' value={price} onChange={e => this.handleChange(e)} placeholder='price' type='number'/>
                <button onClick={this.addNewCar}>Add Vehicle</button>
            </div>
        )
    }
}