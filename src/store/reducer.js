import {
  addTodosAsync,
  removeTodoAsync,
  getTodosAsync,
  toggleCompleteTodoAsync,
  clearTodoAsync,
} from "./asyncThunk";

const { createSlice } = require("@reduxjs/toolkit");

const todoReducer = createSlice({
  name: "todos",
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

  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      state.todos = action.payload.todos;
    },

    [addTodosAsync.fulfilled]: (state, action) => {
      state.todos.push(action.payload.newTodo);
    },

    [removeTodoAsync.fulfilled]: (state, action) => {
      const filterTask = state.todos.filter(
        (task) => task.id !== action.payload.id
      );
      state.todos = filterTask;
    },

    [toggleCompleteTodoAsync.fulfilled]: (state, action) => {
      const taskIndex = state.todos.findIndex(
        (task) => task.id === action.payload.newTodo.id
      );
      state.todos[taskIndex].complete = action.payload.newTodo.complete;
    },

    [clearTodoAsync.fulfilled]: (state, action) => {
      console.log(action.payload.newTodo);
    },
    [clearTodoAsync.rejected]: () => {
      alert("this have a bug now");
    },
  },
});

export const todoStoreReducer = todoReducer.reducer;
export const todoAction = todoReducer.actions;
