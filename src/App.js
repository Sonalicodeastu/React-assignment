import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import _ from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kind: "",
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://tw-frontenders.firebaseio.com/advFlightSearch.json")
      .then(({ data }) => {
        this.setState({
          flights: data,
        });
      })
      .catch((err) => {});
  }
  flights = () => {
    console.log(this.state.flights);
    return _.map(this.state.flights, (plane) => {
      return (
        <li className="list-group-item" key={plane.name}>
          {plane.arrivalTime} {plane.date} {plane.departureTime}
          {plane.destination} {plane.flightNo} {plane.name} {plane.origin}
          {plane.price}
        </li>
      );
    });
  };

  render() {
    console.log(this.state.array);
    return (
      <div>
        <h3>Flights</h3>
        <ul className="list-group">{this.flights()}</ul>
      </div>
    );
  }
}

export default App;
