import React from "react";
import styled from "@emotion/styled";

export interface LegendProps {
  feature: string;
  firstAction: string;
}

export default function Legend({ feature, firstAction }: LegendProps) {
  return (
    <Parent>
      <strong>{feature}: </strong>
      <FlagComboParent>
        <FirstAction>{firstAction}</FirstAction>
      </FlagComboParent>
    </Parent>
  );
}

const FlagComboParent = styled.code`
  background-color: #e3e3e3;
`;

const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`;

const FirstAction = styled.span`
  color: #ec433c;
`;
