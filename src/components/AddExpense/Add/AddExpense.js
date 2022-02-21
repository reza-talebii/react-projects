import "./AddExpense.css";
import FormExpense from "../Form/FormExpense";

const AddExpense = (props) => {
  const expenseDataSaveHandler = (enteredExpensesData) => {
    const expenseData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <FormExpense onSaveExpenseData={expenseDataSaveHandler} />
    </div>
  );
};

export default AddExpense;
