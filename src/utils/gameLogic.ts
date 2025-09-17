import { BoardState, Player } from '../types/game';


export const checkWinner = (board: BoardState): Player | null => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a];
    }
  }
  return null;
};

export const checkDraw = (board: BoardState): boolean => {
  return board.every(square => square !== null) && !checkWinner(board);
};

export const getInitialBoard = (): BoardState => {
  return Array(9).fill(null);
};

export const makeMove = (
  board: BoardState,
  index: number,
  player: Player
): BoardState | null => {
  if (board[index] !== null || checkWinner(board)) {
    return null; // Invalid move
  }
  const newBoard = [...board];
  newBoard[index] = player;
  return newBoard;
}
