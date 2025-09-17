import { useState } from 'react';
import { GameState, Player } from '../types/game';
import { getInitialBoard, makeMove as applyMove, checkWinner, checkDraw } from '../utils/gameLogic';

export const useGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    board: getInitialBoard(),
    currentPlayer: 'X',
    winner: null,
    isDraw: false,
    gameOver: false,
  });

  const makeMove = (index: number) => {
    if (gameState.gameOver) return;

    const updatedBoard = applyMove(gameState.board, index, gameState.currentPlayer);
    if (!updatedBoard) return; // invalid move

    const winner = checkWinner(updatedBoard);
    const isDraw = !winner && checkDraw(updatedBoard);
    const gameOver = Boolean(winner || isDraw);
    const nextPlayer: Player = gameOver
      ? gameState.currentPlayer
      : gameState.currentPlayer === 'X'
      ? 'O'
      : 'X';

    setGameState({
      board: updatedBoard,
      currentPlayer: nextPlayer,
      winner,
      isDraw,
      gameOver,
    });
  };

  const resetGame = () => {
    setGameState({
      board: getInitialBoard(),
      currentPlayer: 'X',
      winner: null,
      isDraw: false,
      gameOver: false,
    });
  };

  return {
    gameState,
    makeMove,
    resetGame,
  };
};
