import "./ExpenseDate.css";

const ExpenseDate = ({ props }) => {
  console.log(props);
  const month = props.toLocaleString("en-US", { month: "long" });
  const day = props.toLocaleString("en-US", { day: "2-digit" });
  const year = props.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
