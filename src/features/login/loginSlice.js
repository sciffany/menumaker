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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectToken = (state) => state.auth.token;

export default loginSlice.reducer;
