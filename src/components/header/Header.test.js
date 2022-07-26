import {render, screen} from '@testing-library/react';
import Header from './Header';

test('header has text', ()=>{
  render(<Header />)
  const header = screen.getByRole('banner');
  expect(header.textContent).toBeTruthy();
})
