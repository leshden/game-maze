import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  start: false
};

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,

  reducers: {
    startGame: (state) => {
      state.start = true;
    }
  }
});

export const { startGame } = gameStateSlice.actions;

export const isStart = (state) => state.gameState.start;

export default gameStateSlice.reducer;
