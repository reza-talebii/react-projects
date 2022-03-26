import {
  createAsyncThunk,
  isRejected,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

export const addTodosAsync = createAsyncThunk(
  "todos/addTodosAsync",
  async (todo) => {
    const res = await fetch("http://localhost:3004/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const newTodo = await res.json();
    return { newTodo };
  }
);

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const res = await fetch("http://localhost:3004/todos");
    const todos = await res.json();
    return { todos };
  }
);

export const removeTodoAsync = createAsyncThunk(
  "todos/removeTodoAsync",
  async (id) => {
    await fetch(`http://localhost:3004/todos/${id}`, {
      method: "DELETE",
    });
    return { id };
  }
);

export const toggleCompleteTodoAsync = createAsyncThunk(
  "todos/toggleCompleteTodoAsync",
  async (todo) => {
    const res = await fetch(`http://localhost:3004/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...todo, complete: !todo.complete }),
    });
    const newTodo = await res.json();
    return { newTodo };
  }
);

export const clearTodoAsync = createAsyncThunk(
  "todos/clearTodoAsync",
  async ({ rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:3004/todos`, {
        method: "DELETE",
      });
      const newTodo = await res.json();
      return { newTodo };
    } catch (err) {
      return rejectWithValue(err.res.data);
    }
  }
);
