import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetail: null,
};

//add new product thunk
export const addNewProduct = createAsyncThunk(
  "/product/addNewProduct",
  async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/admin/products/add`,
        { formData }
      );

      console.log(response);
      return response.data;
    } catch (error) {
      console.log("Error: Fetch products", error);
    }
  }
);

//delete product thunk
export const deleteProduct = createAsyncThunk(
  "/product/deleteProduct",
  async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_API_URL}/admin/products/${id}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(addNewProduct.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default productSlice.reducer;
