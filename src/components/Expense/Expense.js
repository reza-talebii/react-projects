import React, { useState } from "react";
import "./Expense.css";

import ExpenseItem from "./Item/ExpenseItem";
import Card from "../UI/Card/card";
import ExpensesFilter from "./filter/ExpenseFilter";
import ChartExpense from "./Chart/ChartExpense";

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //filter by year
  const filterYearData = expenseData.filter((expense) => {
    if (expense.date.getFullYear() == filteredYear) return expense;
  });

  //check find expense
  let expenseContent = <p>No expense Found</p>;

  if (filterYearData.length > 0) {
    expenseContent = filterYearData.map((expense) => (
      <ExpenseItem expense={expense} key={expense.id} />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ChartExpense expenses={filterYearData} />
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
