import React from "react";
import styled from "@emotion/styled";

import { Cell as CellType, CellState, Coords } from "@/helpers/Field";
import { useMouseDown } from "@/hooks/useMouseDown";

export interface CellProps {
  children: CellType;
  coords: Coords;
  onClick: (coords: Coords) => void;
  onContextMenu: (coords: Coords) => void;
}

export function isActiveCell(cell: CellType): boolean {
  return [CellState.hidden, CellState.flag, CellState.weakFlag].includes(cell);
}

export default function Cell({ children, coords, ...rest }: CellProps) {
  const [mouseDown, onMouseDown, onMouseUp] = useMouseDown();

  const onClick = () => {
    rest.onClick(coords);
  };

  const onContextMenu = (elem: React.MouseEvent<HTMLElement>) => {
    elem.preventDefault();

    if (isActiveCell(children)) {
      rest.onContextMenu(coords);
    }
  };

  const props = {
    onClick,
    onContextMenu,
    onMouseDown,
    onMouseUp,
    onMouseLeave: onMouseUp,
    mouseDown,
    "data-testid": `${coords}`,
    role: "cell",
  };

  return <ComponentsMap {...props}>{children}</ComponentsMap>;
}

interface ComponentsMapProp {
  children: CellType;
  onClick: (elem: React.MouseEvent<HTMLElement>) => void;
  onContextMenu: (elem: React.MouseEvent<HTMLElement>) => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  mouseDown: boolean;
  "data-testid"?: string;
  role: string;
}

function ComponentsMap({ children, ...rest }: ComponentsMapProp) {
  const nonActiveCellProps = {
    onContextMenu: rest.onContextMenu,
    "data-testid": rest["data-testid"],
    role: rest.role,
  };

  switch (children) {
    case CellState.bomb:
      return (
        <BombFrame {...nonActiveCellProps}>
          <Bomb />
        </BombFrame>
      );

    case CellState.flag:
      return (
        <ClosedFrame {...rest}>
          <Flag />
        </ClosedFrame>
      );

    case CellState.weakFlag:
      return (
        <ClosedFrame {...rest}>
          <WeakFlag />
        </ClosedFrame>
      );

    case CellState.hidden:
      return <ClosedFrame {...rest}>{children}</ClosedFrame>;

    default:
      return <RevealedFrame {...nonActiveCellProps}>{children}</RevealedFrame>;
  }
}

interface ClosedFrameProps {
  mouseDown?: boolean;
}

export const ClosedFrame = styled.div<ClosedFrameProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: #d1d1d1;
  border: 5px solid transparent;
  border-color: ${({ mouseDown = false }) =>
    mouseDown ? "transparent" : "white #9e9e9e #9e9e9e white"};
  transition: all 0.2s linear;
  color: transparent;

  &:hover {
    filter: brightness(1.1);
  }
`;

const transparent = "rgba(0,0,0,0)";
const colors: { [key in CellType]: string } = {
  0: "#000",
  1: "#2a48ec",
  2: "#2bb13d",
  3: "#ec6561",
  4: "#23db7",
  5: "#a6070f",
  6: "#e400af",
  7: "#906a02",
  8: "#fa0707",
  9: transparent,
  10: transparent,
  11: transparent,
  12: transparent,
};

const RevealedFrame = styled(ClosedFrame)`
  border-color: #ddd;
  cursor: default;
  color: ${({ children }) =>
    children === 0 ? transparent : colors[children as CellType] ?? transparent};

  &:hover {
    filter: brightness(1.1);
  }
`;

const Bomb = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #333;
`;

const BombFrame = styled(RevealedFrame)`
  background-color: #ec433c;
`;

const Flag = styled.div`
  width: 1px;
  height: 1px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #ec433c;
`;

const WeakFlag = styled(Flag)`
  border-left: 5px solid #f19996;
`;
