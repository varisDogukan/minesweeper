import React from "react";
import styled from "@emotion/styled";

import { Coords, Field } from "@/helpers/Field";

import Cell from "./Cell";

export interface GridProps {
  children: Field;
  onClick: (coords: Coords) => void;
  onContextMenu: (coords: Coords) => void;
}

export default function Grid({ children, ...rest }: GridProps) {
  return (
    <Wrapper size={children.length}>
      {children.map((row, y) =>
        row.map((cell, x) => (
          <Cell key={`${y}_${x}_${cell}`} coords={[y, x]} {...rest}>
            {cell}
          </Cell>
        ))
      )}
    </Wrapper>
  );
}

interface WrapperProps {
  size: number;
}

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, auto);
  width: max-content;
  padding: 10px;
`;
