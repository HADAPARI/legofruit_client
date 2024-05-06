import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    set: (state, action) => {
      return action.payload === "" ? null : action.payload;
    },
    add: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { set,add } = productSlice.actions;

export default productSlice.reducer;
