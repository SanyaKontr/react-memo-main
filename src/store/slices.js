import { createSlice } from "@reduxjs/toolkit";

const gameSlices = createSlice({
  name: "game",
  initialState: {
    isEasyMode: JSON.parse(localStorage.getItem("isEasyMode")) || false,
    attempts: 3,
    currentLevel: null,
  },
  reducers: {
    //облегченный режим
    setEasyMode(state) {
      state.isEasyMode = !state.isEasyMode;
    },
    //уменьшение оставшихся попыток
    updateAttempts(state) {
      state.attempts = state.attempts - 1;
    },
    //установка первоначального кол-ва попыток
    removeAttempts(state) {
      state.attempts = 3;
    },
    //выбранный уровень игры
    setCurrentLevel(state, action) {
      state.currentLevel = action.payload;
    },
  },
});

export const { setEasyMode, updateAttempts, removeAttempts, setCurrentLevel } = gameSlices.actions;
export const gameReducer = gameSlices.reducer;
