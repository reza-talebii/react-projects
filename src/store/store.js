import { configureStore } from "@reduxjs/toolkit";
import { todoStoreReducer } from "./reducer";

const store = configureStore({
  reducer: {
    todos: todoStoreReducer,
  },
});

export default store;
