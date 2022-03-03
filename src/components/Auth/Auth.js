import { useRef } from "react";
import { loginActions } from "../../store/login";
import { useDispatch } from "react-redux";

import classes from "./Auth.module.css";

//helper functions
const isEmpty = (...values) => values.every((value) => value.trim() === "");

const Auth = () => {
  const dispatch = useDispatch();
  //ref inputs
  const emailEntered = useRef();
  const passwordEntered = useRef();

  //submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    //validate inputs value
    const emailValue = emailEntered.current.value;
    const passwordValue = passwordEntered.current.value;

    //check validate inputs
    if (isEmpty(emailValue, passwordEntered)) {
      alert("fill all form");
      return;
    }

    //success login
    const userInfo = { email: emailValue, password: passwordValue };
    dispatch(loginActions.login(userInfo));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailEntered} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordEntered} />
          </div>
          <button onClick={submitHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
