import { createSlice } from "@reduxjs/toolkit";

let playerSlice = createSlice({
  name: "player",
  initialState: {
    currentSong: null,
    queue: [],
  },
  reducers: {
    addSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

export const { addSong } = playerSlice.actions;

export default playerSlice.reducer;
