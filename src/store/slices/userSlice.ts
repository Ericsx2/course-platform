import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../api";

interface UserState {
  id: string;
  name: string;
  token: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: { id: "", name: "", token: "" },
  reducers: {
    sessionSignIn: (state, action) => {
      const { id, name, token } = action.payload;
      state.id = id;
      state.name = name;
      state.token = token;
    },
    signIn: (state, action: PayloadAction<UserState>) => {
      const { id, name, token } = action.payload;
      state.id = id;
      state.name = name;
      state.token = token;
      api.defaults.headers.common["authorization"] = `Bearer ${token}`;
      localStorage.setItem("user_state", JSON.stringify({ id, name, token }));
    },
    signOut: (state) => {
      state.id = "";
      state.name = "";
      state.token = "";
      api.defaults.headers.common["authorization"] = "";
      localStorage.removeItem("user_state");
    },
  },
});

export const { sessionSignIn, signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
