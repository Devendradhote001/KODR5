import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginApiAction } from "./authAction";

let authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isError: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginApiAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginApiAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginApiAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(hydrateUserAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hydrateUserAction.fulfilled, (state, action) => {
        ((state.user = action.payload), (state.isLoading = false));
      })
      .addCase(hydrateUserAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
