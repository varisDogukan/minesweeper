import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { CellState, Field } from "@/helpers/Field";

import { Scoreboard } from "@/components/Scoreboard";

import { GameArea } from "./GameArea";
import { Wrapper, WrapperProps } from "./Wrapper";
import { GameOver } from "./GameOver";
import Top from "../Top/Top";
import Grid from "../Grid/Grid";

const meta: Meta<typeof Wrapper> = {
  title: "Game/Example",
  component: Wrapper,
};

export default meta;
type Story = StoryObj<WrapperProps>;

const { empty: e, hidden: h, bomb: b, flag: f } = CellState;

const defautGameField: Field = [
  [f, f, h, h, h],
  [b, 3, 1, e, e],
  [1, 1, h, 1, 1],
  [1, e, e, 1, b],
  [2, 1, e, 1, e],
];

export const GameExample: Story = {
  render: (args: any) => <Wrapper {...args} />,
  args: {
    children: (
      <>
        <Top feature='Flag' firstAction='right click' secondAction='click'>
          Minesweeper
        </Top>
        <GameArea>
          <Scoreboard
            time='000'
            levels={["beginner", "intermediate", "expert"]}
            mines='010'
            onReset={() => null}
          />
          <GameOver onClick={() => null} isWin={true} />
          <Grid onClick={() => null} onContextMenu={() => null}>
            {defautGameField}
          </Grid>
        </GameArea>
      </>
    ),
  },
};
