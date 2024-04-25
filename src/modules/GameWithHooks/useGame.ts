import React, { useState } from "react";

import {
  generateFieldWithDefaultState,
  CellState,
  fieldGenerator,
  Coords,
  Field,
} from "@/helpers/Field";
import { LevelNames, GameSettings } from "../GameSettings";
import openCell from "@/helpers/openCell";
import setFlag from "@/helpers/setFlag";

interface ReturnType {
  level: LevelNames;
  isGameOver: boolean;
  isWin: boolean;
  settings: [number, number];
  playerField: Field;
  gameField: Field;
  onClick: (coords: Coords) => void;
  onContextMenu: (coords: Coords) => void;
  onChangeLevel: (level: LevelNames) => void;
  onReset: () => void;
}

export default function useGame(): ReturnType {
  const [level, setLevel] = useState<LevelNames>("beginner");

  const [isGameOver, setIsGameOver] = React.useState(false);
  const [isWin, setIsWin] = React.useState(false);

  const [size, bombs] = GameSettings[level];

  const [playerField, setPlayerField] = useState<Field>(
    generateFieldWithDefaultState(size, CellState.hidden)
  );

  const [gameField, setGameField] = useState<Field>(
    fieldGenerator(size, bombs / (size * size))
  );

  const onClick = (coords: Coords) => {
    try {
      const newPlayerField = openCell(coords, playerField, gameField);
      setPlayerField([...newPlayerField]);
    } catch (error) {
      setPlayerField([...gameField]);
      setIsGameOver(true);
    }
  };

  const onContextMenu = (coords: Coords) => {
    const newPlayerField = setFlag(coords, playerField, gameField);
    setPlayerField([...newPlayerField]);
  };

  const resetHandler = ([size, bombs]: [number, number]) => {
    const newGameField = fieldGenerator(size, bombs / (size * size));
    const newPlayerField = generateFieldWithDefaultState(
      size,
      CellState.hidden
    );

    setGameField([...newGameField]);
    setPlayerField([...newPlayerField]);
    setIsGameOver(false);
    setIsWin(false);
  };

  const onChangeLevel = (level: LevelNames) => {
    setLevel(level);
    const newSettings = GameSettings[level];
    resetHandler(newSettings);
  };

  const onReset = () => resetHandler([size, bombs]);

  return {
    level,
    isGameOver,
    isWin,
    settings: [size, bombs],
    playerField,
    gameField,
    onClick,
    onContextMenu,
    onChangeLevel,
    onReset,
  };
}
