import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import GameName, { GameNameProps } from "./GameName";

const meta: Meta<typeof GameName> = {
  title: "Top/GameName",
  component: GameName,
};

export default meta;
type Story = StoryObj<GameNameProps>;

export const MinesweeperGameName: Story = {
  render: (args: any) => <GameName {...args} />,
  args: {
    name: "Minesweeper",
  },
};
