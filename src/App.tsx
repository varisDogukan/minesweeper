import React from "react";

import Top from "./components/Top/Top";
import { Scoreboard } from "./components/Scoreboard";

export default function App() {
  return (
    <>
      <Top feature='Flag' firstAction='ctrl' secondAction='click'>
        Minesweeper
      </Top>
      <Scoreboard
        time='000'
        levels={["begginer", "intermediate", "expert"]}
        mines='010'
        onReset={() => null}
      />
    </>
  );
}
