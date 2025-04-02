import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: false,
  userData: null,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/auth/register`,
        formData
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//login user
export const loginUser = createAsyncThunk("auth/login", async (formData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}/auth/login`,
      formData,
      { withCredentials: true }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}/auth/checkAuth`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error: Check Auth", error);
  }
});

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = true;
        state.userData = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = true;
        state.userData = null;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.userData = action.payload.success ? action.payload.user : null;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = true;
        state.userData = null;
      });
  },
});

export default authSlice.reducer;
