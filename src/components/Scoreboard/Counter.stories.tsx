import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import Counter, { CounterProps } from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Scoredboard/Counter",
  component: Counter,
};

export default meta;
type Story = StoryObj<CounterProps>;

export const GameCounter: Story = {
  render: (args: any) => <Counter {...args} />,
  args: {
    children: "010",
  },
};
