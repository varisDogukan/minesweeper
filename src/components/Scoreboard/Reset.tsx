import React from "react";
import styled from "@emotion/styled";

import { useMouseDown } from "@/hooks/useMouseDown";

export interface ResetProps {
  onReset: () => void;
}

export default function Reset({ onReset }: ResetProps) {
  const [mouseDown, onMouseDown, onMouseUp] = useMouseDown();

  const events = {
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseUp,
    onClick: onReset,
  };

  return <Button {...events}>{mouseDown ? "😐" : "😌"}</Button>;
}

const Button = styled.button`
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
  border: none;
  border-left: 1px solid #e0e0e0;
  background-color: #d1d1d1;
`;
