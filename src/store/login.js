import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = { isLogin: false, user: null };

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLogin = false;
      state.user = null;
    },
  },
});

export const loginActions = loginSlice.actions;

export const loginSliceReducer = loginSlice.reducer;
