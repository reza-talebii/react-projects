// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

import Expenses from "./components/Expense/Expense";
import AddExpense from "./components/AddExpense/Add/AddExpense";

function App() {
  const [expenseData, setExpenseData] = useState([]);

  //add expense
  const AddExpenseHandler = (expense) => {
    const newExpense = [expense, ...expenseData];
    setExpenseData(newExpense);
  };

  return (
    <>
      <AddExpense onAddExpense={AddExpenseHandler} />
      <Expenses expenseData={expenseData} />
    </>
  );
}

export default App;
