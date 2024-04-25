import { checkItemInField, getNeigboursItems } from "./CellsManipulator";
import { CellState, Coords, Field } from "./Field";

/**
 * Open cell in the player field using game field info
 * @param {Coords} coords
 * @param {Field} playerField
 * @param {Field} gameField
 * @returns {Field}
 */
export default function openCell(
  coords: Coords,
  playerField: Field,
  gameField: Field
): Field {
  const [y, x] = coords;
  const gameCell = gameField[y][x];

  if (gameCell === CellState.bomb) {
    throw new Error("Game Over");
  }

  if (gameCell === CellState.empty) {
    playerField[y][x] = gameCell;

    const items = getNeigboursItems(coords);

    for (const coords of Object.values(items)) {
      if (checkItemInField(coords, gameField)) {
        const [y, x] = coords;

        const gameCell = gameField[y][x];
        const playerCell = playerField[y][x];

        if (gameCell === CellState.hidden && playerCell !== CellState.bomb) {
          playerField = openCell(coords, playerField, gameField);
        }

        if (gameCell < CellState.bomb) {
          playerField[y][x] = gameCell;
        }
      }
    }
  }

  playerField[y][x] = gameCell;

  return playerField;
}
