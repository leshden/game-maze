import { configureStore } from '@reduxjs/toolkit';
import gameStateReducer from '../features/game-state/gameStateSlice';

export const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
  },
});
