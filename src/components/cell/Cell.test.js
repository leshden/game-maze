import {render, screen} from '@testing-library/react';
import Cell from './Cell';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import {isStart} from '../../features/game-state/gameStateSlice';

test('render Cell', () => {
  render(
    <Provider store={store}>
      <Cell index={0} />
    </Provider>
  );
  const cell = screen.getByRole('gridcell');
  expect(cell).toBeInTheDocument();
})
