import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import Reset from "./Reset";

const meta: Meta<typeof Reset> = {
  title: "Scoredboard/Reset",
  component: Reset,
};

export default meta;
type Story = StoryObj<typeof Reset>;

export const GameReset: Story = {
  render: (args: any) => <Reset {...args} />,
};
