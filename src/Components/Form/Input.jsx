import { useForm } from "react-hook-form";
import { todoAction } from "../../store/reducer";
import { addTodosAsync } from "../../store/asyncThunk";
import { v4 as uuidv4 } from "uuid";

import classes from "./Input.module.css";
import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();

  //form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //submit handling
  const addTaskHandler = ({ todo }) => {
    const newTodo = { name: todo, complete: false, id: uuidv4() };
    dispatch(addTodosAsync(newTodo));
  };

  return (
    <section className={classes.form}>
      <input
        type="text"
        className={classes.input}
        placeholder="Create a New Todo ..."
        {...register("todo", { required: true })}
      />

      {errors.todo && alert("This field is required")}

      <button className={classes.btn} onClick={handleSubmit(addTaskHandler)}>
        add
      </button>
    </section>
  );
};

export default Input;
