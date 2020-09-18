import React, { useState } from "react";
import heading from "./left.png";
import subheading from "./left.svg";
import "./App.css";
import _ from "underscore";
function App() {
  const [initial, later] = useState({
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
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;

    later({
      inputs: {
        ...initial.inputs,
        [name]: value,
      },
      errors: {
        ...initial.errors,
        [name]: false,
      },
    });
  };
  const handleOnBlur = (event) => {
    const { inputs } = initial;
    // console.log(initial);
    if (_.isEmpty(inputs[event.target.name])) {
      later({
        errors: {
          ...initial.errors,
          [event.target.name]: true,
        },
      });
    }
  };

  const enabled = () => {
    const { address, apt, city, zipcode, state } = initial;
    return (
      _.isEmpty(address) ||
      _.isEmpty(apt) ||
      _.isEmpty(city) ||
      _.isEmpty(zipcode) ||
      _.isEmpty(state) ||
      !initial.checked
    );
  };

  const handleChange = () => {
    later({
      checked: !initial.checked,
    });
  };

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
                initial?.errors?.address
                  ? "inputField form-input-fail"
                  : "inputField"
              }
              name="address"
              value={initial?.inputs?.address}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              required
            />
            <p className="red">
              {initial?.errors?.address ? "This field cannot be Empty" : ""}
            </p>
          </div>
          <div className="container">
            <span className="label">Address (Apt, suite, floor)</span>
            <br />
            <input
              className={
                initial?.errors?.apt
                  ? "inputField form-input-fail"
                  : "inputField"
              }
              type="text"
              name="apt"
              value={initial?.inputs?.apt}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              required
            />
            <p className="red">
              {initial?.errors?.apt ? "This field cannot be Empty" : ""}
            </p>
          </div>

          <div className="halfGrid">
            {" "}
            <span className="label">Zipcode</span>
            <br />
            <input
              className={
                initial?.errors?.zipcode
                  ? "inputField form-input-fail"
                  : "inputField"
              }
              type="Text"
              name="zipcode"
              value={initial?.inputs?.zipcode}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
            />
            <p className="red">
              {initial?.errors?.zipcode ? "This field cannot be Empty" : ""}
            </p>
          </div>

          <div className="whole">
            <div className="half-left">
              {" "}
              <span className="label">City</span>
              <br />
              <input
                className={
                  initial?.errors?.city
                    ? "inputField form-input-fail"
                    : "inputField"
                }
                type="Text"
                name="city"
                value={initial?.inputs?.city}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
              />
              <br />
              <p className="red-city">
                {initial?.errors?.city ? "This field cannot be Empty" : ""}
              </p>
            </div>
            <div className="half-right">
              <span className="label">State</span>
              <br />
              <input
                className={
                  initial?.errors?.state
                    ? "inputField form-input-fail"
                    : "inputField"
                }
                type="Text"
                name="state"
                value={initial?.inputs?.state}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
              />
              <br />
              <p className="red-city">
                {initial?.errors?.state ? "This field cannot be Empty" : ""}
              </p>
            </div>
          </div>
          <div className="check">
            <input
              className="checkbox"
              type="checkbox"
              onChange={handleChange}
            />
            <span className="label">Save my address for future use</span>
          </div>
          <button type="submit" className="borderbutton" disabled={enabled()}>
            Send kit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
