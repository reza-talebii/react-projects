import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../../store/reducer";
import classes from "./TodoInfo.module.css";
import TextBtn from "../TextBtn/TextBtn";

const TodoInfo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.tasks.todos);
  const todosNotCompleted = todos.filter((todo) => !todo.complete);

  const clearAllTodosHandler = () => dispatch(todoAction.clearAllTodo());

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
