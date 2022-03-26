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
  initialState: { todos: [], filterTodo: [] },
  reducers: {
    replaceTodos: (state, action) => {
      state.filterTodo = action.payload;
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
