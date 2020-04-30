import React, { useState, useCallback, useEffect } from "react";
import "./styles.css";

import Board from "./components/Board";
import useScore from "./hooks/useScore";
import { BoardState } from "./reducers/boardReducer";
import { useSelector } from "react-redux";
const scoreTable = [
  0,
  0,
  1,
  3,
  5,
  7,
  9,
  11,
  15,
  20,
  25,
  30,
  35,
  40,
  50,
  60,
  70,
  85,
  100,
  150,
  300
];
function getInitUnused() {
  let temp = [];
  for (let i = 1; i <= 30; ++i) temp.push(i);
  return temp;
}

export default function App() {
  const [curNum, setCurNum] = useState(0);
  const [board, setBoard] = useState(Array(20).fill(0));
  const [unused, setUnused] = useState<number[]>(getInitUnused());
  const [used, setUsed] = useState<number[]>([]);

  const randomNewNumber = useCallback(() => {
    return unused[Math.floor(Math.random() * unused.length)];
  }, [unused]);

  const updateBoard = (position: number) => {
    //if (curNum === 0) return;
    if (board[position] > 0) return;
    if (used.includes(curNum)) return;
    setBoard(board.map((n, idx) => (idx === position ? curNum : n)));
    setUnused(unused.filter(n => n !== curNum));
    setUsed([curNum, ...used]);
    setCurNum(randomNewNumber());
  };

  return (
    <div className="App">
      <Board onClickPosition={updateBoard} nums={board} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      score: {useScore(board)}
      cur num: {curNum}
    </div>
  );
}
