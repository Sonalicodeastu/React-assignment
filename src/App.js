import React, { useEffect, useState } from "react";
import heading from "./left.png";
import subheading from "./left.svg";
import "./App.css";
import _ from "underscore";

function App() {
  const [inputState, setInputState] = useState({
    address: "",
    apt: "",
    zipcode: "",
    city: "",
    state: "",
  });
  const [errorState, setErrorState] = useState({
    address: false,
    apt: false,
    zipcode: false,
    city: false,
    state: false,
  });
  const [checkboxState, setCheckboxState] = useState(false);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setInputState({
      ...inputState,
      [name]: value,
    });
    setErrorState({
      ...errorState,
      [name]: false,
    });
  };
  useEffect(() => {
    console.log("useeffect");
  });

  const handleOnBlur = (event) => {
    if (_.isEmpty(inputState[event.target.name])) {
      setErrorState({
        ...errorState,
        [event.target.name]: true,
      });
    }
  };

  const enabled = () => {
    const { address, apt, city, zipcode, state } = inputState;
    return (
      !_.isEmpty(address) &&
      !_.isEmpty(apt) &&
      !_.isEmpty(city) &&
      !_.isEmpty(zipcode) &&
      !_.isEmpty(state) &&
      checkboxState
    );
  };

  const handleChange = () => {
    setCheckboxState(!checkboxState);
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
                errorState?.address
                  ? "inputField form-input-fail"
                  : "inputField"
              }
              name="address"
              value={inputState?.address}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              required
            />
            <p className="red">
              {errorState?.address ? "This field cannot be Empty" : ""}
            </p>
          </div>
          <div className="container">
            <span className="label">Address (Apt, suite, floor)</span>
            <br />
            <input
              type="text"
              className={
                errorState?.apt ? "inputField form-input-fail" : "inputField"
              }
              name="apt"
              value={inputState?.apt}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              required
            />
            <p className="red">
              {errorState?.apt ? "This field cannot be Empty" : ""}
            </p>
          </div>

          <div className="halfGrid">
            <span className="label">Zipcode</span>
            <br />
            <input
              className={
                errorState?.zipcode
                  ? "inputField form-input-fail"
                  : "inputField"
              }
              type="Text"
              name="zipcode"
              value={inputState?.zipcode}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
            />
            <p className="red">
              {errorState?.zipcode ? "This field cannot be Empty" : ""}
            </p>
          </div>

          <div className="whole">
            <div className="half-left">
              {" "}
              <span className="label">City</span>
              <br />
              <input
                className={
                  errorState?.city ? "inputField form-input-fail" : "inputField"
                }
                type="Text"
                name="city"
                value={inputState?.city}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
              />
              <br />
              <p className="red-city">
                {errorState?.city ? "This field cannot be Empty" : ""}
              </p>
            </div>
            <div className="half-right">
              <span className="label">State</span>
              <br />
              <input
                className={
                  errorState?.state
                    ? "inputField form-input-fail"
                    : "inputField"
                }
                type="Text"
                name="state"
                value={inputState?.state}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
              />
              <br />
              <p className="red-city">
                {errorState?.state ? "This field cannot be Empty" : ""}
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
          <button type="submit" className="borderbutton" disabled={!enabled()}>
            Send kit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
