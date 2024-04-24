import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import GameWithHooks from "./GameWithHooks";
import { CellState } from "@/helpers/Field";

const { empty: e, hidden: h, bomb: b, flag: f } = CellState;

jest.mock("@/helpers/Field");

const mockOnClick = jest.fn();
const mockOnChangeLevel = jest.fn();
const mockOnReset = jest.fn();

jest.mock("./useGame", () => ({
  __esModule: true,
  default: () => ({
    level: "beginner",
    isGameOver: true,
    isWin: false,
    settings: [9, 10],
    playerField: [
      [10, 10],
      [10, 10],
    ],
    onClick: mockOnClick,
    onChangeLevel: mockOnChangeLevel,
    onReset: mockOnReset,
  }),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("GameWithHooks test cases", () => {
  describe("Render behaviour", () => {
    it("Render game field by default", () => {
      const { asFragment } = render(<GameWithHooks />);

      expect(asFragment()).toMatchSnapshot();
    });

    it("Cell click works fine", async () => {
      render(<GameWithHooks />);

      await userEvent.click(screen.getByTestId("0,0"));
      expect(mockOnClick).toHaveBeenCalled();
    });

    it("Reset handler works fine", async () => {
      render(<GameWithHooks />);

      await userEvent.click(screen.getByRole("button"));
      expect(mockOnReset).toHaveBeenCalled();
    });

    it("Change level works fine", async () => {
      render(<GameWithHooks />);

      await userEvent.selectOptions(
        screen.getByRole("combobox"),
        "intermediate"
      );
      expect(mockOnChangeLevel).toHaveBeenCalled();
    });

    it("Game over reset the game state", async () => {
      render(<GameWithHooks />);
      await userEvent.click(screen.getByText("😓"));
      expect(mockOnReset).toHaveBeenCalled();
    });
  });
});
