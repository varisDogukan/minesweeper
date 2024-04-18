import React from "react";
import styled from "@emotion/styled";

export interface LevelProps {
  children: string[];
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Level({ children, ...props }: LevelProps) {
  return (
    <Select {...props}>
      {children.map((item: string) => (
        <Option value={item} key={React.useId()}>
          {item}
        </Option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  padding: 5px 10px;
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
