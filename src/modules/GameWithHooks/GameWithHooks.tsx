import React from "react";

import {
  generateFieldWithDefaultState,
  CellState,
  fieldGenerator,
  Coords,
  Field,
} from "@/helpers/Field";
import { Scoreboard } from "@/components/Scoreboard";
import Grid from "@/components/Grid/Grid";
import { GameArea, GameOver, Wrapper } from "@/components/Game";
import Top from "@/components/Top/Top";
import { LevelNames, GameSettings, levelNames } from "../GameSettings";
import { openCell } from "@/helpers/CellsManipulator";

export default function GameWithHooks() {
  const [level, setLevel] = React.useState<LevelNames>("beginner");

  const [size, bombs] = GameSettings[level];

  const [playerField, setPlayerField] = React.useState<Field>(
    generateFieldWithDefaultState(size, CellState.hidden)
  );

  const gameField = React.useMemo(
    () => fieldGenerator(size, bombs / (size * size)),
    [size, bombs]
  );

  const onClick = (coords: Coords) => {
    const newPlayerField = openCell(coords, playerField, gameField);
    setPlayerField([...newPlayerField]);
  };

  const onChangeLevel = ({
    target: { value: level },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(level as LevelNames);
    const [size] = GameSettings[level as LevelNames];

    const newPlayerField = generateFieldWithDefaultState(
      size,
      CellState.hidden
    );
    setPlayerField([...newPlayerField]);
  };

  return (
    <Wrapper>
      <Top feature='Flag' firstAction='ctrl' secondAction='click'>
        Minesweeper
      </Top>
      <GameArea>
        <Scoreboard
          time='0'
          levels={levelNames}
          defaultLevel={level}
          onChangeLevel={onChangeLevel}
          bombs='10'
          onReset={() => null}
        />
        <GameOver isWin={true} onClick={() => null} />
        <Grid onClick={onClick} onContextMenu={() => null}>
          {playerField}
        </Grid>
      </GameArea>
    </Wrapper>
  );
}
