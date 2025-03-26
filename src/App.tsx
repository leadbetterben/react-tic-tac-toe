import React, { useState } from "react";
import Board from "./ui/Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const moves = history.map((_, move) => {
    if (move == currentMove) {
      return <p key={move}>You are at move # {move} </p>;
    }

    let description = move == 0 ? "Go to game start" : "Go to move #" + move;

    return (
      <li key={move}>
        <button onClick={() => setCurrentMove(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
