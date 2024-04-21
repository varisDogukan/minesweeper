import { Cell, CellState, Coords, Field } from "./Field";

export function getNeigboursItems([y, x]: Coords): Record<
  string,
  [number, number]
> {
  return {
    top: [y - 1, x],
    topRight: [y - 1, x + 1],
    right: [y, x + 1],
    rightBottom: [y + 1, x + 1],
    bottom: [y + 1, x],
    bottomLeft: [y + 1, x - 1],
    left: [y, x - 1],
    leftTop: [y - 1, x - 1],
  };
}

export function checkItemInField([y, x]: Coords, { length }: Field): boolean {
  return y >= 0 && x >= 0 && length - y > 0 && length - x > 0;
}

export function incrementNeibours(coords: Coords, field: Field): Field {
  const items = getNeigboursItems(coords);

  for (const item of Object.values(items)) {
    if (checkItemInField(item, field)) {
      const [y, x] = item;
      const cell = field[y][x];

      if (cell < 8) {
        field[y][x] = (cell + 1) as Cell;
      }
    }
  }
  return field;
}

/**
 * Open cell in the player field using game field info
 * @param {Coords} coords
 * @param {Field} playerField
 * @param {Field} gameField
 * @returns {Field}
 */
export function openCell(
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
