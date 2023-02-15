import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../../styles/themes";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
    theme: lightTheme,
  },
  reducers: {
    switchTheme: (state) => {
      state.theme = state.mode === "dark" ? lightTheme : darkTheme;
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
