import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import menuReducer from "../features/menu/menuSlice";
import loginReducer from "../features/login/loginSLice";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// const store = configureStore({
//   reducer: {
//     menu: menuReducer,
//     auth: loginReducer,
//   },
// });

// export default store;

const reducers = combineReducers({
  menu: menuReducer,
  auth: loginReducer,
});

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["menu", "login"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
