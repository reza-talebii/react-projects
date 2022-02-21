// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense/Item/ExpenseItem";
import AddExpense from "./components/AddExpense/Add/AddExpense";

function App() {
  const [expenseData, setExpenseData] = useState([]);

  //add expense
  const AddExpenseHandler = (expense) => {
    const newExpense = [...expenseData, expense];
    console.log(newExpense);
    setExpenseData(newExpense);
  };

  return (
    <section>
      <AddExpense onAddExpense={AddExpenseHandler} />
      {expenseData.map((expense) => (
        <Expense expense={expense} key={expense.id} />
      ))}
    </section>
  );
}

export default App;
