import { useCallback, useMemo } from "react";

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

function useScore(board: number[]) {
  const calculateScore = useCallback(board => {
    const temp = board.reduce(
      ([curScore, prevNum, curLen], curNum) => {
        if (prevNum < curNum) {
          return [curScore, curNum, curLen + 1];
        } else {
          return [curScore + scoreTable[curLen], curNum, 1];
        }
      },
      [0, board[0], 0]
    );
    return temp[0] + scoreTable[temp[2]];
  }, []);

  const score = useMemo(() => calculateScore(board), [calculateScore, board]);

  return score;
}

export default useScore;
