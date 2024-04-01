import React from "react";

export type SetMouseDownStatus = () => void;
export type SetMouseUpStatus = () => void;

export function useMouseDown(): [
  boolean,
  SetMouseDownStatus,
  SetMouseUpStatus,
] {
  const [mouseDown, setMouseDown] = React.useState(false);

  // React.useDebugValue(
  //   `mouseDown: ${mouseDown}`,
  //   (str) => `${str} ${new Date().toISOString()}`
  // );

  const onMouseDown = () => setMouseDown(true);
  const onMouseUp = () => setMouseDown(false);

  return [mouseDown, onMouseDown, onMouseUp];
}
