import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nextStep } from './gameStateSteps';

export const GAME_STATUS_IDLE = 'idle';
export const GAME_STATUS_PROCESSING = 'processing';
export const GAME_STATUS_ENDING = 'ending';
export const GAME_STATUS_WIN = 'win';
export const GAME_STATUS_LOSE = 'lose';

const initialState = {
  startIndex: -1,
  loseIndex: -1,
  index: -1,
  steps: [],
  status: GAME_STATUS_IDLE,
  size: 3,
  maxSteps: 5,
};

export const nextStepAsync = createAsyncThunk(
  'game-state/nextStep',
  async ({index, size}) => {
    const response = await nextStep(index, size);
    return response.data;
  }
);

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,

  reducers: {

    startGame: (state, action) => {
      state.startIndex = action.payload;
      state.index = action.payload;
      state.status = GAME_STATUS_PROCESSING;
    },

    endGame: (state) => {
      state.status = GAME_STATUS_ENDING;
    },

    winGame: (state) => {
      state.status = GAME_STATUS_WIN
    },

    loseGame: (state, action) => {
      state.status = GAME_STATUS_LOSE;
      state.loseIndex = action.payload;
    },

    resetGame: (state) => {
      state.startIndex = -1;
      state.loseIndex = -1;
      state.index = -1;
      state.steps = [];
      state.status = GAME_STATUS_IDLE;
    }

  },

  extraReducers: (builder) => {
    builder
      .addCase(nextStepAsync.pending, (state) => {
        console.log('pending');
      })
      .addCase(nextStepAsync.fulfilled, (state, action) => {
        console.log('fulfilled')
        const {index} = action.payload;
        state.steps.push(action.payload);
        state.index = index;
      });
  },

});

export const nextRandomStep = () => (dispatch, getState) => {
  const state = getState();
  const index = gameIndex(state);
  const size = gameSize(state);

  dispatch(nextStepAsync({index, size}));
};

export const { startGame, endGame, winGame, loseGame, resetGame } = gameStateSlice.actions;

export const gameStatus = (state) => state.gameState.status;
export const gameSteps = (state) => state.gameState.steps;

export const isIdle = (state) => state.gameState.status === GAME_STATUS_IDLE;
export const isProcessing = (state) => state.gameState.status === GAME_STATUS_PROCESSING;
export const isEnding = (state) => state.gameState.status === GAME_STATUS_ENDING;
export const isWin = (state) => state.gameState.status === GAME_STATUS_WIN;
export const isLose = (state) => state.gameState.status === GAME_STATUS_LOSE;

export const isLastStep = (state) => state.gameState.steps.length >= state.gameState.maxSteps;

export const gameIndex = (state) => state.gameState.index;
export const gameStartIndex = (state) => state.gameState.startIndex;
export const gameLoseIndex = (state) => state.gameState.loseIndex;
export const gameSize = (state) => state.gameState.size;

export default gameStateSlice.reducer;
