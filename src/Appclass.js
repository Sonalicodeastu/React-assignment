import React, { Component } from "react";
import heading from "./left.png";
import subheading from "./left.svg";
import "./App.css";
import _ from "underscore";
class App extends Component {
  state = {
    inputs: {
      address: "",
      apt: "",
      zipcode: "",
      city: "",
      state: "",
    },
    errors: {
      address: false,
      apt: false,
      zipcode: false,
      city: false,
      state: false,
    },
    checked: false,
  };
  handleOnChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]: false,
      },
    });
  };

  handleOnBlur = (event) => {
    const { inputs } = this.state;
    if (_.isEmpty(inputs[event.target.name])) {
      this.setState({
        errors: {
          ...this.state.errors,
          [event.target.name]: true,
        },
      });
    }
  };

  enabled = () => {
    const { address, apt, city, zipcode, state } = this.state.inputs;
    return (
      _.isEmpty(address) ||
      _.isEmpty(apt) ||
      _.isEmpty(city) ||
      _.isEmpty(zipcode) ||
      _.isEmpty(state) ||
      !this.state.checked
    );
  };

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    return (
      <div className="heading">
        <header className="center">
          <form noValidate>
            <img src={heading} className="heading" alt="heading" />
            <img src={subheading} className="svgimage" alt="subheading" />
            <div className="container">
              <span className="label">Address</span>
              <br />
              <input
                type="text"
                className={
                  this.state.errors.address
                    ? "inputField form-input-fail"
                    : "inputField"
                }
                name="address"
                value={this.state.inputs.address}
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
                required
              />
              <p className="red">
                {this.state.errors.address ? "This field cannot be Empty" : ""}
              </p>
            </div>
            <div className="container">
              <span className="label">Address (Apt, suite, floor)</span>
              <br />
              <input
                className={
                  this.state.errors.apt
                    ? "inputField form-input-fail"
                    : "inputField"
                }
                type="text"
                name="apt"
                value={this.state.inputs.apt}
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
                required
              />
              <p className="red">
                {this.state.errors.apt ? "This field cannot be Empty" : ""}
              </p>
            </div>

            <div className="halfGrid">
              {" "}
              <span className="label">Zipcode</span>
              <br />
              <input
                className={
                  this.state.errors.zipcode
                    ? "inputField form-input-fail"
                    : "inputField"
                }
                type="Text"
                name="zipcode"
                value={this.state.inputs.zipcode}
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
              />
              <p className="red">
                {this.state.errors.zipcode ? "This field cannot be Empty" : ""}
              </p>
            </div>

            <div className="whole">
              <div className="half-left">
                {" "}
                <span className="label">City</span>
                <br />
                <input
                  className={
                    this.state.errors.city
                      ? "inputField form-input-fail"
                      : "inputField"
                  }
                  type="Text"
                  name="city"
                  value={this.state.inputs.city}
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
                />
                <br />
                <p className="red-city">
                  {this.state.errors.city ? "This field cannot be Empty" : ""}
                </p>
              </div>
              <div className="half-right">
                <span className="label">State</span>
                <br />
                <input
                  className={
                    this.state.errors.state
                      ? "inputField form-input-fail"
                      : "inputField"
                  }
                  type="Text"
                  name="state"
                  value={this.state.inputs.state}
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
                />
                <br />
                <p className="red-city">
                  {this.state.errors.state ? "This field cannot be Empty" : ""}
                </p>
              </div>
            </div>
            <div className="check">
              <input
                className="checkbox"
                type="checkbox"
                onChange={this.handleChange}
              />
              <span className="label">Save my address for future use</span>
            </div>
            <button
              type="submit"
              className="borderbutton"
              disabled={this.enabled()}
            >
              Send kit
            </button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
