import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: JSON.parse(localStorage.getItem("cartList")) || [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartList = [...state.cartList, payload];
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
    removeItem: (state, { payload }) => {
      state.cartList = state.cartList.filter((item) => item.id !== payload);
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
    toggleQuantity: (state, { payload }) => {
      const { id, type } = payload;
      state.cartList = state.cartList.filter((item) => {
        if (item.id === id) {
          if (type === "dec") {
            if (item.quantity === 1) return;
            else item.quantity--;
          }
          if (type === "inc") {
            item.quantity++;
          }
          return item;
        }
        return item;
      });
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
    clearCart: (state) => {
      state.cartList = [];
      localStorage.removeItem("cartList");
    },
  },
});

export const { addToCart, removeItem, toggleQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
