import React from 'react';
import './Square.css';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  const className = `square${value ? ` square-${value}` : ''}`;
  return (
    <button className={className} onClick={onClick}>
      {value ?? ''}
    </button>
  );
};

export default Square;
