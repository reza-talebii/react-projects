const { createSlice } = require("@reduxjs/toolkit");

const todoReducer = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    addTaskTodo(state, action) {
      state.todos.push(action.payload);
    },

    removerTodo(state, action) {
      const filterTask = state.todos.filter(
        (task) => task.id !== action.payload
      );
      state.todos = filterTask;
    },

    clearAllTodo(state) {
      state.todos = [];
    },

    completeTodo(state, action) {
      const taskIndex = state.todos.findIndex(
        (task) => task.id === action.payload
      );
      const mainTask = state.todos;

      const selectTask = mainTask[taskIndex];

      const newTask = { ...selectTask, complete: !selectTask.complete };

      mainTask[taskIndex] = newTask;

      state.todos = mainTask;
    },
  },
});

export const todoStoreReducer = todoReducer.reducer;
export const todoAction = todoReducer.actions;
