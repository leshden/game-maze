import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import gameStateReducer from '../features/game-state/gameStateSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gameState: gameStateReducer,
  },
});
