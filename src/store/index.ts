import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import userReducer from "./slices/userSlice";
import themeReducer from "./slices/themeSlice";

const logger = createLogger();

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
