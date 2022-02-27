import { useState, useEffect, useCallback } from "react";
import "./App.css";

import Expenses from "./components/Expense/Expense";
import AddExpense from "./components/AddExpense/Add/AddExpense";

function App() {
  const [expenseData, setExpenseData] = useState([]);

  //add expense
  const AddExpenseHandler = (expense) => {
    fetch("http://localhost:8000/expenses", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newExpense = [expense, ...expenseData];
    setExpenseData(newExpense);
  };

  //fetch expense data
  useEffect(() => {
    const fetchExpenseHandler = async () => {
      const respond = await (
        await fetch("http://localhost:8000/expenses")
      ).json();

      const expenseFixDate = respond.map((exps) => ({
        title: exps.title,
        amount: exps.amount,
        date: new Date(exps.date),
        id: exps.id,
      }));

      setExpenseData(expenseFixDate);
    };
    fetchExpenseHandler();
  }, []);

  return (
    <>
      <AddExpense onAddExpense={AddExpenseHandler} />
      <Expenses expenseData={expenseData} />
    </>
  );
}

export default App;
