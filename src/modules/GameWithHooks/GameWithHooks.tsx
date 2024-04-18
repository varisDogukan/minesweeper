import React from "react";

import { emptyFieldGenerator, CellState } from "@/helpers/Field";
import { Scoreboard } from "@/components/Scoreboard";
import Grid from "@/components/Grid/Grid";
import { GameArea, GameOver, Wrapper } from "@/components/Game";
import Top from "@/components/Top/Top";
import {
  GameLevels,
  LevelNames,
  GameSettings,
  levelNames,
} from "../GameSettings";

export default function GameWithHooks() {
  const [level, setLevel] = React.useState<LevelNames>("beginner");

  const [size, bombs] = GameSettings[level];

  const playerField = emptyFieldGenerator(size, CellState.hidden);

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
          onChangeLevel={({ target: { value } }) => {
            setLevel(value as LevelNames);
          }}
          bombs='10'
          onReset={() => null}
        />
        <GameOver isWin={true} onClick={() => null} />
        <Grid onClick={() => null} onContextMenu={() => null}>
          {playerField}
        </Grid>
      </GameArea>
    </Wrapper>
  );
}
