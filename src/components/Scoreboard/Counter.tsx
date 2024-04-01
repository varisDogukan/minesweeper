import React from "react";
import styled from "@emotion/styled";

export interface CounterProps {
  children: string;
}

export default function Counter({ children }: CounterProps) {
  return <Frame>{children}</Frame>;
}

const Frame = styled.div`
  padding: 5px;
  color: #ec433c;
  background: #333;
  text-shadow: 0 0 0.1vw #ec433c;
`;
