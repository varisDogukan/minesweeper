import React from "react";
import { render } from "@testing-library/react";

import { GameName } from "./GameName";

it("GameName renders correctyle", () => {
  const { asFragment } = render(<GameName>minesweeper</GameName>);

  expect(asFragment()).toMatchSnapshot();
});
