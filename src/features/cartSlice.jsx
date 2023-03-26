import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartList = [...state.cartList, payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
