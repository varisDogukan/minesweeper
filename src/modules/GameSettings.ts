export const GameLevels = ["beginner", "intermediate", "expert"] as const;

export type LevelNames = (typeof GameLevels)[number];
export const levelNames: LevelNames[] = ["beginner", "intermediate", "expert"];

/**
 * @type [size, bombs]
 */
export type Settings = [number, number];

export const GameSettings: Record<LevelNames, Settings> = {
  beginner: [9, 10],
  intermediate: [16, 44],
  expert: [22, 99],
};
