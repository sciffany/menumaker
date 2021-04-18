import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    token: "",
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isAuth = true;
    },
    logout: (state, action) => {
      state.restaurant = action.payload;
      state.isAuth = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export const selectIsAuth = (state) => state.auth.isAuth;
export const selectToken = (state) => state.auth.token;

export default loginSlice.reducer;
