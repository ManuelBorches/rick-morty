import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  singleCharacter: {},
  page: 1,
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setSingleCharacter: (state, action) => {
      state.singleCharacter = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setCharacters, setSingleCharacter, setPage } =
  characterSlice.actions;

export default characterSlice.reducer;
