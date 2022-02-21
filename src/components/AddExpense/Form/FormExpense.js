import "./FormExpense.css";
import { useState } from "react";

const FormExpense = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      amount: event.target.value,
    }));
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
    props.onSaveExpenseData(userInput);
    //clear input value
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
        <button type="submit">add expense</button>
      </div>
    </form>
  );
};

export default FormExpense;
