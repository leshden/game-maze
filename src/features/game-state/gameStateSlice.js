import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nextStep } from './gameStateSteps';

const initialState = {
  start: false,
  index: -1,
  steps: [],
};

export const nextStepAsync = createAsyncThunk(
  'game-state/nextStep',
  async (index) => {
    const response = await nextStep(index);
    return response.data;
  }
);

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,

  reducers: {
    startGame: (state, action) => {
      state.start = true;
      state.index = action.payload;
    },

    addStep: (state, action) => {
      state.steps.push(action.payload);
    }

  },

  extraReducers: (builder) => {
    builder
      .addCase(nextStepAsync.pending, (state) => {
        console.log('pending');
      })
      .addCase(nextStepAsync.fulfilled, (state, action) => {
        console.log('fulfilled')
        console.log(action.payload);
      });
  },

});

export const { startGame, addStep } = gameStateSlice.actions;

export const isStart = (state) => state.gameState.start;

export default gameStateSlice.reducer;
