import React from "react";
import Row from "./Row";

export default function Board(props: {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
}) {
  const { xIsNext, squares, onPlay } = props;

  function handleClick(i: number) {
    console.log(i);
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <Row
        rowNum={0}
        squares={squares.slice(0, 3)}
        onSquareClick={(position) => handleClick(position)}
      />
      <Row
        rowNum={1}
        squares={squares.slice(3, 6)}
        onSquareClick={(position) => handleClick(position)}
      />
      <Row
        rowNum={2}
        squares={squares.slice(6, 9)}
        onSquareClick={(position) => handleClick(position)}
      />
    </>
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
