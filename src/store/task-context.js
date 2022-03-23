import React from "react";

const TaskCtx = React.createContext({
  tasks: [],
  addTask: (task) => {},
  removeTask: (id) => {},
  clearAllTask: () => {},
});

export default TaskCtx;
