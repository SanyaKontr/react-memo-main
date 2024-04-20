import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./slices";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
