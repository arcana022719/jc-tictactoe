import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders TicTacToe Game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/TicTacToe Game/i);
  expect(titleElement).toBeInTheDocument();
});
