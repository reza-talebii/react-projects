import React from "react";

import TodoHeader from "../Components/TodoHeader/TodoHeader";
import classes from "./Header.module.css";
import Input from "../Components/Form/Input";

const Header = () => {
  return (
    <header className={classes.header}>
      <TodoHeader />
      <Input
        attributes={{
          type: "text",
          placeholder: "Create a New Todo ...",
        }}
      />
    </header>
  );
};

export default Header;
