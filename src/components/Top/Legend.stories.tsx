import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import Legend, { LegendProps } from "./Legend";

const meta: Meta<typeof Legend> = {
  title: "Top/Legend",
  component: Legend,
};

export default meta;
type Story = StoryObj<LegendProps>;

export const GameLegend: Story = {
  render: (args: any) => <Legend {...args} />,
  args: {
    feature: "Flag",
    firstAction: "ctrl",
    secondAction: "click",
  },
};
