import { CellState } from "./Field";
import openCell from "./openCell";

const { hidden: h, bomb: b } = CellState;

describe("Open cell action", () => {
  describe("Simple cases with loose", () => {
    it("Open cell with the bomb", () => {
      expect(() =>
        openCell(
          [1, 1],
          [
            [h, h],
            [h, h],
          ],
          [
            [1, 1],
            [1, b],
          ]
        )
      ).toThrow("Game Over");
    });
  });

  describe("Open cell with number", () => {
    it("Open cell with state === 1", () => {
      const playedField = openCell(
        [1, 1],
        [
          [h, h, h],
          [h, h, h],
          [h, h, h],
        ],
        [
          [1, 1, 0],
          [9, 1, 0],
          [1, 1, 0],
        ]
      );

      expect(playedField).toStrictEqual([
        [h, h, h],
        [h, 1, h],
        [h, h, h],
      ]);
    });

    it("Open cell with state === 3", () => {
      const playedField = openCell(
        [1, 1],
        [
          [h, h, h],
          [h, h, h],
          [h, h, h],
        ],
        [
          [9, 2, 0],
          [9, 3, 0],
          [9, 2, 0],
        ]
      );

      expect(playedField).toStrictEqual([
        [h, h, h],
        [h, 3, h],
        [h, h, h],
      ]);
    });

    it("Open empty cell, simple 3x3 case", () => {
      const playedField = openCell(
        [1, 2],
        [
          [h, h, h],
          [h, h, h],
          [h, h, h],
        ],
        [
          [1, 1, 0],
          [9, 1, 0],
          [1, 1, 0],
        ]
      );

      expect(playedField).toStrictEqual([
        [h, 1, 0],
        [h, 1, 0],
        [h, 1, 0],
      ]);
    });

    // it("Open empty cell 5x5 case", () => {
    //   const [playerField] = openCell(
    //     [2, 2],
    //     [
    //       [h, h, h, h, h],
    //       [h, h, h, h, h],
    //       [h, h, h, h, h],
    //       [h, h, h, h, h],
    //       [h, h, h, h, h],
    //     ],
    //     [
    //       [9, 9, 1, 1, 2],
    //       [9, 3, 1, 0, 0],
    //       [1, 1, 0, 1, 1],
    //       [1, 0, 0, 1, 9],
    //       [2, 1, 0, 1, 0],
    //     ]
    //   );
    //   expect(playerField).toStrictEqual([
    //     [h, h, 1, 1, 2],
    //     [h, 3, 1, 0, 0],
    //     [1, 1, 0, 1, 1],
    //     [1, 0, 0, 1, h],
    //     [2, 1, 0, 1, h],
    //   ]);
    // });
  });
});
