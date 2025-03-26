import React from "react";
import Square from "./Square";

export default function Row(props: {
  key: number;
  rowNum: number;
  squares: string[];
  onSquareClick: (position: number) => void;
}) {
  const { rowNum, squares, onSquareClick } = props;

  return (
    <div className="board-row">
      {squares.map((square, i) => {
        return (
          <Square
            key={i}
            value={square}
            onSquareClick={() => onSquareClick(rowNum * squares.length + i)}
          />
        );
      })}
    </div>
  );
}
