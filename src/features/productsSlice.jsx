import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../utils/constants";

export const getProducts = createAsyncThunk(
  "getProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios(`${url}/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  fetchedProducts: [],
  filteredProducts: [],
  searchVal: "",
  singleProduct: {},
  isLoading: false,
  isError: false,
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    setSearchVal: (state, { payload }) => {
      if (!payload) {
        state.filteredProducts = state.fetchedProducts;
      }
      state.searchVal = payload;
      state.filteredProducts = state.fetchedProducts.filter((item) =>
        item.title.toLowerCase().startsWith(payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.fetchedProducts = payload;
        state.filteredProducts = payload;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        console.log(payload);
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.singleProduct = payload;
      })
      .addCase(getSingleProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        console.log(payload);
      });
  },
});

export const { setSearchVal } = productsSlice.actions;

export default productsSlice.reducer;
