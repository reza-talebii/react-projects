import { useDispatch, useSelector } from "react-redux";
import { clearTodoAsync } from "../../store/asyncThunk";

import classes from "./TodoInfo.module.css";
import TextBtn from "../TextBtn/TextBtn";

const TodoInfo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const todosNotCompleted = todos.filter((todo) => !todo.complete);

  const clearAllTodosHandler = () => dispatch(clearTodoAsync());

  return (
    <section className={classes["todo-list-info"]}>
      <p>
        <span>{todosNotCompleted.length}</span> items left
      </p>
      <TextBtn onClick={clearAllTodosHandler}>Clear Completed</TextBtn>
    </section>
  );
};

export default TodoInfo;
