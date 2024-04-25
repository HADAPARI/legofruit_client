import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import userReducer from "./reducers/userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV == "dev",
});
