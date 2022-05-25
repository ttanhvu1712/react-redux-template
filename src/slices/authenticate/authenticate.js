import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkAuthenticateService } from "./services/authenticateServices";

export const sliceName = "authenticateSlice";

const initialState = {
  checkAuthenticate: { data: null, loading: false, error: false },
};

const checkAuthenticate = createAsyncThunk(
  "checkAuthenticate",
  async (params, { rejectWithValue }) => {
    try {
      const response = await checkAuthenticateService(params);
      return response.data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const authenticateSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkAuthenticate.pending, (state) => {
      console.log("checkAuthenticate", "pending")
      state.checkAuthenticate.loading = true;
    });
    builder.addCase(checkAuthenticate.fulfilled, (state, action) => {
      console.log("checkAuthenticate", "fulfilled", action.payload)
      state.checkAuthenticate.loading = false;
      state.checkAuthenticate.data = action.payload;
    });
    builder.addCase(checkAuthenticate.rejected, (state, action) => {
      console.log("checkAuthenticate", "rejected", action.payload)
      state.checkAuthenticate.loading = false;
      state.checkAuthenticate.error = action.payload;
    });
  },
});

export const selector = (state) => state[sliceName];
export const actions = { ...authenticateSlice.actions, checkAuthenticate };
export default authenticateSlice.reducer;
