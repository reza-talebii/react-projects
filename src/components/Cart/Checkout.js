import { React, useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const nameEntered = useRef();
  const streetEntered = useRef();
  const postEntered = useRef();
  const cityEntered = useRef();

  const inputs = [nameEntered, streetEntered, postEntered, cityEntered];

  const [inputsValueCheck, setInputsValueCheck] = useState({
    name: false,
    street: false,
    post: false,
    city: false,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const getValueInputs = inputs.map((inp) => inp.current.value);

    //check empty inputs for show error
    setInputsValueCheck({
      name: isEmpty(getValueInputs[0]),
      street: isEmpty(getValueInputs[1]),
      post: isEmpty(getValueInputs[2]),
      city: isEmpty(getValueInputs[3]),
    });

    //check all value
    const checkEmptyValues = getValueInputs.every((inp) => isEmpty(inp));

    if (checkEmptyValues) return;
    //send data
    props.confirm({
      name: getValueInputs[0],
      street: getValueInputs[1],
      post: getValueInputs[2],
      city: getValueInputs[3],
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameEntered} />
        {inputsValueCheck.name && <p>name is empty</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetEntered} />
        {inputsValueCheck.street && <p>street is empty</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postEntered} />
        {inputsValueCheck.post && <p>postal is empty</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityEntered} />
        {inputsValueCheck.city && <p>city is empty</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
