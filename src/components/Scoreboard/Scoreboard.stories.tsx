import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import Scoreboard, { ScoreboardProps } from "./Scoreboard";

const meta: Meta<typeof Scoreboard> = {
  title: "Scoredboard/Scoreboard",
  component: Scoreboard,
};

export default meta;
type Story = StoryObj<ScoreboardProps>;

export const GameScoreboard: Story = {
  render: (args: any) => <Scoreboard {...args} />,
  args: {
    time: "000",
    levels: ["begginer", "intermediate", "expert"],
    mines: "010",
  },
};
