import React, { Props } from "react";
import styled from "@emotion/styled";

const BoardBlock = styled.ul`
  display: flex;
  height: 4rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  border: 1px solid black;

  justify-content: space-evenly;
  align-items: center;

  list-style: none;
  li {
    border: 1px solid black;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

type Prop = {
  nums: number[];
  onClickPosition: (pos: number) => void;
};

function Board(prop: Prop) {
  return (
    <BoardBlock>
      {prop.nums.map((n, i) => {
        return (
          <li onClick={() => prop.onClickPosition(i)} key={i}>
            {n > 0 ? n : ""}
          </li>
        );
      })}
    </BoardBlock>
  );
}

export default Board;
