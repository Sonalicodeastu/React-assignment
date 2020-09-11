import React, { Component } from 'react';
import heading from './left.png';
import subheading from'./left.svg';
import './App.css';


function validate(address, apt, zipcode, city, state) {
  
  return {
    address: address.length === 0, 
    apt: apt.length === 0,
    zipcode: zipcode.length === 0,
    city: city.length === 0, 
    state: state.length === 0  
    
  };
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      address: '',
      apt: '',
      zipcode:'',
      city:'',
      state:'',
      touched: {
        address: false,
        apt: false,
        zipcode:false,
        city:false,
        state:false,
      },
    };
  }
  handleaddressChange = (evt) => {
    this.setState({ address: evt.target.value });
  }
  
  handleaptChange = (evt) => {
    this.setState({ apt: evt.target.value });
  }
  
  handlezipcodeChange = (evt) => {
    this.setState({ zipcode: evt.target.value });
  }
  
  handlecityChange = (evt) => {
    this.setState({ city: evt.target.value });
  }
  handlestateChange = (evt) => {
    this.setState({ state: evt.target.value });
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }


  render(){
    //const { errors } = this.state;
    const errors = validate(this.state.address, this.state.apt,this.state.zipcode,this.state.city,this.state.state);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      
      return hasError ? shouldShow : false;
    };
  return (
    <div className="heading">
      <header className="center">
      <form  noValidate>
        <img src={heading} className="heading" alt="heading" />
        <img src={subheading} className="svgimage" alt="subheading"/>
    <span className="label">Address</span><br/>
    <input className="inputField" type="text" onChange={this.handleaddressChange} onBlur={this.handleBlur('address')} value={this.state.address} required />
    <span className={shouldMarkError('address') ? "error" : "hidden"}>This value is required error</span><br/>
    <span className="label">Address (Apt, suite, floor)</span><br/>
    <input className="inputField"  type="text" onChange={this.handleaptChange} onBlur={this.handleBlur('apt')} value={this.state.apt} required/>
    <span className={shouldMarkError('apt') ? "error" : "hidden"}>This value is required error</span><br/>
    <div className="halfGrid"> <span className="label">Zipcode</span><br/>
      <input className="inputFieldHalf" type="text" onChange={this.handlezipcodeChange} onBlur={this.handleBlur('zipcode')} value={this.state.zipcode}/>
      <span className={shouldMarkError('zipcode') ? "error" : "hidden"}>This value is required error</span><br/>
    </div>
    <div className="whole">
      <div className="half-left"> <span className="label">City</span><br/>
        <input className="inputFieldHalf" type="text" onChange={this.handlecityChange} onBlur={this.handleBlur('city')} value={this.state.city}/>
        <br/><span className={shouldMarkError('city') ? "error" : "hidden"}>This value is required error</span><br/>
      </div>
      <div className="half-right"><span className="label">State</span><br/>
        <input className="inputFieldHalf" type="text" onChange={this.handlestateChange} onBlur={this.handleBlur('state')} value={this.state.state}/>
        <br/><span className={shouldMarkError('state') ? "error" : "hidden"}>This value is required error</span><br/>
      </div>
    </div>
    <div className="check">
      <input className="checkbox" type="checkbox"/><span className="label">Save my address for future use</span>
    </div>
    <button type="submit" className="borderbutton">Send kit</button>
    </form>
      </header>
    </div>
  );
}
}

export default App;
