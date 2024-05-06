import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import basketReducer from "./reducers/basketSlice";
import productReducer from "./reducers/productSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer,
    product: productReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV == "dev",
});
