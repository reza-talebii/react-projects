import { configureStore } from "@reduxjs/toolkit";
import { todoStoreReducer } from "./reducer";

const store = configureStore({
  reducer: {
    tasks: todoStoreReducer,
  },
});

export default store;
