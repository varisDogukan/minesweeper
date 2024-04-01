import React from "react";
import styled from "@emotion/styled";

import Counter from "./Counter";
import Level from "./Level";
import Reset from "./Reset";

export interface ScoreboardProps {
  time: string;
  levels: string[];
  onReset: () => void;
  mines: string;
}

export default function Scoreboard({
  levels,
  mines,
  onReset,
  time,
}: ScoreboardProps) {
  return (
    <Wrapper>
      <Counter>{time}</Counter>
      <Level>{levels}</Level>
      <Reset onReset={onReset} />
      <Counter>{mines}</Counter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: max-content;
  padding-bottom: 2vw;
  justify-content: space-between;
`;
