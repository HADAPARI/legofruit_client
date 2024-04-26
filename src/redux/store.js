import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV == "dev",
});
