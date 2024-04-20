import { incrementNeibours } from "./CellsManipulator";

export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Field = Array<Cell[]>;
export type Coords = [number, number];

export const CellState: Record<string, Cell> = {
  empty: 0,
  bomb: 9,
  hidden: 10,
  flag: 11,
  weakFlag: 12,
};

/**
 * Create empty field
 *
 * Example emptyFieldGenerator(2)
 * [
 *  [0, 0],
 *  [0, 0]
 * ]
 *
 * @param {number} size
 * @param {Cell} state
 * @returns {Field}
 */
export function emptyFieldGenerator(
  size: number,
  state: Cell = CellState.empty
): Field {
  return new Array(size).fill(null).map(() => new Array(size).fill(state));
}

export function fieldGenerator(size: number, probability: number): Field {
  if (probability < 0 || probability > 1) {
    throw new Error("Probability must be between 0 and 1");
  }

  let unprocessedCells = size * size;
  let restCellsWithBombs = unprocessedCells * probability;

  const result: Field = emptyFieldGenerator(size);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (restCellsWithBombs / unprocessedCells > Math.random()) {
        result[y][x] = CellState.bomb;

        incrementNeibours([y, x], result);

        restCellsWithBombs--;
      }

      unprocessedCells--;
    }
  }

  return result;
}
