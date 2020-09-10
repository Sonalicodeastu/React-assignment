import React from 'react';
import heading from './left.png';
import subheading from'./left.svg';
import './App.css';

function App() {
  return (
    <div className="heading">
      <header className="center">
        <img src={heading} className="heading" alt="heading" />
        <img src={subheading} className="svgimage" alt="subheading"/>
    <span className="label">Address</span><br/>
    <input className="inputField" type="text"/><br/>
    <span className="label">Address (Apt, suite, floor)</span><br/>
    <input className="inputField" type="text"/>
    <div className="halfGrid"> <span className="label">Zipcode</span><br/>
      <input className="inputFieldHalf" type="text"/>
    </div>
    <div className="whole">
      <div className="half-left"> <span className="label">City</span><br/>
        <input className="inputFieldHalf" type="text"/>
      </div>
      <div className="half-right"><span className="label">State</span><br/>
        <input className="inputFieldHalf" type="text"/>
      </div>
    </div>
    <div className="check">
      <input className="checkbox" type="checkbox"/><span className="label">Save my address for future use</span>
    </div>
    <button className="borderbutton">Send kit</button>
      </header>
    </div>
  );
}

export default App;
