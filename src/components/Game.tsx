import React from 'react';
import Board from './Board';
import './Game.css';
import { useGame } from '../hooks/useGame';

const Game: React.FC = () => {
  const { gameState, makeMove, resetGame, jumpTo } = useGame();

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
        <div style={{ marginTop: 12 }}>
          <div>Moves: {gameState.history.length - 1}</div>
          <ol style={{ paddingLeft: 18 }}>
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
        </div>
      </div>
      <div className="game-board">
        <Board squares={gameState.board} onSquareClick={makeMove} />
      </div>
    </div>
  );
};

export default Game;
