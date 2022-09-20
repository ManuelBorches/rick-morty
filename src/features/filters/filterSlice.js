import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameFilter: "",
  statusFilter: [],
  genderFilter: [],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setNameFilter: (state, action) => {
      state.nameFilter = action.payload;
    },
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
    },
    setGenderFilter: (state, action) => {
      state.genderFilter = action.payload;
    },
  },
});

export const { setNameFilter, setStatusFilter, setGenderFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
