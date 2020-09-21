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
    //checked: false,
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    // const { checkedstate } = initial.checked;
    later({
      inputs: {
        ...initial.inputs,
        [name]: value,
      },
      errors: {
        ...initial.errors,
        [name]: false,
      },
      //  checked: [checkedstate],
    });
  };
  const handleOnBlur = (event) => {
    const { inputs } = initial;
    const { name, value } = event.target;
    // const { checkedstate } = initial.checked;
    // console.log(initial);
    // console.log(inputs);
    if (_.isEmpty(inputs[name])) {
      later({
        inputs: {
          ...initial.inputs,
          [name]: value,
        },
        errors: {
          ...initial.errors,
          [name]: true,
        },
        //  checked: [checkedstate],
      });
      console.log(initial);
    }
  };

  const enabled = () => {
    const { address, apt, city, zipcode, state } = initial;
    // console.log(initial);
    return (
      _.isEmpty(address) ||
      _.isEmpty(apt) ||
      _.isEmpty(city) ||
      _.isEmpty(zipcode) ||
      _.isEmpty(state) ||
      initial.checked
    );
  };

  const handleChange = () => {
    // const { checkedstate } = initial.checked;
    later({
      ...initial,
      checked,
    });
    console.log(initial);
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
              type="text"
              className={
                initial?.errors?.apt
                  ? "inputField form-input-fail"
                  : "inputField"
              }
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
