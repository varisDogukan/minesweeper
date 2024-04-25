import { CellState, Coords, Field } from "./Field";

/**
 * Set flag to the cell
 * @param {Coords} coords
 * @param {Field} playerField
 * @param {Field} gameField
 * @returns {[Field, FlagCounter]}
 */
export default function setFlag(
  coords: Coords,
  playerField: Field,
  gameField: Field
): Field {
  const [y, x] = coords;
  const cell = playerField[y][x];

  const { flag, weakFlag, hidden } = CellState;

  switch (cell) {
    case flag:
      playerField[y][x] = weakFlag;
      break;

    case hidden:
      playerField[y][x] = flag;
      break;

    case weakFlag:
      playerField[y][x] = hidden;
      break;
  }

  return playerField;
}
