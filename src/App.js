// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense/Item/ExpenseItem";
import AddExpense from "./components/AddExpense/Add/AddExpense";

function App() {
  const [expenseData, setExpenseData] = useState([
    {
      id: 1,
      title: "shop",
      date: new Date(2022, 2, 1),
      price: 200,
    },
    {
      id: 2,
      title: "gym",
      date: new Date(2022, 3, 1),
      price: 33,
    },
    {
      id: 3,
      title: "car",
      date: new Date(2022, 6, 20),
      price: 555,
    },
  ]);

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
