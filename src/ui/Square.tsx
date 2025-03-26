import React from "react";

export default function Square(props: {
  key: number;
  value: string;
  onSquareClick: VoidFunction;
}) {
  const { value, onSquareClick } = props;
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
