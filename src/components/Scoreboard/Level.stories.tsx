import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import Level, { LevelProps } from "./Level";

const meta: Meta<typeof Level> = {
  title: "Scoredboard/Level",
  component: Level,
};

export default meta;
type Story = StoryObj<LevelProps>;

export const GameLevel: Story = {
  render: (args: any) => <Level {...args} />,
  args: {
    children: ["beginner", "intermediate", "expert"],
  },
};
