import { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../Ul/Card";
import Button from "../Ul/Button";
import ErrorModule from "../Ul/ErrorModal.module";

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [isError, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    //validation username
    if (enteredUsername.trim().length === 0) {
      setError({
        title: "invalid username",
        massage: "please enter a valid username",
      });
      return;
    }

    //validation username
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        massage: "please enter a valid age",
      });
      return;
    }

    //add user in list
    props.onAdd(enteredUsername, enteredAge);
    //clear inputs
    setUsername("");
    setAge("");
  };

  const userNameHandler = (e) => setUsername(e.target.value);

  const ageHandler = (e) => setAge(e.target.value);

  const closeModal = () => setError(null);

  return (
    <section>
      {isError && (
        <ErrorModule
          title={isError.title}
          massage={isError.massage}
          onClose={closeModal}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            onChange={userNameHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            type="number"
            id="age"
            onChange={ageHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </section>
  );
};

export default AddUser;
