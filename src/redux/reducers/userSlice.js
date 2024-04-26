import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    set: (state,action) => {
      return action.payload;
    },
  },
});

export const { set } = userSlice.actions;

export default userSlice.reducer;
