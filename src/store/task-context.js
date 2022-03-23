import React from "react";

const TaskCtx = React.createContext({
  tasks: [],
  addTask: (task) => {},
  removeTask: (id) => {},
  clearAllTask: () => {},
  complete: (id) => {},
  replaceCart: (complete) => {},
});

export default TaskCtx;
