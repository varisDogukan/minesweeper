import React from "react";

import { Field } from "./helpers/Field";
import Top from "./components/Top/Top";
import { Wrapper, GameArea, GameOver } from "./components/Game";
import { Scoreboard } from "./components/Scoreboard";
import Grid from "./components/Grid/Grid";

const StaticField: Field = [
  [9, 2, 9, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 0, 1, 9, 1, 1, 9, 1],
  [0, 0, 1, 9, 10, 0, 2, 2, 2, 1, 1, 1],
  [0, 0, 10, 10, 1, 0, 1, 9, 1, 2, 2, 2],
  [0, 1, 1, 2, 2, 9, 1, 1, 1, 0, 0, 0],
  [0, 1, 9, 3, 9, 2, 10, 0, 0, 2, 1, 1],
  [0, 2, 2, 4, 9, 2, 10, 1, 1, 1, 9, 1],
  [0, 1, 9, 2, 1, 1, 1, 9, 1, 2, 2, 2],
  [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
];

interface GameProps {
  children: Field;
}

function Game({ children }: GameProps) {
  return (
    <Wrapper>
      <Top feature='Flag' firstAction='ctrl' secondAction='click'>
        Minesweeper
      </Top>
      <GameArea>
        <Scoreboard
          time='0'
          levels={["begginer", "intermediate", "expert"]}
          mines='10'
          onReset={() => null}
        />
        <GameOver isWin={true} onClick={() => null} />
        <Grid onClick={() => null} onContextMenu={() => null}>
          {StaticField}
        </Grid>
      </GameArea>
    </Wrapper>
  );
}

export default function App() {
  return (
    <>
      <Game>{StaticField}</Game>
    </>
  );
}
