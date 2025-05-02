import React, { useState } from "react";

const initialBoard = Array(9).fill(null);

export default function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Turn: ${isXTurn ? "X" : "O"}`;

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXTurn(true);
  };

  return (
    <div className="tic-tac-toe-container">
      <p className="status">{status}</p>
      <div className="board">
        {board.map((value, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="cell"
          >
            {value}
          </button>
        ))}
      </div>
      <button onClick={resetGame} className="restart-button">
        Restart
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}