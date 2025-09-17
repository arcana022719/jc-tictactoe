export type Player = 'X' | 'O';
export type SquareValue = Player | null;
export type BoardState = SquareValue[];

export interface GameState {
  board: BoardState;
  currentPlayer: Player;
  winner: Player | null;
  isDraw: boolean;
  gameOver: boolean;
}

export interface GameWithHistory extends GameState {
  history: BoardState[];
  step: number; // index in history representing current board
}

export interface Scores {
  X: number;
  O: number;
  draws: number;
}
