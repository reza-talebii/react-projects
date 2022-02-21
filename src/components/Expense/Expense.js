import React, { useState } from "react";
import "./Expense.css";

import ExpenseItem from "./Item/ExpenseItem";
import Card from "../UI/Card/card";
import ExpensesFilter from "./filter/ExpenseFilter";

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //filter by year
  const filterYearData = expenseData.filter((expense) => {
    const date = expense.date.split("-");
    if (date[0] === filteredYear) return expense;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filterYearData.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
