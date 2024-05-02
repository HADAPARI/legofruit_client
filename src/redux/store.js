import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import basketReducer from "./reducers/basketSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV == "dev",
});
