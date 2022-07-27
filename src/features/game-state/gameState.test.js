import gameStateReducer, {
  startGame,
} from './gameStateSlice';

describe('game state reducer', () => {
  const initialState = {
    start: false,
  };

  it('initial state', () => {
    expect(gameStateReducer(undefined, { type: 'unknown' })).toEqual({
      start: false,
    });
  });

  it('handle startGame', () => {
    const actual = gameStateReducer(initialState, startGame());
    expect(actual.start).toEqual(true);
  });

  });
