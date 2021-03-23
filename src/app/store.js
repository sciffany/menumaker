import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import loginReducer from "../features/login/loginSLice";

export default configureStore({
  reducer: {
    menu: menuReducer,
    auth: loginReducer,
  },
});
