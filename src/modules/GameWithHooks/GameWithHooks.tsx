import React from "react";
import { Scoreboard } from "@/components/Scoreboard";
import Grid from "@/components/Grid/Grid";
import { GameArea, GameOver, Wrapper } from "@/components/Game";
import Top from "@/components/Top/Top";
import { LevelNames, levelNames } from "../GameSettings";
import useGame from "./useGame";

export default function GameWithHooks() {
  const {
    level,
    isGameOver,
    isWin,
    settings,
    playerField,
    onClick,
    onChangeLevel,
    onReset,
  } = useGame();

  const [, bombs] = settings;

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
          onChangeLevel={({
            target: { value: level },
          }: React.ChangeEvent<HTMLSelectElement>) =>
            onChangeLevel(level as LevelNames)
          }
          bombs={String(bombs)}
          onReset={onReset}
        />
        {isGameOver && <GameOver isWin={isWin} onClick={onReset} />}
        <Grid onClick={onClick} onContextMenu={() => null}>
          {playerField}
        </Grid>
      </GameArea>
    </Wrapper>
  );
}
