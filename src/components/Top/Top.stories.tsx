import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import Top, { TopComponentType } from "./Top";

const meta: Meta<typeof Top> = {
  title: "Top/Top",
  component: Top,
};

export default meta;
type Story = StoryObj<TopComponentType>;

export const GameLegend: Story = {
  render: (args: any) => <Top {...args} />,
  args: {
    children: "Minesweeper",
    feature: "Flag",
    firstAction: "Ctrl",
  },
};
