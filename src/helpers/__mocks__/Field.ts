export const fieldGenerator = (size: number) => {
  switch (size) {
    case 16:
      return [
        [9, 2, 2, 9, 2, 9, 1, 0, 0, 1, 9, 1, 0, 0, 0, 0],
        [4, 9, 3, 2, 3, 2, 1, 0, 0, 2, 2, 2, 0, 1, 1, 1],
        [9, 9, 2, 1, 9, 1, 0, 0, 0, 1, 9, 1, 0, 1, 9, 2],
        [2, 2, 1, 1, 1, 2, 2, 3, 2, 2, 1, 1, 0, 1, 2, 9],
        [0, 0, 0, 0, 0, 1, 9, 9, 9, 1, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 2, 4, 3, 3, 1, 2, 9, 2, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 9, 2, 9, 2, 2, 9, 1, 0],
        [0, 1, 1, 1, 1, 9, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1],
        [0, 1, 9, 1, 1, 1, 1, 1, 2, 2, 1, 1, 9, 1, 2, 9],
        [1, 2, 2, 1, 1, 1, 2, 2, 9, 9, 1, 1, 1, 1, 3, 9],
        [1, 9, 1, 0, 1, 9, 3, 9, 4, 2, 1, 0, 0, 1, 3, 9],
        [1, 1, 1, 0, 1, 1, 3, 9, 2, 1, 1, 1, 0, 1, 9, 2],
        [0, 1, 1, 1, 1, 1, 3, 3, 3, 2, 9, 1, 0, 2, 2, 2],
        [0, 1, 9, 1, 2, 9, 4, 9, 9, 4, 3, 2, 0, 1, 9, 1],
        [0, 1, 1, 2, 3, 9, 9, 3, 3, 9, 9, 3, 1, 2, 1, 1],
        [0, 0, 0, 1, 9, 3, 2, 1, 1, 3, 9, 3, 9, 1, 0, 0],
      ];

    case 22:
      return [
        [1, 9, 3, 9, 2, 1, 1, 2, 2, 3, 9, 1, 1, 2, 9, 2, 9, 9, 2, 9, 3, 9],
        [2, 2, 4, 9, 3, 3, 9, 4, 9, 9, 2, 1, 1, 9, 2, 2, 3, 3, 3, 2, 4, 9],
        [1, 9, 3, 2, 2, 9, 9, 5, 9, 3, 1, 0, 2, 3, 3, 2, 3, 9, 2, 1, 9, 2],
        [3, 4, 9, 1, 1, 3, 9, 3, 1, 2, 1, 2, 3, 9, 9, 2, 9, 9, 2, 2, 2, 2],
        [9, 9, 3, 1, 0, 2, 2, 2, 0, 1, 9, 3, 9, 9, 3, 2, 2, 3, 2, 2, 9, 1],
        [4, 9, 3, 1, 0, 1, 9, 1, 0, 1, 3, 9, 4, 2, 1, 0, 0, 1, 9, 3, 2, 1],
        [9, 3, 9, 2, 1, 3, 2, 3, 1, 1, 3, 9, 3, 0, 1, 1, 1, 1, 3, 9, 2, 0],
        [2, 3, 2, 2, 9, 3, 9, 3, 9, 1, 2, 9, 3, 1, 2, 9, 1, 0, 2, 9, 2, 0],
        [1, 9, 1, 2, 2, 4, 9, 4, 2, 2, 1, 1, 3, 9, 3, 1, 1, 0, 1, 2, 3, 2],
        [1, 1, 1, 1, 9, 3, 2, 3, 9, 1, 1, 1, 3, 9, 2, 0, 0, 0, 0, 1, 9, 9],
        [0, 0, 0, 1, 1, 2, 9, 2, 2, 2, 2, 9, 2, 1, 2, 1, 1, 0, 0, 1, 2, 2],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 9, 3, 2, 2, 1, 2, 9, 2, 2, 2, 1, 0, 0],
        [0, 1, 2, 9, 1, 0, 0, 1, 2, 3, 9, 1, 1, 9, 2, 1, 2, 9, 9, 1, 0, 0],
        [0, 1, 9, 3, 3, 2, 1, 1, 9, 3, 2, 1, 1, 1, 1, 0, 1, 2, 2, 1, 0, 0],
        [0, 1, 1, 2, 9, 9, 2, 2, 4, 9, 2, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 2, 3, 4, 3, 9, 5, 9, 3, 2, 9, 2, 0, 0, 0, 0, 1, 9, 2, 1],
        [1, 1, 0, 1, 9, 3, 9, 4, 9, 9, 3, 2, 9, 2, 0, 1, 1, 1, 1, 2, 9, 1],
        [9, 2, 0, 2, 3, 5, 9, 3, 3, 9, 2, 1, 1, 1, 0, 2, 9, 3, 1, 2, 2, 2],
        [9, 3, 1, 1, 9, 9, 2, 1, 1, 2, 2, 1, 0, 0, 0, 3, 9, 5, 9, 2, 2, 9],
        [3, 9, 2, 1, 2, 2, 1, 0, 0, 1, 9, 1, 0, 0, 0, 2, 9, 4, 9, 2, 2, 9],
        [2, 9, 3, 1, 0, 1, 1, 2, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 2, 2, 2, 1],
        [1, 2, 9, 1, 0, 1, 9, 2, 9, 1, 0, 1, 9, 1, 0, 0, 0, 0, 1, 9, 1, 0],
      ];

    default:
      return [
        [0, 0, 0, 0, 0, 0, 1, 9, 1],
        [0, 0, 0, 0, 1, 1, 2, 2, 2],
        [0, 0, 0, 0, 1, 9, 1, 1, 9],
        [0, 0, 1, 1, 3, 2, 2, 1, 1],
        [0, 0, 1, 9, 2, 9, 1, 0, 0],
        [1, 1, 2, 1, 2, 1, 1, 1, 1],
        [1, 9, 1, 0, 0, 0, 0, 1, 9],
        [1, 1, 1, 1, 1, 2, 1, 3, 2],
        [0, 0, 0, 1, 9, 2, 9, 2, 9],
      ];
  }
};

export const CellState = {
  empty: 0,
  bomb: 9,
  hidden: 10,
  flag: 11,
  weakFlag: 12,
};

export function generateFieldWithDefaultState(
  size: number,
  state = CellState.empty
) {
  return new Array(size).fill(null).map(() => new Array(size).fill(state));
}
