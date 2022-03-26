import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./App.module.css";

import { getTodosAsync } from "./store/asyncThunk";
import { todoAction } from "./store/reducer";

import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(todoAction.replaceTodos(todos));
  }, [dispatch, todos]);

  return (
    <>
      <section className={classes.container}>
        <Header />
        <Main />
      </section>
      <Footer />
    </>
  );
};

export default App;
