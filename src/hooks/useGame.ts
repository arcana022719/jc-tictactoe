import { useState } from 'react';
import { GameWithHistory, Player, BoardState } from '../types/game';
import { getInitialBoard, makeMove as applyMove, checkWinner, checkDraw } from '../utils/gameLogic';

export const useGame = () => {
  const [gameState, setGameState] = useState<GameWithHistory>({
    board: getInitialBoard(),
    currentPlayer: 'X',
    winner: null,
    isDraw: false,
    gameOver: false,
    history: [getInitialBoard()],
    step: 0,
  });

  const makeMove = (index: number) => {
    if (gameState.gameOver) return;

    // Allow moves after time travel by discarding future history
    const effectiveBoard: BoardState = gameState.history[gameState.step];
    const updatedBoard = applyMove(effectiveBoard, index, gameState.currentPlayer);
    if (!updatedBoard) return; // invalid move

    const winner = checkWinner(updatedBoard);
    const isDraw = !winner && checkDraw(updatedBoard);
    const gameOver = Boolean(winner || isDraw);
    const nextPlayer: Player = gameOver
      ? gameState.currentPlayer
      : gameState.currentPlayer === 'X'
      ? 'O'
      : 'X';

    const newHistory = [...gameState.history.slice(0, gameState.step + 1), updatedBoard];
    setGameState({
      board: updatedBoard,
      currentPlayer: nextPlayer,
      winner,
      isDraw,
      gameOver,
      history: newHistory,
      step: newHistory.length - 1,
    });
  };

  const resetGame = () => {
    const initial = getInitialBoard();
    setGameState({
      board: initial,
      currentPlayer: 'X',
      winner: null,
      isDraw: false,
      gameOver: false,
      history: [initial],
      step: 0,
    });
  };

  const jumpTo = (step: number) => {
    if (step < 0 || step >= gameState.history.length) return;
    const board = gameState.history[step];
    const winner = checkWinner(board);
    const isDraw = !winner && checkDraw(board);
    const gameOver = Boolean(winner || isDraw);
    // Determine current player by step parity: X moves on even indices (0-based)
    const currentPlayer: Player = step % 2 === 0 ? 'X' : 'O';
    setGameState({
      board,
      currentPlayer: gameOver ? (winner ?? currentPlayer) : currentPlayer,
      winner,
      isDraw,
      gameOver,
      history: gameState.history,
      step,
    });
  };

  return {
    gameState,
    makeMove,
    resetGame,
    jumpTo,
  };
};
