import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Date/ExpenseDate";
import Card from "../../UI/Card/card";

function Expense({ expense }) {
  const [title, setTitle] = useState(expense.title);

  const clickHandler = () => {
    setTitle("update");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate props={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.price}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default Expense;
