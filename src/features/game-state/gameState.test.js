import gameStateReducer, {
  startGame,
  GAME_STATUS_PROCESSING,
  GAME_STATUS_IDLE,
} from './gameStateSlice';

describe('game state reducer', () => {
  const initialState = {
    startIndex: -1,
    loseIndex: -1,
    index: -1,
    steps: [],
    status: GAME_STATUS_IDLE,
    size: 3,
    maxSteps: 5,
  };

  it('initial state', () => {
    expect(gameStateReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('handle startGame', () => {
    const actual = gameStateReducer(initialState, startGame());
    expect(actual.status).toEqual(GAME_STATUS_PROCESSING);
  });

  });
