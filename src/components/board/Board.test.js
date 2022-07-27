import {render, screen} from '@testing-library/react';
import {prettyDOM} from '@testing-library/dom'
import Board from './Board';

test('render Board', () => {
  render(<Board />);
  const board = screen.getByRole('grid');
  expect(board).toBeInTheDocument();
})

test('size board is 3x3 = 9', () => {
  render(<Board />);
  const board = screen.getByRole('grid');
  expect(board).toBeInTheDocument();
  // console.log(prettyDOM(board))

  const cells = screen.getAllByRole('gridcell');
  expect(cells.length).toBe(9);
})
