import {render, screen} from '@testing-library/react';
import {prettyDOM} from '@testing-library/dom'
import Board from './Board';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

test('render Board', () => {
  render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
  const board = screen.getByRole('grid');
  expect(board).toBeInTheDocument();
})

test('size board is 3x3 = 9', () => {
  render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
  const board = screen.getByRole('grid');
  expect(board).toBeInTheDocument();
  // console.log(prettyDOM(board))

  const cells = screen.getAllByRole('gridcell');
  expect(cells.length).toBe(9);
})
