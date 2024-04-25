import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    region: "",
  },
  reducers: {
    set: (state,payload) => {
      state.value = payload;
    },
  },
})

export const { set } = userSlice.actions

export default userSlice.reducer