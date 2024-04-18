import React from "react";
import styled from "@emotion/styled";

import Counter from "./Counter";
import Level from "./Level";
import Reset from "./Reset";

export interface ScoreboardProps {
  time: string;
  levels: string[];
  defaultLevel?: string;
  onChangeLevel: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onReset: () => void;
  bombs: string;
}

export default function Scoreboard({
  levels,
  bombs,
  onReset,
  defaultLevel,
  onChangeLevel: onChange,
  time,
}: ScoreboardProps) {
  return (
    <Wrapper>
      <Counter>{time}</Counter>
      <Level value={defaultLevel} onChange={onChange}>
        {levels}
      </Level>
      <Reset onReset={onReset} />
      <Counter>{bombs}</Counter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: max-content;
  padding-bottom: 10px;
  justify-content: space-between;
`;
