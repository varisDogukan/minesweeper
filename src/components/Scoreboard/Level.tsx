import React from "react";
import styled from "@emotion/styled";

export interface LevelProps {
  children: string[];
}

export default function Level({ children }: LevelProps) {
  return (
    <Select>
      {children.map((item: string) => (
        <Option value={item} key={React.useId()}>
          {item}
        </Option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  padding: 5px;
  border-radius: 0;
  border: none;
  background-color: #d1d1d1;
`;

const Option = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0 0.2vw 0.2vw;
`;
