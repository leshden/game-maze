import {render, screen} from '@testing-library/react';
import Cell from './Cell';

test('render Cell', () => {
  render(<Cell />);
  const cell = screen.getByRole('gridcell');
  expect(cell).toBeInTheDocument();
})
