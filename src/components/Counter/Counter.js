import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter.counter);
  const showCounter = useSelector((store) => store.counter.showCounter);


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const addCounterHandler = () => {
    dispatch(counterActions.increment());
  };
  const minusCounterHandler = () => {
    dispatch(counterActions.decrement());
  };
  const plusCounterHandler = () => {
    dispatch(counterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={addCounterHandler}>+</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={minusCounterHandler}>-</button>
      <br />
      <button onClick={plusCounterHandler}>+5</button>
    </main>
  );
};

export default Counter;
