import React from "react";
import styled from "@emotion/styled";

const CardBlock = styled.div`
  width: 3.3rem;
  height: 4rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Card(prop) {
  return <CardBlock>{prop.children}</CardBlock>;
}

export default Card;
