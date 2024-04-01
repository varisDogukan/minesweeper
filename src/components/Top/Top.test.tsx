import React from "react";
import { render } from "@testing-library/react";

import Top from "./Top";

it("GameName renders correctyle", () => {
  const { asFragment } = render(
    <Top
      children='Minesweeper'
      feature='Flag'
      firstAction='Ctrl'
      secondAction='Click'
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
