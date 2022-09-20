import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "../features/characters/characterSlice";
import filterSlice from "../features/filters/filterSlice";
import menuSlice from "../features/menu/menuSlice";

export const store = configureStore({
  reducer: {
    characters: characterSlice,
    filters: filterSlice,
    menu: menuSlice,
  },
});
