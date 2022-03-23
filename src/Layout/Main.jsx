import React from "react";

import TodoWrapper from "../Components/Todos/TodoWrapper";
import FilterSection from "../Components/FilterTodo/FilterSection";

const Main = () => {
  return (
    <main>
      <TodoWrapper />
      <FilterSection />
    </main>
  );
};

export default Main;
