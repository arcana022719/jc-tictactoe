import React, { useState } from 'react';
import Board from './Board';
import './Game.css';
import { useGame } from '../hooks/useGame';

const Game: React.FC = () => {
  const { gameState, makeMove, resetGame, jumpTo, resetScores } = useGame();
  const [showHistory, setShowHistory] = useState(false);

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
        <div className="scores">
          <strong>Scores:</strong>
          <span>X: {gameState.scores.X}</span>
          <span>O: {gameState.scores.O}</span>
          <span>Draws: {gameState.scores.draws}</span>
          <button onClick={resetScores}>Reset Scores</button>
          <button onClick={() => setShowHistory((v) => !v)}>
            {showHistory ? 'Hide History' : 'Show History'}
          </button>
        </div>
      </div>
      <div className={`game-content${showHistory ? '' : ' no-history'}`}>
        <div className="game-board">
          <Board squares={gameState.board} onSquareClick={makeMove} />
        </div>
        {showHistory && (
          <aside className="game-history" aria-label="Move history">
            <div className="moves-header">Moves: {gameState.history.length - 1}</div>
            <ol>
              {gameState.history.map((_, move) => {
                const desc = move ? `Go to move #${move}` : 'Go to game start';
                const isCurrent = move === gameState.step;
                return (
                  <li key={move}>
                    <button disabled={isCurrent} onClick={() => jumpTo(move)}>
                      {isCurrent ? `${desc} (current)` : desc}
                    </button>
                  </li>
                );
              })}
            </ol>
          </aside>
        )}
      </div>
    </div>
  );
};

export default Game;
