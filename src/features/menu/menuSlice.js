import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuVisible: true,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setIsMenuVisible: (state, action) => {
      state.isMenuVisible = action.payload;
    },
  },
});

export const { setIsMenuVisible } = menuSlice.actions;

export default menuSlice.reducer;
