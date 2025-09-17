import { BoardState, Player } from '../types/game';

// This file will contain game logic functions
// For now, it's just a placeholder with empty functions

export const checkWinner = (board: BoardState): Player | null => {
  // TODO: Implement winner checking logic
  return null;
};

export const checkDraw = (board: BoardState): boolean => {
  // TODO: Implement draw checking logic
  return false;
};

export const getInitialBoard = (): BoardState => {
  // TODO: Return initial empty board
  return Array(9).fill(null);
};
