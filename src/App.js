// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

import Expenses from "./components/Expense/Expense";
import AddExpense from "./components/AddExpense/Add/AddExpense";

function App() {
  const [expenseData, setExpenseData] = useState([
    {
      title: "test",
      amount: 55,
      date: new Date("2022-02-03"),
      id: 1,
    },
  ]);

  //add expense
  const AddExpenseHandler = (expense) => {
    const newExpense = [expense, ...expenseData];
    setExpenseData(newExpense);
  };

  return (
    <section>
      <AddExpense onAddExpense={AddExpenseHandler} />
      <Expenses expenseData={expenseData} />
    </section>
  );
}

export default App;
