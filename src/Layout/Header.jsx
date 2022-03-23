import React from "react";

import TodoHeader from "../Components/TodoHeader/TodoHeader";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <TodoHeader />
    </header>
  );
};

export default Header;
