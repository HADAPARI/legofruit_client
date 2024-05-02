import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const product = state.find(product => product.id === id);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
    decreaseAllQuantities: (state) => {
      state.forEach(product => {
        if (product.quantity > 1) {
          product.quantity--;
        }
      });
    },
  },
});

export const { add, deleteProduct, decreaseQuantity, decreaseAllQuantities } = basketSlice.actions;

export default basketSlice.reducer;
