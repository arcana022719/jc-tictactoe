import React from 'react';
import Board from './Board';
import './Game.css';
import { useGame } from '../hooks/useGame';

const Game: React.FC = () => {
  const { gameState, makeMove, resetGame } = useGame();

  const status = gameState.winner
    ? `Winner: ${gameState.winner}`
    : gameState.isDraw
    ? 'Draw!'
    : `Next player: ${gameState.currentPlayer}`;

  return (
    <div className="game">
      <div className="game-info">
        <div className="status">{status}</div>
        {(gameState.gameOver || gameState.board.some(Boolean)) && (
          <button onClick={resetGame}>Reset</button>
        )}
      </div>
      <div className="game-board">
        <Board squares={gameState.board} onSquareClick={makeMove} />
      </div>
    </div>
  );
};

export default Game;
