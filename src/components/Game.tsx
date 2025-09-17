import React from 'react';
import Board from './Board';
import './Game.css';

const Game: React.FC = () => {
  return (
    <div className="game">
      <div className="game-info">
        <div className="status">Next player: X</div>
      </div>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
