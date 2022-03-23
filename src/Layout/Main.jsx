import React from "react";

import TodoWrapper from "../Components/Todos/TodoWrapper";
import FilterSection from "../Components/FilterTodo/FilterSection";
import TextBtn from "../Components/TextBtn/TextBtn";

const Main = () => {
  return (
    <main style={{ textAlign: "center" }}>
      <TodoWrapper />
      <FilterSection />
      <TextBtn class="mt5">Drag and drop to reorder list</TextBtn>
    </main>
  );
};

export default Main;
