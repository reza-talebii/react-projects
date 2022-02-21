import "./ExpenseDate.css";

const ExpenseDate = ({ props }) => {
  const year = props.getFullYear();
  const month = props.toLocaleString("en-us", {
    month: "long",
  });
  const day = props.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
