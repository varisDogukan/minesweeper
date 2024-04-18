import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import GameWithHooks from "./GameWithHooks";

describe("GameWithHooks test cases", () => {
  describe("Render behaviour", () => {
    it("Render game field by default", () => {
      const { asFragment } = render(<GameWithHooks />);

      expect(screen.getAllByRole("cell")).toHaveLength(81);

      expect(asFragment()).toMatchSnapshot();
    });

    it("onChange game level handler", async () => {
      render(<GameWithHooks />);

      expect(screen.getAllByRole("cell")).toHaveLength(81);

      await userEvent.selectOptions(
        screen.getByRole("combobox"),
        "intermediate"
      );
      expect(screen.getAllByRole("cell")).toHaveLength(256);

      await userEvent.selectOptions(screen.getByRole("combobox"), "expert");
      expect(screen.getAllByRole("cell")).toHaveLength(484);
    });
  });
});
