import React from "react";
import { render } from "@testing-library/react";

import Legend from "./Legend";

it("GameName renders correctyle", () => {
  const { asFragment } = render(
    <Legend feature='Flag' firstAction='Ctrl' secondAction='Click' />
  );

  expect(asFragment()).toMatchSnapshot();
});
