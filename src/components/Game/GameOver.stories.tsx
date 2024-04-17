import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { GameOver, GameOverProps } from "./GameOver";

const meta: Meta<typeof GameOver> = {
  title: "Game/GameOver",
  component: GameOver,
};

export default meta;
type Story = StoryObj<GameOverProps>;

export const GameOverWinExample: Story = {
  render: (args: any) => <GameOver {...args} />,
  args: {
    isWin: true,
  },
};

export const GameOverLooseExample: Story = {
  render: (args: any) => <GameOver {...args} />,
  args: {
    isWin: false,
  },
};
