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
    removeItem: (state, { payload }) => {
      state.cartList = state.cartList.filter((item) => item.id !== payload);
    },
    toggleQuantity: (state, { payload }) => {
      const { id, type } = payload;
      state.cartList = state.cartList.filter((item) => {
        if (item.id === id) {
          if (type === "dec") {
            if (item.quantity === 1) return
            else item.quantity--;
          }
          if (type === "inc") {
            item.quantity++;
          }
          return item;
        }
        return item;
      });
    },
  },
});

export const { addToCart, removeItem, toggleQuantity } = cartSlice.actions;
export default cartSlice.reducer;
