import { configureStore } from "@reduxjs/toolkit";
import { loginSliceReducer } from "./login";
import { counterReducer } from "./counter";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginSliceReducer,
  },
});

export default store;
